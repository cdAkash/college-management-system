"use client"

import { useEffect, useState, useRef } from "react"

export default function CompanyLogo() {
  const [position, setPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef(null)

  const logos = [
      { name: "Accenture", logo: "./company/Accenture.png" },
      { name: "Amazon", logo: "./company/Amazon.png" },
      { name: "Amdocs", logo: "./company/Amdocs.png" },
      { name: "Capgemini", logo: "./company/Capgemini.png" },
      { name: "Clinisys", logo: "./company/clinisys.png" },
      { name: "Cognizant", logo: "./company/Cognizant.png" },
      { name: "Deloitte", logo: "./company/Deloitte_Logo.png" },
      { name: "EPAM", logo: "./company/EPAM.png" },
      { name: "Microsoft", logo: "./company/Microsoft.png" },
      { name: "NASSCOM", logo: "./company/NASSCOM.png" },
      { name: "Tata Consultancy Services", logo: "./company/Tata_Consultancy_Services.png" },
      { name: "Wipro", logo: "./company/wipro.png" }
  ]

  const animate = () => {
    setPosition((prev) => (prev - 1) % (containerRef.current.scrollWidth / 2));
  };

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(animate, 20);
      return () => clearInterval(intervalId);
    }
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="w-full py-12 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Top Recruiters 
        </h2>
      </div>

      <div 
        className="relative w-full"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: '100px' }} // Ensure container height fits the logos
      >
        <div 
          className="flex items-center gap-8 absolute"
          style={{
            transform: `translateX(${position}px)`,
            transition: isPaused ? 'none' : 'transform 0.02s linear'
          }}
        >
          {logos.concat(logos).map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 w-[250px] h-[100px] flex items-center justify-center"
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="object-contain w-full h-full transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
