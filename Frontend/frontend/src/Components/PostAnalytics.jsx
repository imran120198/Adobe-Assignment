import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PostAnalytics = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios("https://adobe-backend-ek2e.onrender.com/analytics/posts/top-liked")
      .then((res) => {
        setData(res.data.topliked);
        console.log(res.data.topliked);
      })
      .catch((err) => {
        console.log(err);
      });
    axios("https://adobe-backend-ek2e.onrender.com/analytics/posts").then(
      (res) => setTotal(res.data)
    ).catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <Box>
        <Center>
          <Text fontSize="5xl" as={"b"}>
            Post Analytics
          </Text>
        </Center>

        <Center>
            <Heading>Total Posts : {total.message}</Heading>
        </Center>

        <Box>
          <Flex>
            {data &&
              data.map((elem, index) => {
                return (
                  <Box
                    style={{
                      border: "1px solid black",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "20px",
                      width: "250px",
                      height: "150px",
                      margin: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Text>Id: {elem._id}</Text>
                    <Text>Content: {elem.content}</Text>
                    <Text>Likes : {elem.likes}</Text>
                  </Box>
                );
              })}
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default PostAnalytics;
