import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { SignInPasswordField } from "./SignIn/SignInPasswordField";

export const LoginForm = (props: HTMLChakraProps<"form">) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault();
      // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <SignInPasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  </chakra.form>
);
