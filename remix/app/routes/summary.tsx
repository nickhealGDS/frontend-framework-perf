export default function Summary() {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1 id="header" className="govuk-heading-l govuk-!-margin-bottom-5">
          Check answers
        </h1>

        <dl className="govuk-summary-list govuk-summary-list__row--no-actions">
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
              What is your organisation type?
            </dt>
            <dd className="govuk-summary-list__value">
              <div id="organisationTypeContainer"></div>
            </dd>

            <dd className="govuk-summary-list__actions">
              <a className="govuk-link" href="/organisation-type?edit=true">
                Change
                <span className="govuk-visually-hidden"> organisationType</span>
              </a>
            </dd>
          </div>

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
              What would you like help with?
            </dt>
            <dd className="govuk-summary-list__value">
              <div id="helpWithHintContainer"></div>
            </dd>

            <dd className="govuk-summary-list__actions">
              <a className="govuk-link" href="/help-with-hint?edit=true">
                Change
                <span className="govuk-visually-hidden"> helpWithHint</span>
              </a>
            </dd>
          </div>

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Describe your service</dt>
            <dd className="govuk-summary-list__value">
              <div id="serviceDescriptionContainer"></div>
            </dd>

            <dd className="govuk-summary-list__actions">
              <a className="govuk-link" href="/service-description?edit=true">
                Change
                <span className="govuk-visually-hidden">
                  Service description
                </span>
              </a>
            </dd>
          </div>

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Choose your location</dt>
            <dd className="govuk-summary-list__value">
              <div id="chooseLocationContainer"></div>
            </dd>

            <dd className="govuk-summary-list__actions">
              <a className="govuk-link" href="/choose-location?edit=true">
                Change
                <span className="govuk-visually-hidden"> Choose location</span>
              </a>
            </dd>
          </div>

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
              pages.enterEmail.content.header
            </dt>
            <dd className="govuk-summary-list__value">
              <div id="enterEmailContainer"></div>
            </dd>

            <dd className="govuk-summary-list__actions">
              <a className="govuk-link" href="/enter-email?edit=true">
                Change
                <span className="govuk-visually-hidden"> Enter email</span>
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
