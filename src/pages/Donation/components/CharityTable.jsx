import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const tableOneConfig = [
  {
    country: "HU",
    name: "Magdaléneum Fogyatékosok Református Ápoló Gondozó Otthona",
    place: "Nyíregyháza",
  },
  {
    country: "UA",
    name: "Irgalmas Samaritánus Református Gyermekotthon",
    place: "Velyka Dobron",
  },
  {
    country: "DE",
    name: "Regens Wagner Erlkam",
    place: "Holzkirchen",
  },
  {
    country: "UA",
    name: "Margaréta Óvoda",
    place: "Bodalovo",
  },
  {
    country: "HU",
    name: "Lorántffy Zsuzsanna Református Kismamaház",
    place: "Miskolc",
  },
  {
    country: "HU",
    name: "Kertvárosi Csicsergő Óvoda",
    place: "Nyíregyháza",
  },
  {
    country: "RO",
    name: "Szent István Gyermekotthon",
    place: "Miercurea Ciuc",
  },
  {
    country: "RO",
    name: "Szent Piroska Napköziotthon",
    place: "Bixad",
  },
];

const tableTwoConfig = [
  {
    country: "RO",
    name: "Gyermek Jézus Otthon",
    place: "Săcueni",
  },
  {
    country: "SK",
    name: "Berzétei Árvaház",
    place: "Brzotín",
  },
  {
    country: "AT",
    name: "Engelbert Kolland Haus",
    place: "Ramsau",
  },
  {
    country: "RO",
    name: "Szent Ferenc Gyermekotthon",
    place: "Băile Tușnad",
  },
  {
    country: "HU",
    name: "Vántus István Általános Iskola Nyírbogát",
    place: "Nyírbogát",
  },
  {
    country: "HU",
    name: "Civil Centrum Nyírtelek",
    place: "Nyírtelek",
  },
  {
    country: "RO",
    name: "Szent Borbála Napköziotthon",
    place: "Parajd",
  },
];

const TableGroup = () => (
  <Box color="black">
    <Flex justifyContent="center" m="25px">
      <Heading as="h1">Támogatott gyermekotthonok / intézmények</Heading>
    </Flex>
    <Grid
      templateAreas={{
        base: `"tableLeft" "tableRight"`,
        lg: `". tableLeft . tableRight ."`,
      }}
      templateColumns={{ base: "1fr", lg: "50px 1fr 100px 1fr 50px" }}
      color="black"
    >
      <GridItem area="tableLeft" m="25px" overflow="auto">
        <TableContainer>
          <Table>
            <Tbody>
              {tableOneConfig.map((item, idx) => (
                <Tr key={`table-one-${idx}`}>
                  <Td>{item.country}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.place}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
      <GridItem area="tableRight" m="25px" overflow="auto">
        <TableContainer>
          <Table>
            <Tbody>
              {tableTwoConfig.map((item, idx) => (
                <Tr key={`table-one-${idx}`}>
                  <Td>{item.country}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.place}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
    </Grid>
  </Box>
);

export default TableGroup;
