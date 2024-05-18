import React from "react";
import {
  Container,
  Box,
  MyImage,
  ContactBox,
  ContactLink,
  ContactIcon,
  BoxTitle,
  BoxSubTitle,
} from "./HomeStyles";
import { contacts } from "../../data/contacts/contacts";

const Home = () => {
  function getYearsFromDate(birthDay: string) {
    var today = new Date();
    var birthDate = new Date(birthDay);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    return age;
  }

  return (
    <Container>
      <Box>
        <MyImage src="images/esron.jpg" alt="Esron's photo" />
      </Box>
      <Box>
        <BoxTitle>Esron Matos</BoxTitle>
        <BoxSubTitle>Data & Analytics Engineer</BoxSubTitle>
        <p>
          Hi! I'm {getYearsFromDate("1996-09-21")} years old and have been
          working as a data engineer for 5 years. During this period I was
          focused on maturing a data-driven culture, developing scalable
          end-to-end analytical solutions and extracting real value from data,
          regardless of the technology stack.
        </p>
        <p>
          Data quality, user experience and knowledge sharing are the most
          important things to me. I look forward to working with people who
          value the same.
        </p>
        <ContactBox>
          {contacts.map((contact) => {
            return (
              <ContactLink
                key={contact.id}
                href={contact.url}
                target="_blank"
                title={contact.message}
              >
                <ContactIcon
                  src={contact.image}
                  alt={contact.altImage}
                  data-tip={contact.message}
                />
              </ContactLink>
            );
          })}
        </ContactBox>
      </Box>
    </Container>
  );
};

export default Home;
