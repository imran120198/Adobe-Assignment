import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const UserList = () => {
  const [data, setData] = useState([]);
  const [modify, setModify] = useState({});
  const [edit, setedit] = useState({
    name: "",
    bio: "",
  });

  const {
    isOpen: iseditOpen,
    onOpen: oneditOpen,
    onClose: oneditClose,
  } = useDisclosure();

  const {
    isOpen: isViewOpen,
    onOpen: onViewOpen,
    onClose: onViewClose,
  } = useDisclosure();

  useEffect(() => {
    axios("https://adobe-backend-ek2e.onrender.com/users").then((res) => {
      setData(res.data);
    });
  }, [data]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setedit({ ...edit, [name]: value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`https://adobe-backend-ek2e.onrender.com/users/${modify._id}`, {
        name: edit.name,
        bio: edit.bio,
      })
      .then((res) => {
        console.log("Edited");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    axios
      .delete(`https://adobe-backend-ek2e.onrender.com/users/${e._id}`)
      .then((res) => {
        alert("User Data Delete Successfully");
        window.location.reload()
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
                <Th>View</Th>
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
                        <Button
                          onClick={() => {
                            setModify(elem);
                            onViewOpen();
                          }}
                          colorScheme="blue"
                        >
                          View
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          onClick={() => {
                            setModify(elem);
                            oneditOpen();
                          }}
                          colorScheme="green"
                        >
                          Edit
                        </Button>
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

        {/* View option */}
        {modify && (
          <Modal onClose={onViewClose} isOpen={isViewOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>View User Information</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Name: {modify.name}</Text>
                <Text>Email:{modify.email}</Text>
                <Text>Bio: {modify.bio}</Text>
              </ModalBody>
              <ModalFooter>
                <Button onCLick={onViewClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}

        {/* Edit option */}
        {modify && (
          <Modal onClose={oneditClose} isOpen={iseditOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Name and Bio</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    maxLength={50}
                    placeholder="Enter Name"
                  />
                  <FormLabel>Bio</FormLabel>
                  <Textarea
                    name="bio"
                    type="text"
                    onChange={handleChange}
                    maxLength={200}
                    placeholder="Enter bio"
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={(e) => {
                    handleEdit(e);
                    oneditClose();
                  }}
                >
                  Submit
                </Button>
                <Button onClick={oneditClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </div>
  );
};

export default UserList;
