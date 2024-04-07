import Project from "../../../models/project";
import img from "./stedi-step-trainer.png";

export const stediStepTrainer: Project = {
  id: 5,
  name: "STEDI Step Trainer",
  description:
    "Data engineering project using well being data to practice ETL, ELT, data cleaning and cloud architecture",
  tags: ["sql", "python", "etl", "elt", "data-cleaning", "aws-glue"],
  imageAlt: "Image with Microsoft logo and exam reference name.",
  image: img,
  madeWithText: "Made with AWS Glue, Python, SQL, AWS S3 and AWS Athena.",
  linkToProject: "https://github.com/ecmatos/stedi-etl",
};
