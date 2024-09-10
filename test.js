import { browser } from "k6/browser";

export const options = {
  scenarios: {
    ui: {
      executor: "shared-iterations",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
  thresholds: {
    checks: ["rate==1.0"],
  },
};

export default async function () {
  const page = await browser.newPage();

  try {
    // Load the localhost page
    await page.goto("http://localhost:3000");

    // Click the "Continue" button
    await page.click('button:has-text("Continue")');

    // Fill the input with the label "Name" with "Nick"
    await page.fill('input[name="name"]', "Nick");

    // Click the "Submit" button
    await page.click('button:has-text("Submit")');

    // Verify the page has the header
    const headerText = await page.textContent("h1");
    if (headerText !== "Thank you for completing the form") {
      throw new Error("Header does not match expected text!");
    }
  } finally {
    await page.close();
  }
}
