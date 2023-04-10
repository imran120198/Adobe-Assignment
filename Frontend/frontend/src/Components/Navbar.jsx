import React from "react";
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Box bg="teal" w="100%" p={6}>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="4">
            <Heading size="md">Abobe</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="teal">Create User</Button>
            <Button colorScheme="teal">Create Post</Button>
            <Button colorScheme="teal">User List</Button>
            <Button colorScheme="teal">Post List</Button>
            <Button colorScheme="teal">User Analytics</Button>
            <Button colorScheme="teal">Post Analytics</Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
