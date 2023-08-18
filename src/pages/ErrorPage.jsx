import React from "react";
import { useRouteError, Link as LinkRoute } from "react-router-dom";
import { Icon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-screen gap-y-5"
    >
      <h1 className="text-teal-600 text-6xl font-bold">Oops!</h1>
      <p className="text-gray-400 text-md">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <LinkRoute to={"/home"} className="">
        <Link color="teal" className="hover:font-bold">
          <span className="text-teal-500">Back to Home</span>
          <span className="mx-1">
            <Icon as={ExternalLinkIcon} color="teal.500" />
          </span>
        </Link>
      </LinkRoute>
    </div>
  );
}

export default ErrorPage;
