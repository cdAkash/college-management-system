import React from "react";
import { useNavigate } from "react-router-dom";
import departments from "@/data/departments";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Menubar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  return (
    <nav className="bg-background shadow mt-16">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <ul className="flex items-center gap-6">
          <li>
            <a
              onClick={() => handleNavigate("/")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => handleNavigate("/about")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-primary transition-colors">
                    Departments
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {departments.map((department, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <a
                              onClick={() => handleNavigate(`/departments/${department.component.toLowerCase()}`)}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{department.name}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <a
              onClick={() => handleNavigate("/team")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              onClick={() => handleNavigate("/gallery")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Gallery
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <a
              onClick={() => handleNavigate("/login")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Login
            </a>
          </li>
          <li>
            <a
              onClick={() => handleNavigate("/signup")}
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