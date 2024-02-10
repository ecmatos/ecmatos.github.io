import React from "react";
import { Container, Box, Box2, BoxTitle, BoxText, MyImage } from "./HomeStyles";

interface Item {
  id: number;
  title: string;
  text: string;
  backgroundColor: string;
}

interface BoxItems {
  items: Item[];
}

const Home2 = (props: BoxItems) => {
  return (
    <Container>
      {props.items.map((box) => (
        <Box2 key={box.id} bgColor={box.backgroundColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box2>
      ))}
    </Container>
  );
};

const Home = () => {
  return (
    <Container>
      <Box>
        <MyImage src="images/esron.jpg" alt="Esron's photo" />
      </Box>
      <Box>
        <h1>Esron Matos</h1>
        <h3>Data & Analytics Engineer</h3>
        <p>
          Hi! I'm 27 years old and have been working as a data engineer for 5
          years. During this period I was focused on maturing a data-driven
          culture, developing scalable end-to-end analytical solutions and
          extracting real value from data, regardless of the technology stack.
        </p>
        <p>
          Data quality, user experience and knowledge sharing are the most
          important things to me. I look forward to working with people who
          value the same.
        </p>
      </Box>
    </Container>
  );
};

export default Home;
