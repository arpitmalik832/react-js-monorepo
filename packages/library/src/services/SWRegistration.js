import { URL, LOGS } from '../enums/sw';
import { errorLog, log } from '../utils/logsUtils';
import { isLocalhost } from '../utils/commonUtils';
import load from '../utils/eventListeners/load';
import { ENVS } from '../enums/app';

const registerValidSW = () => {
  navigator.serviceWorker
    .register(URL)
    .then(registration => {
      log(LOGS.SUCCESS, registration);
    })
    .catch(error => {
      errorLog(LOGS.REGISTRATION_ERROR, error);
    });
};

const checkValidSW = () => {
  // Check if the service worker can be found. If it can't, then reload the page.
  fetch(URL, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      // To ensure if service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reloading the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW();
      }
    })
    .catch(() => {
      log(LOGS.NO_INTERNET);
    });
};

const SWRegistration = {
  register() {
    if (
      [ENVS.PROD, ENVS.BETA, ENVS.STG].includes(process.env.APP_ENV) &&
      'serviceWorker' in navigator
    ) {
      // The URL constructor is available in all browsers that support SW.
      const publicUrl = new global.URL(
        process.env.PUBLIC_URL,
        window.location.href,
      );
      if (publicUrl.origin !== window.location.origin) {
        // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebook/create-react-app/issues/2374
        return;
      }

      load.subscribe(() => {
        if (isLocalhost()) {
          // Running on localhost -> Let's check if a service worker still exists or not.
          checkValidSW();

          navigator.serviceWorker.ready.then(() => {
            log(LOGS.SW_READY);
          });
        } else {
          // Not localhost -> Just register service worker
          registerValidSW();
        }
      });
    }
  },
  unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          errorLog(error.message);
        });
    }
  },
};

export default SWRegistration;