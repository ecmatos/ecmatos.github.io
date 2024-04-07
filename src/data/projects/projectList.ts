import Project from "../../models/project";
import { ecmatosGithubIo } from "./ecmatos-githubio/ecmatos-githubio";
import { ecommerceSurvivalAnalysis } from "./ecommerce-survival-analysis/ecommerce-survival-analysis";
import { microsoftExamSQL } from "./microsoft-exam-sql/microsoft-exam-sql";
import { redshiftDataWarehouse } from "./music-player-redshift/music-player-redshift";
import { stediStepTrainer } from "./stedi-step-trainer/stedi-step-trainer";
import { stockIncomeTax } from "./stock-income-tax/stock-income-tax";
import { airflowPipelines } from "./udacity-airflow-pipeline/udacity-airflow-pipeline";
import { awsCloudArchitect } from "./udacity-aws-cloud-architect/udacity-aws-cloud-architect";

export const projectList: Project[] = [
  ecmatosGithubIo,
  microsoftExamSQL,
  ecommerceSurvivalAnalysis,
  redshiftDataWarehouse,
  stediStepTrainer,
  stockIncomeTax,
  airflowPipelines,
  awsCloudArchitect,
];
