import React from "react"
import { useToast, Button } from "@chakra-ui/react"

function RegisterToast({className, title, width, backgroundColor, color, _hover}) {
    const toast = useToast()
    return (
        <Button
            className={className}
            width={width}
            backgroundColor={backgroundColor}
            color={color}
            _hover={_hover}
            onClick={() =>
                toast({
                    title: 'Account created.',
                    description: "Akun anda sudah terdaftar silahkan ke halaman Login",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    })}>
        {title}</Button>
)}

export default RegisterToast
