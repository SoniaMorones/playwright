/*
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://hardtek.myshopify.com/collections/speakers/products/5-satellite-speakers-system
  await page.goto('https://hardtek.myshopify.com/collections/speakers/products/5-satellite-speakers-system');

  // Click button:has-text("Add to Cart") >> nth=1
  await page.locator('button:has-text("Add to Cart")').nth(1).click();

  // Click text=Proceed to checkout >> nth=0
  await page.locator('text=Proceed to checkout').first().click();
  await page.waitForURL('https://hardtek.myshopify.com/13626477/checkouts/b452b0116ae4941e5f66dc68ff5b0ba4');

  // Click [placeholder="Email or mobile phone number"]
  await page.locator('[placeholder="Email or mobile phone number"]').click();

  // Fill [placeholder="Email or mobile phone number"]
  await page.locator('[placeholder="Email or mobile phone number"]').fill('correo');

  // Press 6 with modifiers
  await page.locator('[placeholder="Email or mobile phone number"]').press('Alt+6');

  // Press 4 with modifiers
  await page.locator('[placeholder="Email or mobile phone number"]').press('Alt+4');

  // Fill [placeholder="Email or mobile phone number"]
  await page.locator('[placeholder="Email or mobile phone number"]').fill('correo@gmail.com');

  // Click [placeholder="First name \(optional\)"]
  await page.locator('[placeholder="First name \\(optional\\)"]').click();

  // Fill [placeholder="First name \(optional\)"]
  await page.locator('[placeholder="First name \\(optional\\)"]').fill('FirstName');

  // Press Tab
  await page.locator('[placeholder="First name \\(optional\\)"]').press('Tab');

  // Fill [placeholder="Last name"]
  await page.locator('[placeholder="Last name"]').fill('SecondName');

  // Click text=hardtek Information Order summary Shopping cart Product image Description Quanti
  await page.locator('text=hardtek Information Order summary Shopping cart Product image Description Quanti').click();

  // Check text=Email me with news and offers We’ll send you an order receipt and recurring ship >> input[type="checkbox"]
  await page.locator('text=Email me with news and offers We’ll send you an order receipt and recurring ship >> input[type="checkbox"]').check();

  // Click [placeholder="Street and house number"]
  await page.locator('[placeholder="Street and house number"]').click();

  // Fill [placeholder="Street and house number"]
  await page.locator('[placeholder="Street and house number"]').fill('Calle street');

  // Press Tab
  await page.locator('[placeholder="Street and house number"]').press('Tab');

  // Fill [placeholder="Postal code"]
  await page.locator('[placeholder="Postal code"]').fill('45000');

  // Click [placeholder="City"]
  await page.locator('[placeholder="City"]').click();

  // Fill [placeholder="City"]
  await page.locator('[placeholder="City"]').fill('Guadalajara');

  // Press Tab
  await page.locator('[placeholder="City"]').press('Tab');

  // Press ArrowUp
  await page.locator('select[name="checkout\\[shipping_address\\]\\[province\\]"]').press('ArrowUp');

  // Select CHIS
  await page.locator('select[name="checkout\\[shipping_address\\]\\[province\\]"]').selectOption('CHIS');

  // Click text=Phone (optional) In case we need to contact you about your order >> input[name="checkout\[shipping_address\]\[phone\]"]
  await page.locator('text=Phone (optional) In case we need to contact you about your order >> input[name="checkout\\[shipping_address\\]\\[phone\\]"]').click();

  // Click button:has-text("Continue to shipping")
  await page.locator('button:has-text("Continue to shipping")').click();
  await page.waitForURL('https://hardtek.myshopify.com/13626477/checkouts/b452b0116ae4941e5f66dc68ff5b0ba4?previous_step=contact_information&step=shipping_method');

  // Click button:has-text("Continue to payment")
  await page.locator('button:has-text("Continue to payment")').click();
  await page.waitForURL('https://hardtek.myshopify.com/13626477/checkouts/b452b0116ae4941e5f66dc68ff5b0ba4?previous_step=shipping_method&step=payment_method');

  // Check #checkout_payment_gateway_66737995887
  await page.locator('#checkout_payment_gateway_66737995887').check();

  // Click button:has-text("Complete order") >> nth=0
  await page.locator('button:has-text("Complete order")').first().click();
  await page.waitForURL('https://hardtek.myshopify.com/13626477/checkouts/b452b0116ae4941e5f66dc68ff5b0ba4/processing');

  // Go to https://hardtek.myshopify.com/13626477/checkouts/b452b0116ae4941e5f66dc68ff5b0ba4/thank_you
  await page.goto('https://hardtek.myshopify.com/13626477/checkouts/b452b0116ae4941e5f66dc68ff5b0ba4/thank_you');

  // ---------------------
  await context.close();
  await browser.close();
})();


*/