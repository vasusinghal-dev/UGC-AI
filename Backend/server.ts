import "./config/instrument.js";
import "dotenv/config";
import app from "./src/app.js";
import * as Sentry from "@sentry/node";

Sentry.setupExpressErrorHandler(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
