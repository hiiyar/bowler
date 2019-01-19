workflow "Deploy to GCP" {
  on = "push"
  resolves = ["Deploy to Google App engine"]
}

action "Deploy to Google App engine" {
  uses = "actions/gcloud/auth@8ec8bfad3853155b42cea5eb9f8395b098111228"
  env = {
    NODE_ENV = "production"
  }
  secrets = ["GCLOUD_AUTH"]
  args = "app deploy"
}
