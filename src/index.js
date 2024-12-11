import { Agent } from '@newrelic/browser-agent/loaders/agent';
import { JSErrors } from '@newrelic/browser-agent/features/jserrors';

import { coreEvents } from '@folio/stripes/core';
import { errorLogging } from 'stripes-config';

/**
 * Log ERROR events to NewRelic.
 * See README for config details
 *
 * @see https://newrelic.com
 * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-apis/seterrorhandler/
 *
 */
const NewrelicLogger = () => {
  return <></>;
};

// eventHandler
let agent = null;
NewrelicLogger.eventHandler = (event, _stripes, _data) => {
  if (event === coreEvents.ERROR) {
    if (!agent) {
      agent = new Agent({ ...errorLogging.newrelic, features: [JSErrors] });
    }

    return (error, info) => {
      agent.noticeError(error);
    };
  }

  return null;
}

export default NewrelicLogger;
