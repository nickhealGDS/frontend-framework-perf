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
    await page.goto("http://localhost:3000");

    await page.click("#start");

    await page.waitForSelector('input[name="name"]', { timeout: 5000 });
    await page.fill('input[name="name"]', "Nick");
    await page.click('button[type="submit"]');

    await page.waitForSelector("#header", { timeout: 5000 });
    const headerText = await page.textContent("#header");
    if (headerText !== "Check answers") {
      throw new Error("Header does not match expected text!");
    }
  } finally {
    await page.close();
  }
}
