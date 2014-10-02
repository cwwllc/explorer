Explorer
========

Simple webapp allowing users to explore the GovWizely webservices API.

## Development Environment

This project uses [ember-cli](http://ember-cli.com). The [cloning an existing project](http://www.ember-cli.com/#cloning-an-existing-project) section will help you get set up. The following steps are essentially a condensed version of what's written there:

1. Clone this repo.
2. Install `node`.
3. `cd explorer && npm install && bower install`
4. `ember server`

Explorer submits search requests to [GovWizely webservices](https://github.com/GovWizely/webservices). You'll want to have this running locally on port 3000. You'll also want to add CORS support. If you are using the `rails server` command to run webservices, one way to ensure the `Access-Control-Allow-Origin` header is in place is to add the following to `config/application.rb`:
```
config.action_dispatch.default_headers = {'Access-Control-Allow-Origin' => '*'}
```

## Deployment

Run `sh deploy.sh`. You must have push access to this repository in order to do deployments.
