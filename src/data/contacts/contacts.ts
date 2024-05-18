import Contact from "../../models/contact";
import gmailLogo from "../../images/contacts/email.png";
import githubLogo from "../../images/contacts/github.png";
import linkedinLogo from "../../images/contacts/linkedin.png";

export const contacts: Contact[] = [
  {
    id: 1,
    image: gmailLogo,
    altImage: "gmail logo",
    message: "mail me",
    contactText: "esronmatos@gmail.com",
    url: "mailto:esronmatos@gmail.com",
  },
  {
    id: 2,
    image: githubLogo,
    altImage: "github logo",
    message: "let's code",
    contactText: "github.com/ecmatos",
    url: "https://github.com/ecmatos",
  },
  {
    id: 3,
    image: linkedinLogo,
    altImage: "linkedin logo",
    message: "connect with me",
    contactText: "linkedin.com/in/esronmatos/",
    url: "https://www.linkedin.com/in/esronmatos/",
  },
];
