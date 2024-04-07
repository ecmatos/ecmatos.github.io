import Project from "../../../models/project";
import img from "./music-player-redshift.png";

export const redshiftDataWarehouse: Project = {
  id: 4,
  name: "Redshift Data Warehouse",
  description:
    "Analysis of music players using data modeling, AWS Redshift as data warehouse, ETL process and some analysis.",
  tags: ["redshift", "data-modeling", "etl", "data-analysis"],
  imageAlt: "Image with Redshift logo and musical notes.",
  image: img,
  madeWithText: "Made with Redshift, Python and SQL.",
  linkToProject: "https://github.com/ecmatos/redshift_data_warehouse",
};
