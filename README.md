![EWAI Header](https://adivate.net/doc/ewai/header2.jpg)

# EWAI-MARKET (MARKETPLACE)

EnergyWeb - A Renewables & Clean Energy Data Marketplace for Analytics and A.I. Learning Powered by Ocean Protocol

---

## **🐲🦑 THERE BE ELVES AND GREMLINS LURKING. THIS REPO IS IN AN ALPHA PROTOTYPE STAGE AND YOU CAN EXPECT TO RUN INTO PROBLEMS. 🦑🐲**

---

# OVERVIEW

EWAI, short for EnergyWeb A.I., is a conceptual prototype for a marketplace of clean energy datasets containing energy production and consumption data points fed by DERs running EnergyWeb EW-DOS and then published in on-chain data assets powered by Ocean Protocol.

Imagine being able to do analysis and learning on the power production and consumption data from millions (and even billions) of distributed/decentralized energy IOT devices (distributed energy resources, or DERs). The EWAI Marketplace is a prototype concept which shows how this could be achieved, by collecting permissioned and role-authenticated Power Telemetry Data (PTD) message packet streams into datasets (data assets) which are then be published in a clean energy data marketplace. Researchers and industry participants could then find and analyze these data sets to potentially identify heretofore unknown energy consumption patterns across clean energy and renewables networks resulting in efficiency recommendations and improvements back to the device manufacturers and network operators. Long term, micro payments back to the DER owners in return for their permissioned sharing of energy data is also possible (but beyond the scope of the current prototype). It would even be possible to cross-analyze datasets from different energy sectors, such as wind, hydro, solar, geothermal and EV markets, and even further correlate such data-sets with other public domain datasets such as weather. A.I. algos could then be trained using these datasets to look for potential grid efficiency improvements.

# START HERE

A considerable amount of setup is required before this repo can be used. Please therefore start by [Reading the EWAI Docs](https://energy-web-foundation-energyweb-ewai.readthedocs-hosted.com/)

Additionally, many of the configuration settings for this marketplace are coming from the EWAI-SERVER instance that is paired with via ewaiInstance GraphQL calls. That is why there are only a few Ocean Protocol related config settings in the .env. files for this repo.

An EWAI deployment consists of an [EWAI-SERVER](https://github.com/energywebfoundation/ewai) instance paired with an [EWAI-MARKET](https://github.com/energywebfoundation/ewai-market) instance (along with supporting EnergyWeb components):

1. [EWAI-SERVER](https://github.com/energywebfoundation/ewai): This is the server component which offers a data storage cache for assembling streaming DER PTD message data packets into time-series datasets, and
2. [EWAI-MARKET](https://github.com/energywebfoundation/ewai-market): This repository, which is a fork of the [Ocean Protocol V3 Marketplace](https://github.com/oceanprotocol/market), whereby those EWAI energy datasets can be published in a marketplace format utilizing the power of Ocean Protocol data tokens. An understanding of how Ocean Protocol works will therefore also be necessary.

# PREREQUISITES

EWAI-MARKET requires an understanding (and prior configuration) of all of the following EnergyWeb subsystems:

1. Energy Web: https://energyweb.org
2. Energy Web Chain (EWC): https://www.energyweb.org/technology/energy-web-chain/
3. Energy Web Token (EWT): https://www.energyweb.org/technology/token/
4. Energy Web EW-DOS: https://www.energyweb.org/technology/ew-dos/
5. Energy Web Name Service (EWNS): https://ens.energyweb.org
6. Energy Web EW-Switchboard: https://switchboard.energyweb.org/
7. Energy Web EW-Messaging: https://github.com/energywebfoundation/messaging
8. Decentralized Identifiers (DIDs): https://github.com/energywebfoundation/passport-did-auth, https://github.com/energywebfoundation/iam-client-lib, https://en.wikipedia.org/wiki/Decentralized_Identifiers
9. Ocean Protocol: https://oceanprotocol.com/
10. Ocean Protocol V3 Marketplace: https://github.com/oceanprotocol/market

# EWAI-MARKETPLACE

The instructions below are about how to setup this marketplace component. The app is a React app built with [Gatsby.js](https://www.gatsbyjs.org) + TypeScript + CSS modules and will connect to Ocean components in Rinkeby by default. A successful build should result in a site which looks similar to this (without any data assets in it of course yet):

![EWAI Header](https://adivate.net/doc/ewai/market-screenshot.jpg)

To start local development:

```bash
git clone https://github.com/energywebfoundation/ewai-market
cd ewai-market
```

Setup the environment variables to use this local connection in `.env` in the app:

```bash
# modify env variables, Rinkeby is enabled by default when using those files
cp .env.example .env.development
```

```bash
yarn install
yarn develop
```

This will start the development server under
`http://localhost:8000`.

To explore the generated GraphQL data structure fire up the accompanying GraphQL IDE under
`http://localhost:8000/__graphql`.

### Local Ocean Protocol Components & Config Options

It is possible to run the Ocean Protocol components locally using Barge and Ganache instead of connecting to Rinkeby if desired. Please see the instructions in the main [Ocean Protocol V3 Marketplace](https://github.com/oceanprotocol/market) repo on how to do this. See the Ocean Protocol V3 Marketplace repo also for further customization options and environment variable settings. They are the same for this repo.

### 🎨 Storybook

[Storybook](https://storybook.js.org) is set up for this project and is used for UI development of components. Stories are created inside `src/components/` alongside each component in the form of `ComponentName.stories.tsx`.

To run the Storybook server, execute in your Terminal:

```bash
yarn run storybook
```

This will launch the Storybook UI with all stories loaded under [localhost:4000](http://localhost:4000).

## ✨ Code Style

For linting and auto-formatting you can use from the root of the project:

```bash
# lint all js with eslint
yarn run lint

# auto format all js & css with prettier, taking all configs into account
yarn run format
```

## 👩‍🔬 Testing

Test suite for unit tests is setup with [Jest](https://jestjs.io) as a test runner and:

- [react-testing-library](https://github.com/kentcdodds/react-testing-library) for all React components

To run all linting and unit tests:

```bash
yarn test
```

For local development, you can start the test runner in a watch mode.

```bash
yarn run test:watch
```

For analyzing the generated JavaScript bundle sizes you can use:

```bash
yarn run analyze
```

## 🛳 Production

To create a production build, run from the root of the project:

```bash
yarn run build
# serve production build
yarn run serve
```

## ⬆️ Deployment

A sample deployment of EWAI-MARKET is... (TODO)
Also, a subsequent merge is planned to bring in Ocean Protocol compute-to-data and subscription data assets when the Ocean V3 marketplace code goes final. (TODO)

## 🏛 License

```text
EnergyWeb: This project is licensed under the GPLv3 License - see the LICENSE file for details.
```

```text
Ocean Protocol: Copyright 2021 Ocean Protocol Foundation Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
