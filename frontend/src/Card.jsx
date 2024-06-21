// Card.js
import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      maxW="sm"
      m="4"
      p="6"
      bg="white"
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
    >
      <Image
        src={img}
        alt="Accessory Image"
        boxSize="200px"
        objectFit="cover"
        mx="auto"
      />
      <Box p="6" textAlign="center">
        <Text fontWeight="bold" fontSize="xl" mb="4">
          Price: ₹{amount}
        </Text>
        <Button colorScheme="teal" onClick={() => checkoutHandler(amount)}>
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
