import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");

  return (
    <Box bg="gray.50" p={4}>
      <VStack h="100vh" justifyContent={"center"} spacing={6}>
        <Heading textTransform={"uppercase"} color="teal.500" size="2xl">
          Order Successful
        </Heading>

        <Text fontSize="lg" color="gray.700">
          Reference No. {referenceNum}
        </Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
