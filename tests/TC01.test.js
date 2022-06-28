const {test, expect, chromium} = require('@playwright/test');

const correo_parte1 = ["sonia"];
const correo_parte2= ['@chilliapps.com'];
var contador= 0;

const nombre_parte1 = ["sonia"];
 
 
  /*------------------CORREO 01----------------------------------------------------------------------------------------*/
  /*------------------CORREO 01----------------------------------------------------------------------------------------*/
    test('Correo1', async ({page})  => {
     
      for (var a=0; a==5; a++) {
            contador = contador + 33;
            correoFinal = correo_parte1+contador+correo_parte2; 
            nombreFinal = nombre_parte1+contador; 

        await page.goto('https://hardtek.myshopify.com/collections/speakers/products/5-satellite-speakers-system')
        //await page.locator('button:has-text("Add to Cart")').click();
        test.setTimeout(80000);
        await page.locator('button:has-text("Add to Cart")').nth(1).click();
        test.setTimeout(80000);
        await page.locator('text=Proceed to checkout').first().click();
        //await page.locator('button:has-text("Checkout")').click();

        /************ AGREGAR DATOS*******************************/
        await page.locator('[placeholder="Email or mobile phone number"]').fill(correoFinal);
        console.log("CorreoFinal", correoFinal)
        await page.locator('text=Email me with news and offers We’ll send you an order receipt and recurring ship >> input[type="checkbox"]').check();
        await page.locator('[placeholder="First name \\(optional\\)"]').fill(nombreFinal);
        console.log("NombreFinal", nombreFinal)
        await page.locator('[placeholder="Last name"]').fill('Last Nombre');
        await page.locator('[placeholder="Street and house number"]').fill('Calle ');
        await page.locator('[placeholder="Postal code"]').fill('45200');
        await page.locator('[placeholder="City"]').fill('Zapopan');
        await page.locator('select[name="checkout\\[shipping_address\\]\\[province\\]"]').selectOption('JAL');
        await page.locator('button:has-text("Continue to shipping")').click();

        //*********CONTINUAR COMPRA*****************/
        await page.locator('button:has-text("Continue to payment")').click();
       

        //-------Terminar Compra---------------/
        await page.locator('#checkout_payment_gateway_66737995887').check();  //Clic en pagar con deposito
        test.setTimeout(80000);
        await page.locator('button:has-text("Complete order")').first().click(); // Clic en terminar compra
        test.setTimeout(1200000);
        await context.close();
        await browser.close();
        
     } 
    
  });


 

 