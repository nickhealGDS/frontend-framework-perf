const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require("path");
const session = require("express-session");
const { configureNunjucks } = require("./config/nunjucks");
const {
  validateOrganisationType,
} = require("./journeys/organisationTypeService.js");

const crypto = require("crypto");
const sessionId = crypto.randomBytes(16).toString("hex");
const {
  setGa4ContainerId,
  setUaContainerId,
  setStatusCode,
  setTaxonomyValues,
  setPageTitle,
  setContentId,
} = require("./config/gtmMiddleware.js");
const { checkSessionAndRedirect } = require("./config/middleware");
const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const i18nextMiddleware = require("i18next-http-middleware");
const { i18nextConfigurationOptions } = require("./config/i18next");

const app = express();
const port = 3000;

const nodeModules = (modulePath) =>
  `${path.resolve(__dirname, "../node_modules/", modulePath)}`;

const APP_VIEWS = [
  path.join(__dirname, "views"),
  path.join(__dirname, "components"),
  nodeModules("govuk-frontend"),
  nodeModules("@govuk-one-login"),
];

app.set("view engine", configureNunjucks(app, APP_VIEWS));
i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    i18nextConfigurationOptions(
      path.join(__dirname, "locales/{{lng}}/{{ns}}.json")
    )
  );

app.use(i18nextMiddleware.handle(i18next));

app.use("/assets", express.static(nodeModules("govuk-frontend/govuk/assets")));

/** GA4 assets */
app.use(
  "/ga4-assets",
  express.static(nodeModules("@govuk-one-login/one-login-analytics/lib"))
);
app.use(
  session({
    secret: sessionId, // Should I make this more secure?
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use((req, res, next) => {
  if (req.i18n) {
    res.locals.htmlLang = req.i18n.language;
    res.locals.pageTitleLang = req.i18n.language;
    res.locals.mainLang = req.i18n.language;
    res.locals.currentUrl = new URL(
      req.protocol + "://" + req.get("host") + req.originalUrl
    );
    next();
  }
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(setGa4ContainerId);
app.use(setUaContainerId);
app.use(setStatusCode);
app.use(setTaxonomyValues);
app.use(setPageTitle);
app.use(setContentId);
app.use(checkSessionAndRedirect);

app.get("/", (req, res) => {
  res.render("home.njk");
});

app.get("/name", (req, res) => {
  res.render("name.njk");
});

app.post("/name", (req, res) => {
  res.redirect("/summary");
});

app.get("/summary", (req, res) => {
  res.render("summary.njk");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
