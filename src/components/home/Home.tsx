import React from "react";
import { Container, Box, BoxTitle, BoxText } from "./HomeStyles";

interface Item {
  id: number;
  title: string;
  text: string;
  backgroundColor: string;
}

interface BoxItems extends Array<Item>{}

function Home(boxData: BoxItems) {
  return (
      <Container>
        {boxData.map((box) => (
          <Box key={box.id} bgColor={box.backgroundColor}>
            <BoxTitle>{box.title}</BoxTitle>
            <BoxText>{box.text}</BoxText>
          </Box>
        ))}
      </Container>
  );
}

export default Home;
