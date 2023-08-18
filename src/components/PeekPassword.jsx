import React from "react";
import { InputGroup, InputRightElement, Input, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { ClassNames } from "@emotion/react";

function PasswordInput({
  focusBorderColor,
  placeholder,
  _placeholder,
  onChange,
}) {
  let value = () => {
    return { value };
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handlePasswordChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <InputGroup size="md">
      <Input
        focusBorderColor={focusBorderColor}
        _placeholder={_placeholder}
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={placeholder}
        onChange={handlePasswordChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? (
            <ViewOffIcon color={"red.400"} />
          ) : (
            <ViewIcon color={"green.500"} />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
