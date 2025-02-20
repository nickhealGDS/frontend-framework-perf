import Form from "next/form";
import { submitName } from "./actions";
import Button from "../components/Button";

export default function Name() {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <Form action={submitName}>
          <div className="govuk-form-group">
            <h1 className="govuk-label-wrapper">
              <label
                className="govuk-label govuk-label--l"
                htmlFor="enter-email"
              >
                Enter your name
              </label>
            </h1>

            <input
              className="govuk-input"
              id="enter-email"
              name="name"
              type="text"
            />
          </div>

          <Button
            type="submit"
            className="govuk-button"
            data-module="govuk-button"
          >
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}
