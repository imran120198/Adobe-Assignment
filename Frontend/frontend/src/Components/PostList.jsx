import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
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
import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [data, setData] = useState([]);
  const [modify, setModify] = useState({});
  const [edit, setedit] = useState({
    content: "",
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
    axios("https://adobe-backend-ek2e.onrender.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setedit({ ...edit, [name]: value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`https://adobe-backend-ek2e.onrender.com/posts/${modify._id}`, {
        content: edit.content,
      })
      .then((res) => {
        console.log("Edited");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    axios
      .delete(`https://adobe-backend-ek2e.onrender.com/posts/${e._id}`)
      .then((res) => {
        alert("Post Delete Successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = (e) => {
    axios
      .post(`https://adobe-backend-ek2e.onrender.com/posts/${e._id}/like`)
      .then((res) => {
        alert("Post Liked");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleUnlike = (e) => {
    axios
      .post(`https://adobe-backend-ek2e.onrender.com/posts/${e._id}/unlike`)
      .then((res) => {
        alert("Post Unlike");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box>
        <Center>
          <Text fontSize="2xl" as={"b"}>
            Post List
          </Text>
        </Center>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Content</Th>
                <Th>Likes</Th>
                <Th>Dislike</Th>
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
                      <Td>{elem.content}</Td>
                      <Td>
                        <Button
                          onClick={() => handleLike(elem)}
                          colorScheme="red"
                        >
                          Like
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          onClick={() => handleUnlike(elem)}
                          colorScheme="red"
                        >
                          Unlike
                        </Button>
                      </Td>
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
                          onClick={() => {
                            handleDelete(elem);
                          }}
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
                <Text>Content: {modify.content}</Text>
                <Text>Likes : {modify.likes}</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onViewClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}

        {/* Edit Option */}
        {modify && (
          <Modal onClose={oneditClose} isOpen={iseditOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Name and Bio</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl isRequired>
                  <FormLabel>Content</FormLabel>
                  <Textarea
                    name="content"
                    type="text"
                    onChange={handleChange}
                    maxLength={300}
                    placeholder="Enter Content"
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

export default PostList;
