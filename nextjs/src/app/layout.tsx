import type { Metadata } from "next";
import "./govuk-frontend.min.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header
          className="govuk-header"
          role="banner"
          data-module="govuk-header"
        >
          <div className="govuk-header__container govuk-width-container">
            <div className="govuk-header__logo">
              <a
                href="https://www.gov.uk/"
                className="govuk-header__link govuk-header__link--homepage"
              >
                <span className="govuk-header__logotype">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="govuk-header__logotype-crown"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 30"
                    height="30"
                    width="32"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22.6 10.4c-1 .4-2-.1-2.4-1-.4-.9.1-2 1-2.4.9-.4 2 .1 2.4 1s-.1 2-1 2.4m-5.9 6.7c-.9.4-2-.1-2.4-1-.4-.9.1-2 1-2.4.9-.4 2 .1 2.4 1s-.1 2-1 2.4m10.8-3.7c-1 .4-2-.1-2.4-1-.4-.9.1-2 1-2.4.9-.4 2 .1 2.4 1s0 2-1 2.4m3.3 4.8c-1 .4-2-.1-2.4-1-.4-.9.1-2 1-2.4.9-.4 2 .1 2.4 1s-.1 2-1 2.4M17 4.7l2.3 1.2V2.5l-2.3.7-.2-.2.9-3h-3.4l.9 3-.2.2c-.1.1-2.3-.7-2.3-.7v3.4L15 4.7c.1.1.1.2.2.2l-1.3 4c-.1.2-.1.4-.1.6 0 1.1.8 2 1.9 2.2h.7c1-.2 1.9-1.1 1.9-2.1 0-.2 0-.4-.1-.6l-1.3-4c-.1-.2 0-.2.1-.3m-7.6 5.7c.9.4 2-.1 2.4-1 .4-.9-.1-2-1-2.4-.9-.4-2 .1-2.4 1s0 2 1 2.4m-5 3c.9.4 2-.1 2.4-1 .4-.9-.1-2-1-2.4-.9-.4-2 .1-2.4 1s.1 2 1 2.4m-3.2 4.8c.9.4 2-.1 2.4-1 .4-.9-.1-2-1-2.4-.9-.4-2 .1-2.4 1s0 2 1 2.4m14.8 11c4.4 0 8.6.3 12.3.8 1.1-4.5 2.4-7 3.7-8.8l-2.5-.9c.2 1.3.3 1.9 0 2.7-.4-.4-.8-1.1-1.1-2.3l-1.2 4c.7-.5 1.3-.8 2-.9-1.1 2.5-2.6 3.1-3.5 3-1.1-.2-1.7-1.2-1.5-2.1.3-1.2 1.5-1.5 2.1-.1 1.1-2.3-.8-3-2-2.3 1.9-1.9 2.1-3.5.6-5.6-2.1 1.6-2.1 3.2-1.2 5.5-1.2-1.4-3.2-.6-2.5 1.6.9-1.4 2.1-.5 1.9.8-.2 1.1-1.7 2.1-3.5 1.9-2.7-.2-2.9-2.1-2.9-3.6.7-.1 1.9.5 2.9 1.9l.4-4.3c-1.1 1.1-2.1 1.4-3.2 1.4.4-1.2 2.1-3 2.1-3h-5.4s1.7 1.9 2.1 3c-1.1 0-2.1-.2-3.2-1.4l.4 4.3c1-1.4 2.2-2 2.9-1.9-.1 1.5-.2 3.4-2.9 3.6-1.9.2-3.4-.8-3.5-1.9-.2-1.3 1-2.2 1.9-.8.7-2.3-1.2-3-2.5-1.6.9-2.2.9-3.9-1.2-5.5-1.5 2-1.3 3.7.6 5.6-1.2-.7-3.1 0-2 2.3.6-1.4 1.8-1.1 2.1.1.2.9-.3 1.9-1.5 2.1-.9.2-2.4-.5-3.5-3 .6 0 1.2.3 2 .9l-1.2-4c-.3 1.1-.7 1.9-1.1 2.3-.3-.8-.2-1.4 0-2.7l-2.9.9C1.3 23 2.6 25.5 3.7 30c3.7-.5 7.9-.8 12.3-.8"
                    ></path>
                  </svg>

                  <span className="govuk-header__logotype-text"> GOV.UK </span>
                </span>
              </a>
            </div>
          </div>
        </header>

        <div className="govuk-width-container">
          <div className="govuk-phase-banner">
            <p className="govuk-phase-banner__content">
              <strong className="govuk-tag govuk-phase-banner__content__tag">
                beta
              </strong>
              <span className="govuk-phase-banner__text">
                This is a new service – your
                <a
                  href="https://home.account.gov.uk/contact-gov-uk-one-login?fromURL=https%3A%2F%2Fsignin.account.gov.uk%2Fsign-in-or-create"
                  className="govuk-link"
                  rel="noopener"
                  target="_blank"
                >
                  feedback (opens in new tab)
                </a>
                will help us to improve it.
              </span>
            </p>
          </div>

          <nav
            className="language-select"
            aria-label="Choose Language"
            role="navigation"
          >
            <ul
              className="govuk-list language-select__list govuk-body-s govuk-!-margin-0"
              role="list"
            >
              <li className="language-select__list-item" role="listitem">
                <span>English</span>
              </li>

              <li className="language-select__list-item" role="listitem">
                <a
                  className="govuk-link govuk-link--no-visited-state"
                  href="/sign-in-or-create?lng=cy"
                  data-journey-click="link - click:lang-select:cy"
                  rel="alternate"
                  hrefLang="cy"
                  role="link"
                >
                  Cymraeg
                  <div className="govuk-visually-hidden">
                    Newid yr iaith ir Gymraeg
                  </div>
                </a>
              </li>
            </ul>
          </nav>

          <main className="govuk-main-wrapper" id="main-content" role="main">
            {children}
          </main>
        </div>

        <footer className="govuk-footer" role="contentinfo">
          <div className="govuk-width-container">
            <div className="govuk-footer__meta">
              <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
                <h2 className="govuk-visually-hidden">Support links</h2>

                <ul className="govuk-footer__inline-list">
                  <li className="govuk-footer__inline-list-item">
                    <a
                      className="govuk-footer__link"
                      href="/accessibility-statement"
                    >
                      Accessibility statement
                    </a>
                  </li>

                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="/cookies">
                      {" "}
                      Cookies{" "}
                    </a>
                  </li>

                  <li className="govuk-footer__inline-list-item">
                    <a
                      className="govuk-footer__link"
                      href="/terms-and-conditions"
                    >
                      Terms and conditions
                    </a>
                  </li>

                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="/privacy-notice">
                      Privacy notice
                    </a>
                  </li>

                  <li className="govuk-footer__inline-list-item">
                    <a
                      className="govuk-footer__link"
                      href="https://home.account.gov.uk/contact-gov-uk-one-login?fromURL=https%3A%2F%2Fsignin.account.gov.uk%2Fsign-in-or-create"
                      target="_blank"
                    >
                      Support (opens in new tab)
                    </a>
                  </li>
                </ul>

                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="govuk-footer__licence-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 483.2 195.7"
                  height="17"
                  width="41"
                >
                  <path
                    fill="currentColor"
                    d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
                  ></path>
                </svg>
                <span className="govuk-footer__licence-description">
                  All content is available under the{" "}
                  <a
                    className="govuk-footer__link"
                    href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                    rel="licence"
                  >
                    Open Government Licence v3.0
                  </a>
                  , except where otherwise stated
                </span>
              </div>
              <div className="govuk-footer__meta-item">
                <a
                  className="govuk-footer__link govuk-footer__copyright-logo"
                  href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
                >
                  © Crown copyright
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
