import React from "react";
import {
  Icon,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { BiBell } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import AccountMenu from "./AccountMenu";
// import { SearchIcon } from "@chakra-ui/icons";

function Topbar() {
  const { pathname } = useLocation();
  function capitalizeWords(sentence) {
    const words = sentence.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  return (
    <div>
      <nav className="flex flex-row justify-between items-center bg-green-500 space-x-4 w-full fixed z-10 py-2 px-4">
        <Box marginStart="90px">
          <Breadcrumb spacing="8px" color="white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {pathname != "/" && (
              <BreadcrumbItem>
                <BreadcrumbLink href={pathname}>
                  {capitalizeWords(pathname.replace("-", " ").replace("/", ""))}
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>

        <div className="flex flex-row justify-center items-center">
          {/* <IconButton
            icon={<Icon as={BiBell} h={5} w={5} color="white" />}
            size="lg"
            aria-label="cart"
            background="none"
            _hover="bg-green-500"
            marginEnd="20px"
            onClick={PopNoivication}
          /> */}
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<Icon as={BiBell} h={5} w={5} color="white" />}
                size="lg"
                aria-label="cart"
                background="none"
                _hover="bg-green-500"
                marginEnd="20px"
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Notifikasi!</PopoverHeader>
              <PopoverBody>
                Notifikasi anda akan muncul di sini Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ex dignissimos placeat cum quam
                praesentium, magni eos consectetur tenetur labore?
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <AccountMenu />
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
