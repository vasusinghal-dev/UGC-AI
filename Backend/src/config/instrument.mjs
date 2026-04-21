import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://18b2ec28d20cd9dc4312312a79847c0f@o4511234451177472.ingest.us.sentry.io/4511234461073408",
  sendDefaultPii: true,
});
