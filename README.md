# OpenFin FDC3


## Overview
OpenFin FDC3 provides an implementation of the [FINOS FDC3](https://fdc3.finos.org/) standards for OpenFin-based applications.

This project consist of 3 parts:
1. The FDC3 Service, taking care of intents, context and resolving them (UI)
2. The FDC3 Client, exposing APIs for applications to handle/raise intents with contexts
3. The FDC3 Demo App, demonstrating the different features of OpenFin FDC3

### Dependencies
- OpenFin version for applications using FDC3 = 9.61.38.41
- OpenFin version used in the FDC3 Service = 10.66.39.43
- RVM >= 4.7

### Features
* Raise an FDC3 Intent
* Resolve an FDC3 Intent
* Open an application with an intent/context
* Attach listeners for Intents and Contexts
* Context channel support, to filter context broadcasts

## Getting Started

Integrating the FDC3 service is done in two steps. Add the service to application manifest, and import the API:

### Manifest declaration

To ensure the service is running, you must declare it in your application config.

```
"services":
[
   {"name": "fdc3"}
]
```

### Import the Client API

```bash
npm install openfin-fdc3
```

The client library is also available as a resource which can be included via `<script>` tag:
```
<script src="https://cdn.openfin.co/services/openfin/fdc3/<VERSION>/openfin-fdc3.js"></script>
```
This will expose the global variable `fdc3` with the API methods documented in the link below.  Example:
```
const context = { /* ... */ };
await fdc3.broadcast(context);
```

The client module exports a set of functions - [API docs available here](https://cdn.openfin.co/docs/services/fdc3/stable/api/).

### Usage

An in-depth usage guide and additional documentation will be published in due course.

## Run Locally

To preview the functionality of the service without integrating it into an existing application - or to start contributing to the service - the service can be ran locally. By checking out this repo and then running the project.

### Setup

After checkout, install project dependencies using `npm install`.

### Startup
Once dependencies are installed, start the "built-in" sample application with `npm start`. This uses `webpack-dev-middleware` to both build and host the application; a custom server script will start the OpenFin application once the server is up and running.

The startup script has optional arguments which can be used to tweak the behavior of the build and the test server. Use `npm start -- -h` for details on the available parameters and their effects.

### Build Process
The service consists of several different components unified into a single project. The `package.json` defines the combined dependencies of all components; anything required for the pre-built client to work within an application is included in the `"dependencies"` section, and the remaining dependencies - used to build the client, and to both build & run the provider and demo application - are included under `"devDependencies"`.

Similarly, there is a single `webpack.config.js` script that will build the above components.

### Testing
To run the full test-suite for fdc3-service, run:
```bash
npm install
npm test
```

This will run unit tests followed by the integration tests. These steps can also be ran individually via `npm run test:unit` and `npm run test:int`. When running the tests separately in this way, both test runners support some optional arguments. Append `--help` to either of the above `npm run` commands to see the available options.

### Deployment
Staging and production builds are managed via the Jenkinsfile build script. This will build the project as usual (except with the `--mode production` argument) and then deploy the client and provider to their respective locations. The demo application exists only within this repo and is not deployed.

The service client is deployed as an NPM module, so that it can be included as a dependency in any application that wishes to integrate with the service.

The service provider is a standard OpenFin application, only its lifecycle is controlled by the RVM (based upon the requirements of user-launched applications) rather than being launched by users. The provider is deployed to the OpenFin CDN; a zip file is also provided to assist with re-deploying the provider to an alternate location. Direct links to each build are listed in the release notes, available on the [services versions page](https://developer.openfin.co/versions/?product=Services).

## Known Issues
A list of known issues can be found on our [versions page](https://developer.openfin.co/versions/?product=Services).

## Contributing

1. Fork it (<https://github.com/HadoukenIO/fdc3-service/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Read our [contribution guidelines](.github/CONTRIBUTING.md) and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

## License
The code in this repository is distributed under the Apache License, Version 2.0

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin's Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

Copyright 2018-2019 OpenFin

https://openfin.co/developer-agreement/  

https://openfin.co/licensing/

## Support
This is an open source project and all are encouraged to contribute.
Please enter an issue in the repo for any questions or problems. Alternatively, please contact us at support@openfin.co
