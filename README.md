# Jupyter Hub GKE Cluster Google
## Why...? I wanted to run my AI-Resume gap analyzer in the cloud

![AI-Resume](https://raw.githubusercontent.com/fredmerlo/jupyterhub/main/ai-resume.gif)

#### Highlights
- AI-Resume analyzes a job listing requirements, to assess experience gaps in the resume.
- AND also generates a list of possible interview questions based on the job listing.
- GKE Cluster provisioned via Terraform CDKTF
- Jupyter Hub deployed on the cluster with Helm charts
- Custom image built with Docker, hosted on GCS Appregisty that includes all the ai tools preinstalled, keeps things spiffy in Jupyter Hub
- Cloud Storage Bucket mounted on the pod as a volume, for storing the Jupyter Notebook and ai generated resume and interview questions
- I will be addding more deetz shortly
