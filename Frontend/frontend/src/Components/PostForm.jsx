import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const PostForm = () => {
  const [postData, setPostData] = useState({
    content: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    axios
      .post("https://adobe-backend-ek2e.onrender.com/posts", {
        content: postData.content,
      })
      .then((res) => {
        alert("Post Successfully Created");
        window.location.reload()
        console.log(res.data);
      })
      .catch((err) => {
        alert("Something went wrong!");
        console.log(err);
      });
      
  };
  return (
    <div>
      <Box
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "5rem",
          borderRadius: "20px",
          padding: "2rem",
          border: "1px solid",
        }}
      >
        <Center>
          <Text fontSize={"4xl"} as="b">
            CREATE POST
          </Text>
        </Center>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            type="text"
            name="content"
            maxLength={300}
            placeContent={"Enter Content"}
            onChange={handleChange}
          />
          <Center>
            <Button colorScheme="teal" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Center>
        </FormControl>
      </Box>
    </div>
  );
};

export default PostForm;
