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
            <Button colorScheme="teal">
              <Link to="/userlist">User List</Link>
            </Button>
            <Button colorScheme="teal">
              <Link to="/postlist">Post List</Link>
            </Button>
            <Button colorScheme="teal">
              <Link to="/useranalytics">User Analytics</Link>
            </Button>
            <Button colorScheme="teal">
              <Link to="/postanalytics">Post Analytics</Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
