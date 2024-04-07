import Project from "../../../models/project";
import img from "./udacity-aws-cloud-architect.png";

export const awsCloudArchitect: Project = {
  id: 8,
  name: "Udacity - AWS Cloud Architect",
  description:
    "Creating and testing high availabilty, fault tolerance, resiliency, reliability and security on AWS Cloud.",
  tags: ["terraform", "python"],
  imageAlt: "Image with project name",
  image: img,
  madeWithText: "Made with Terraform and Python",
  linkToProject: "https://github.com/ecmatos/udacity-aws-cloud-architect",
};
