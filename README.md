# ui-newrelic-logger

Copyright (C) 2024 The Open Library Foundation

This software is distributed under the terms of the Apache License,
Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Introduction

This package includes a single function with a static function, `eventHandler`,
that listens for events of type `ERROR` and returns a handler function
that logs its arguments, anticipating they are the same that are passed
to `componentDidCatch`, with New Relic.

Like any stripes module, this module must be added to the platform's
`package.js` file and the `stripes.config.js` `modules` object to be
accessible to stripes.

New Relic may be configured by including the following in `stripes.config.js`
at build time:

```
errorLogging: {
  newrelic: {
    info: {
      beacon: "some-domain.net",
      errorBeacon: "some-domain.net",
      licenseKey: "somekey",
      applicationID: "some-id",
      sa: 1
    },
    loader_config: {
      accountID: "account-id",
      trustKey: "trust-key",
      agentID: "agent-id",
      licenseKey: "license-key",
      applicationID: "application-id"
    },
    init: {
      privacy: { cookies_enabled: true },
      ajax: { deny_list: ["some-domain.net"] }
    }
  }
}
};
```

See https://docs.newrelic.com/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/#spa-monitoring for additional configuration details.

## Additional information

Other [modules](https://dev.folio.org/source-code/#client-side).

Other FOLIO Developer documentation is at [dev.folio.org](https://dev.folio.org/)
