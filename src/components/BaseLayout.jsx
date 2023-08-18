import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar";

const BaseLayout = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Box>
      <Topbar />
      <div className="w-full flex flex-row">
        <Sidebar />
        <div className="absolute w-full pl-20 pt-20 pr-3 bg-gray-100">
          {children}
        </div>
      </div>
    </Box>
  );
};

export default BaseLayout;
