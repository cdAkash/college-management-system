import { UserCog } from "lucide-react";
import ChangePassword from "@/components/Dashboard/Forms/ChangePassword";
import UserDetails from "@/components/Dashboard/UserManagement/UserDetails";
import UpdateFaceData from "@/components/Dashboard/UserManagement/UpdateFaceData";
import ViewNotices from "@/components/Dashboard/Notice/ViewNotices";
import Syllabus from "@/components/Dashboard/Student/Syllabus";
import Papers from "@/components/Dashboard/Student/Papers";
const StudentControlConfig = {
  sidebarControls: [
    {
      label: "Student Personal Controls",
      icon: UserCog,
      items: [
        { label: "Change Password", component: ChangePassword },
        { label: "User Details", component: UserDetails },
        { label: "Update Face Data", component: UpdateFaceData },
        { label: "View Notices", component: ViewNotices },
        { label: "Syllabus", component: Syllabus },
        { label: "Previous Year Papers", component: Papers }
      ],
    },
  ],
};

export default StudentControlConfig;
