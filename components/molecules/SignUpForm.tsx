import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Flex,
} from "@chakra-ui/react";
import * as React from "react";

export const SignUpForm = (props: any) => {
  const handleChangeUserName = (event: any) => {
    props.setUserName(event.target.value);
  };

  const handleChangeEmail = (event: any) => {
    props.setEmail(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    props.setPassword(event.target.value);
  };

  return (
    <chakra.form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(e);
      }}
    >
      <Stack spacing="6">
        <FormControl id="userName">
          <FormLabel>Name</FormLabel>
          <Input
            name="userName"
            type="userName"
            autoComplete="userName"
            required
            onChange={handleChangeUserName}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={handleChangeEmail}
          />
        </FormControl>
        <FormControl id="password">
          <Flex justify="space-between">
            <FormLabel>Password</FormLabel>
          </Flex>
          <Input
            name="password"
            type="password"
            autoComplete="password"
            required
            onChange={handleChangePassword}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign Up
        </Button>
      </Stack>
    </chakra.form>
  );
};
