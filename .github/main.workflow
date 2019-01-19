workflow "Deploy to GCP" {
  on = "push"
  resolves = ["GitHub Action for Google Cloud"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@707718ee26483624de00bd146e073d915139a3d8"
  args = "branch master"
}

action "Setup Google Cloud SDK" {
  uses = "actions/gcloud/auth@8ec8bfad3853155b42cea5eb9f8395b098111228"
  needs = ["Filters for GitHub Actions"]
  env = {
    NODE_ENV = "production"
  }
  secrets = ["GCLOUD_AUTH"]
}

action "GitHub Action for Google Cloud" {
  uses = "actions/gcloud/cli@8ec8bfad3853155b42cea5eb9f8395b098111228"
  needs = ["Setup Google Cloud SDK"]
  args = "app deploy"
  env = {
    CLOUDSDK_CORE_PROJECT = "crpro-228906"
  }
}
