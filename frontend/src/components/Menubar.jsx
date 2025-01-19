import React from "react";
import { useNavigate } from "react-router-dom";
const Menubar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-background shadow mt-16">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <ul className="flex items-center gap-6">
          <li>
            <a
              onClick={()=>navigate("/")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={()=>navigate("/about")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              
              onClick={()=>navigate("/departments")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Departments
            </a>
          </li>
          <li>
            <a
          
              onClick={()=>navigate("/team")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Acheivements
            </a>
          </li>
          <li>
            <a
              onClick={()=>navigate("/gallery")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Gallery
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <a
              onClick={()=>navigate("/login")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Login
            </a>
          </li>
          <li>
            <a
              onClick={()=>navigate("/signup")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
