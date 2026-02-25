const env_map = {
    "neat-striker-447409-t5": {
      env: "dev",
      bucket: "x-to-bq-training/bq-dataform_demo",
      dataset: "raw"
    },
    "my-qa-project": {
      env: "qa",
      bucket: "qa-raw-bucket",
      dataset: "qa_landing"
    },
    "my-prod-project": {
      env: "prod",
      bucket: "prod-raw-bucket",
      dataset: "prod_landing"
    }
  };

const projectId = dataform.projectConfig.defaultDatabase;


module.exports={
    env_map,
    projectId
}

