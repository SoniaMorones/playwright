const {test, expect} = require('@playwright/test');

//Para la construcción del correo
const correo_parte1 = ["sonia"];
const correo_parte2= ['@chilliapps.com'];
var contador= 0;
//Para la construcción del nombre
const nombre_parte1 = ["Sonia"];

//Para la construcción del Primer Apellido
const Apepat_parte1 = ["ApePat"];


    test('Generar una compra en Hardtek', async ({page})  => {
     
    for (var a=0; a<5; a++) {
         contador = contador + 18;
           correoFinal = correo_parte1+contador+correo_parte2; 
           nombreFinal = nombre_parte1+contador; 
        console.log ("VariableS: ", correoFinal, nombreFinal)
        console.log ("Contador: ", contador)
        test.setTimeout(120000000); 
        
        await page.goto('https://hardtek.myshopify.com/collections/speakers/products/5-satellite-speakers-system')
        await page.locator('button:has-text("Add to Cart")').click();
       // test.setTimeout(80000);
        await page.locator('button:has-text("Add to Cart")').nth(1).click();
       test.setTimeout(80000);
        await page.locator('text=Proceed to checkout').first().click();
     //   await page.locator('button:has-text("Checkout")').click();

        /************ AGREGAR DATOS*******************************/
     //   await expect(page.locator('logo__text heading-1')).toHaveText('hardjjtek');
        await page.locator('[placeholder="Email or mobile phone number"]').fill(correoFinal);
        test.setTimeout(80000);
        await page.locator('text=Email me with news and offers We’ll send you an order receipt and recurring ship >> input[type="checkbox"]').check();
        await page.locator('[placeholder="First name \\(optional\\)"]').fill(nombreFinal);
     
        await page.locator('[placeholder="Last name"]').fill('Last Nombre');
        await page.locator('[placeholder="Street and house number"]').fill('Calle ');
        await page.locator('[placeholder="Postal code"]').fill('45200');
        await page.locator('[placeholder="City"]').fill('Zapopan');
        await page.locator('select[name="checkout\\[shipping_address\\]\\[province\\]"]').selectOption('JAL');
        await page.locator('button:has-text("Continue to shipping")').click();
        test.setTimeout(1200000); 
        //*********CONTINUAR COMPRA*****************/
        await page.locator('button:has-text("Continue to payment")').click();
        test.setTimeout(1200000); 

        //-------Terminar Compra---------------/
        await page.locator('#checkout_payment_gateway_66737995887').check();  //Clic en pagar con deposito
        test.setTimeout(80000);
        await page.locator('button:has-text("Complete order")').first().click(); // Clic en terminar compra
        test.setTimeout(120000000);     
        test.setTimeout(120000000); 
        test.setTimeout(8000000); 
       // await expect(page).toContain('https://hardtek.myshopify.com/13626477/checkouts/4995a4a11ae74ab1cd18a8e6fa83e2c9/thank_you'); 
       // await expect(page.locator('/html/body/div[1]/div/div/main/div[1]/div[1]/div[1]/div/svg'));
       await expect.soft(page.locator('btn__content')).toHaveText('Continue shopping');
      } 
    
  });

  
 

 