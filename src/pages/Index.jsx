import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const product = {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMjU0Mjc0MXww&ixlib=rb-4.0.3&q=80&w=1080", // This will be replaced with an image URL.
    title: "Modern Chair",
    price: "$299.99",
    description: "Elevate your space with this sleek and comfortable modern chair. Featuring premium materials and a contemporary design, it is perfect for any room in your home or office.",
  };

  return (
    <Flex direction="column" align="center" justify="center" p={4} bg={useColorModeValue("gray.50", "gray.800")} minHeight="100vh">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} bg={useColorModeValue("white", "gray.700")} boxShadow="lg">
        <Image src={product.image} alt={product.title} borderRadius="md" />
        <Stack spacing={4} mt={4}>
          <Heading size="md" fontWeight="bold">
            {product.title}
          </Heading>
          <Text fontWeight="bold" color={useColorModeValue("teal.500", "teal.200")}>
            {product.price}
          </Text>
          <Text color={useColorModeValue("gray.600", "gray.400")}>{product.description}</Text>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Index;
