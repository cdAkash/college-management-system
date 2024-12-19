import React from "react";
import Menubar from "@/components/Menubar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactUs = () => {
  return (
    <>
      <Menubar />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <Card className="w-full  bg-gray-100 dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Our Campus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src="/reachus.jpg"
                    alt="College Building"
                    className="w-3/4 h-auto object-cover rounded-lg"
                  />
                </div>

                <div className="w-full md:w-1/2 ">
                  <p className="text-2xl mb-4">
                    <strong>For Admission:</strong> 7044598807
                  </p>
                  <p className="text-2xl">
                    <strong>Contact Information</strong>
                    <br />
                    <strong>Address:</strong>
                    <br />
                    Behind Urbana Complex, Near Ruby General Hospital,
                    <br />
                    Nazirabad Rd, Uchhepota, Kolkata,
                    <br />
                    South 24 Parganas, Pincode- 700150,
                    <br />
                    West Bengal, India
                    <br />
                    <strong>Contact Numbers:</strong> 7044598807 / 8017624563 / 
                    <br />
                    <strong>E-mail Contacts:   </strong> 
                    <a href="https://info@msit.edu.in"
                    target="_blank"
        rel="noopener noreferrer"
                    >info@msit.edu.in</a>
                  </p>
                </div>
              </div>
            </CardContent>
            
          </Card>
        </div>

        {/* Google Map */}
        <Card className="w-full mt-6 bg-gray-100 dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d7371.664824566405!2d88.4150883!3d22.5104701!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2zTWVnaG5hZCBTYWhhIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5IOCmruCnh-CmmOCmqOCmvuCmpiDgprjgpr7gprngpr7igKY!3m2!1d22.5104701!2d88.4150883!4m5!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20of%20Technology%20Behind%20Urbana%20Complex%20Near%2CRuby%20General%20Hospital%20Anandapur%20Rd%2C%20Uchhepota%20Kolkata%2C%20West%20Bengal%20700150!3m2!1d22.5104701!2d88.4150883!5e0!3m2!1sen!2sin!4v1734606700098!5m2!1sen!2sin"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="MSIT College Location"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactUs;