import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  IconButton,
  Button,
  ButtonGroup,
  Icon,
  Show,
} from "@chakra-ui/react";
import {
  FiHome,
  FiShoppingCart,
  FiUser,
  FiBarChart,
  FiSettings,
  FiFileText,
  FiClipboard,
  FiBell,
  FiUsers,
} from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Sidebar = ({ isExpandedSidebar }) => {
  const { pathname } = useLocation();

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const pages = [
    { label: "Dashboard", icon: FiHome },
    { label: "Sales", icon: FiShoppingCart },
    { label: "Inventory", icon: FiClipboard },
    { label: "Transaction History", icon: FiFileText },
    { label: "Financial Report", icon: FiBarChart },
    { label: "Customer Management", icon: FiUser },
    { label: "Staff Management", icon: FiUsers },
    { label: "Analytical Report", icon: FiBarChart },
    { label: "Notifications", icon: FiBell },
  ];

  return (
    <Box
      as="nav"
      pos="fixed"
      top={0}
      left={0}
      h="100vh"
      w={isExpanded ? "250px" : "72px"}
      bg="gray.800"
      color="white"
      boxShadow="lg"
      zIndex="sticky"
      transition="width 0.3s ease-in-out"
    >
      <Flex direction="column" align="center" justify="space-between" h="100%">
        <VStack spacing={6} mt={8}>
          {/* <IconButton
            aria-label="Menu"
            icon={<Icon as={FiMenu} />}
            variant="ghost"
            size="lg"
            onClick={handleToggleSidebar}
          /> */}
          <div
            onClick={handleToggleSidebar}
            className="cursor-pointer flex flex-row gap-4 justify-start items-center  w-full px-3"
          >
            <img className="rounded-md w-10 m-1" src={Logo} />
            {isExpanded && (
              <h1 className="text-2xl font-bold text-white">
                Toko<span className="text-green-500">BukuKu</span>
              </h1>
            )}
          </div>
          {!isExpanded &&
            pages.map((page) => (
              <Link
                to={`${
                  page.label == "Dashboard"
                    ? "/"
                    : "/" + page.label.toLocaleLowerCase().replace(" ", "-")
                }`}
                key={page.label}
              >
                <span
                  className={`transition-all ${
                    isExpanded ? "hidden" : "block"
                  }`}
                >
                  <IconButton
                    _hover={{ backgroundColor: "green.400" }}
                    _focus={{ backgroundColor: "green.500" }}
                    aria-label={page.label}
                    icon={<Icon as={page.icon} color="white" />}
                    variant={`${
                      pathname.replace("/", "") ===
                        page.label.toLowerCase().replace(" ", "-") ||
                      (page.label == "Dashboard" && pathname == "/")
                        ? "solid"
                        : "ghost"
                    }`}
                    colorScheme={`${
                      pathname.replace("/", "") ==
                        page.label.toLowerCase().replace(" ", "-") ||
                      (page.label == "Dashboard" && pathname == "/")
                        ? "solid"
                        : "gray"
                    }`}
                    size="lg"
                  />
                </span>
              </Link>
            ))}
          {isExpanded &&
            pages.map((page) => (
              <ButtonGroup
                w={isExpanded ? "250px" : "72px"}
                transition="width 0.3s ease-in-out, background-color 0.3s"
                key={page.label}
              >
                <Link
                  to={`${
                    page.label == "Dashboard"
                      ? "/"
                      : "/" + page.label.toLocaleLowerCase().replace(" ", "-")
                  }`}
                >
                  <Button
                    leftIcon={<Icon as={page.icon} />}
                    variant={`${
                      pathname.replace("/", "") ==
                      page.label.toLowerCase().replace(" ", "-")
                        ? "solid"
                        : "ghost"
                    }`}
                    colorScheme={`
                    ${
                      pathname.replace("/", "") ==
                      page.label.toLowerCase().replace(" ", "-")
                        ? "green"
                        : "gray"
                    } `}
                    w={isExpanded ? "250px" : "70px"}
                    transition="width 0.3s ease-in-out"
                    _hover={{ backgroundColor: "green.500" }}
                    _focus={{ backgroundColor: "green.500" }}
                    sx={{
                      justifyContent: "flex-start",
                      textAlign: "left",
                      paddingLeft: "3",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {page.label}
                  </Button>
                </Link>
              </ButtonGroup>
            ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
