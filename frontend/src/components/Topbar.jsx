import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; 
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background text-foreground border-b fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/")}>
          <img
            src="/logo_msit.png" 
            alt="College Logo"
            className="h-10 w-15"
          />
          <span className="font-semibold text-primary text-lg">
            Meghnad Saha Institute of Technology
          </span>
        </div>

        {/* Info */}
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">{currentTime}</span>
          <span className="text-muted-foreground">📞 +91 98765 43210</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="text-xs"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </Button>
          <Button className="text-xs" onClick={() => navigate('/Contactus')}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
