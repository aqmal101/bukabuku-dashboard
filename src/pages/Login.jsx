import { useState, useEffect } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Link,
  Checkbox,
  Toast,
} from "@chakra-ui/react";
import PasswordInput from "../components/PeekPassword";
import { Link as LinkRoute, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useToast } from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // const handleLogin = async () => {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: email,
  //     password: password,
  //   });
  //   if (error) {
  //     console.log("ini error", error);
  //     toast({
  //       title: "Login Failed.",
  //       description: "Login Failed due to ...",
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     navigate("/");
  //   } else {
  //     localStorage.setItem("session", data.session.access_token);
  //     toast({
  //       title: "Account Logged.",
  //       description: "We've created your account for you.",
  //       status: "success",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // };

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      localStorage.setItem("session", data.session.access_token);
      toast({
        title: "Account Logged In",
        description: "You have successfully logged in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: "Login failed due to an error.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleChangePassword = (newPassword) => {
    setPassword(newPassword);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-md border-2 rounded-lg p-10 space-y-3 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-green-500">Login</h1>
        <p className="text-sm text-center text-green-800">
          Silahkan Masukkan Username dan Password Anda untuk Masuk ke Akun
        </p>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="Masukkan Username"
            _placeholder={{ fontSize: 13 }}
            type="text"
            focusBorderColor="green.500"
            color={"black"}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            placeholder="Masukkan Password"
            value={password}
            _placeholder={{ fontSize: 13 }}
            focusBorderColor="green.500"
            onChange={handleChangePassword}
          ></PasswordInput>
        </FormControl>

        <Checkbox colorScheme="green">
          <p className="text-sm">
            Apakah Anda Setuju dengan Ketentuan yang Berlaku?
          </p>
        </Checkbox>

        <Button
          onClick={() => handleLogin()}
          colorScheme="green"
          width={"full"}
        >
          Login
        </Button>
        <Link className="text-sm hover:text-red-500 hover:font-bold hover:cursor-pointer">
          Lupa Kata Sandi
        </Link>
        <p className="text-sm">
          Anda belum memiliki akun?
          <LinkRoute to={"/register"}>
            <Link color="green" className="hover:font-bold">
              Register
            </Link>
          </LinkRoute>
        </p>
      </div>
    </div>
  );
}

export default Login;
