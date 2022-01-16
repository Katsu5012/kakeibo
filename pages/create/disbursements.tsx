import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Card } from "../../components/atoms/app/Card";

/*
 * 支出の作成Page
 */
const createDisbursement = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "inherit")}
        minH="100vh"
        py="12"
        px={{ base: "4", lg: "8" }}
      >
        <Box maxW="md" mx="auto">
          <Card></Card>
        </Box>
      </Box>
    </>
  );
};

export default createDisbursement;
