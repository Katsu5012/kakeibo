import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { Card } from "../components/atoms/app/Card";
import { SignUpForm } from "../components/molecules/SignUpForm";
import { NextPage } from "next";
import { signUpAPI } from "../api/signup";

const SignUp: NextPage = () => {
  const [userName, setUserName] = useState("");
  console.log(userName);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    console.log(e);
    await signUpAPI(userName, email, password);
  };
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Sign Up to your account
        </Heading>
        <Card>
          <SignUpForm
            setUserName={setUserName}
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={onSubmit}
          />
        </Card>
      </Box>
    </Box>
  );
};
export default SignUp;
