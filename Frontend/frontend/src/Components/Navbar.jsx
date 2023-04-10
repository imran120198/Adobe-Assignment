import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box bg="teal" w="100%" p={6}>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="6">
            <Heading size="xl">
              <Link to="/">Abobe Blog App</Link>
            </Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="teal">
              <Link to="/">Create User</Link>
            </Button>
            <Button colorScheme="teal">
              <Link to="/posts">Create Post</Link>
            </Button>
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
