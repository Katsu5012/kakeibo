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
import { PasswordField } from "./PasswordField";

export const SignUpForm = (props: HTMLChakraProps<"form">) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault();
      // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="userName">
        <FormLabel>userName</FormLabel>
        <Input
          name="userName"
          type="userName"
          autoComplete="userName"
          required
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  </chakra.form>
);
