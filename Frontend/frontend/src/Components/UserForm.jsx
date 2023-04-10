import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const UserForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    axios
      .post("https://adobe-backend-ek2e.onrender.com/users", {
        name: form.name,
        email: form.email,
        bio: form.bio,
      })
      .then((res) => {
        console.log(res.data);
        alert("User Created");
        window.location.reload()
      })
      .catch((err) => {
        alert("Something Went wrong!");
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
          border:"1px solid"
        }}
      >
        <Center>
          <Text fontSize={"4xl"} as="b">CREATE USER</Text>
        </Center>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder="Enter Name"
            maxLength={50}
            onChange={handleChange}
          />

          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <FormLabel>Bio</FormLabel>
          <Textarea
            name="bio"
            type="text"
            placeholder="Enter Bio"
            maxLength={200}
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

export default UserForm;
