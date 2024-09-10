import { type ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export async function action({ request }: ActionFunctionArgs) {
  // Process form data and perform necessary actions
  return redirect("/summary");
}

export default function Name() {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <Form method="post">
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

          <button
            type="submit"
            className="govuk-button"
            data-module="govuk-button"
          >
            Continue
          </button>
        </Form>
      </div>
    </div>
  );
}
