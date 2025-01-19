"use client";

import React, { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import {  CardDescription } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"


export function NoticeImageCalendar() {

  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const generateData = () => {
    const baseAdmissions = 1000
    const years = 26
    return Array.from({ length: years }, (_, index) => {
      const year = 2000 + index
      const admissions = baseAdmissions + Math.floor(Math.random() * 100 * index)
      return { year, admissions }
    })
  }
  
  const data = generateData()
  useEffect(() => {
    const fetchNotices = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/global-notice", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const result = await response.json();
        if (!response.ok) throw new Error(result.message);
        console.log(result.data)
        const globalNotices = result.data.filter(notice=>notice.isGlobal)
        console.log(globalNotices)
        setNotices(globalNotices);
      } catch (err) {
        console.error("Error fetching notices:", err);
        setMessage("An error occurred while fetching the notices.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission to the database
    try {
      const response = await fetch("http://localhost:8000/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
        });
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">

      <div className="flex flex-col items-center w-full md:w-1/4">
          <Card className="h-full w-full bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-center text-gray-900 dark:text-gray-100">
                Admission Enquiry
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-between h-auto">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-400 mb-2" htmlFor="name">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-400 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-400 mb-2" htmlFor="email">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-400 mb-2" htmlFor="course">
                    Course of Interest
                  </label>
                  <Select
                    id="course"
                    name="course"
                    value={formData.course}
                    onValueChange={(value) => setFormData((prevData) => ({ ...prevData, course: value }))}
                    className="w-full"
                    required
                  >
                    <SelectTrigger className="w-full">
                      <span>{formData.course || "Select a course"}</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="B.Tech">B.Tech</SelectItem>
                      <SelectItem value="M.Tech">M.Tech</SelectItem>
                      <SelectItem value="MBA">MBA</SelectItem>
                      <SelectItem value="MCA">MCA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

   
        <div className="flex justify-center w-full md:w-1/2">
        <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Student Admissions Trend</CardTitle>
        <CardDescription>Number of students admitted from 2000 to 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="year"
                tick={{ fill: "hsl(var(--foreground))" }}
                tickFormatter={(value) => value.toString().slice(-2)}
              />
              <YAxis tick={{ fill: "hsl(var(--foreground))" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                itemStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Line
                type="monotone"
                dataKey="admissions"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
        </div>


        <div className="w-full md:w-1/4">
          <Card className="h-full w-full bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-center text-gray-900 dark:text-gray-100">
                Notice Board
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-96 pt-4">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner className="w-10 h-10 animate-spin" />
              </div>
            ) : (
              <ul className="space-y-2">
                {notices.map((notice) => (
                  <li
                    key={notice._id}
                    className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <a href={notice.content} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-blue-500">
                      {notice.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {message && <p className="mt-4 text-red-500 dark:text-red-400">{message}</p>}
          </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
