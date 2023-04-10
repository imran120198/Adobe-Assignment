import React, { useEffect, useState } from "react";
import {
  Center,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";

const UserAnalytics = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios("https://adobe-backend-ek2e.onrender.com/analytics/users")
      .then((res) => {
        setTotal(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Center>
        <Text fontSize="5xl" as={"b"}>
          Post Analytics
        </Text>
      </Center>

      <TableContainer>
        <Table variant={"striped"}>
          <Tbody>
            <Tr>
              <Td>Total Users</Td>
              <Td>{total.message}</Td>
            </Tr>
            <Tr>
              <Td>Most Active User</Td>
              <Td>Working in Progress</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserAnalytics;
