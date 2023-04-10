import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://adobe-backend-ek2e.onrender.com/users").then((res) => {
      setData(res.data);
    });
  }, [data]);

  const handleDelete = (e) => {
    axios
      .delete(`https://adobe-backend-ek2e.onrender.com/users/${e._id}`)
      .then((res) => {
        alert("User Data Delete Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Box>
        <Center>
          <Text fontSize="2xl" as={"b"}>
            User List
          </Text>
        </Center>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Bio</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.map((elem, index) => {
                  return (
                    <Tr key={elem._id}>
                      <Td>{elem._id}</Td>
                      <Td>{elem.name}</Td>
                      <Td>{elem.email}</Td>
                      <Td>{elem.bio}</Td>
                      <Td>
                        <Button colorScheme="green">Edit</Button>
                      </Td>
                      <Td>
                        <Button
                          onClick={() => handleDelete(elem)}
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default UserList;
