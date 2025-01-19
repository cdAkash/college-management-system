import React from "react";
import Menubar from "@/components/Menubar";
import { FullWidthCarousel } from "@/components/HompageComponents/FullWidthCarousel";
import { NoticeImageCalendar } from "@/components/HompageComponents/NoticeImageCalendar";
import MissionVision from "@/components/HompageComponents/MissionVision";
import InfoCards from "@/components/HompageComponents/InfoCards";
import DeptCards from "@/components/HompageComponents/DeptCards";
import ClubCards from "@/components/HompageComponents/ClubCards";
import Component from "@/components/HompageComponents/ChartArea";
import CompanyLogo from "@/components/HompageComponents/CompanyLogo";
const Homepage = () => {
  return (
    <div >
      <Menubar/>
      <FullWidthCarousel />
      <Component/>
      <NoticeImageCalendar />
      <MissionVision/>
      <InfoCards/>
      <DeptCards/>
      <ClubCards/>
      <CompanyLogo/>
    </div>
  );
};

export default Homepage;
