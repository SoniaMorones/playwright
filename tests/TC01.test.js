const {test, expect} = require('@playwright/test');

//Para la construcción del correo
const correo_parte1 = ["sonia"];
const correo_parte2= ['@chilliapps.com'];

//Para la construcción del nombre
const nombre_parte1 = ["Sonia"];

//Para la construcción del Primer Apellido
const Apepat_parte1 = ["ApePat"];

//Para la construcción de la calle
const calle_parte1 = ["Av. siempre viva "]

// Contadores 
var contador= 0;
var contadorCP = 40000;


//***TC01_ GENERAR UNA COMPRA EN TIENDA*************************************************** 
    test('Generar una compra en Hardtek', async ({page})  => {
     
    for (var a=0; a<5; a++) { //número de compras a generar
         contador = contador + 19;
         contadorCP = contadorCP +1;  
        
           correoFinal = correo_parte1+contador+correo_parte2; 
           nombreFinal = nombre_parte1+contador; 
           apepat_Final =Apepat_parte1+contador;
           calle_final =calle_parte1+contador;

        console.log ("Operación : "+ a +" , con correo: ",correoFinal)
        

        test.setTimeout(120000000); 
        //*********** */ Compras con el producto 5-satellite-speakers-system*************/
        await page.goto('https://hardtek.myshopify.com/collections/speakers/products/5-satellite-speakers-system')
        await page.locator('button:has-text("Add to Cart")').click();
        await page.locator('button:has-text("Add to Cart")').nth(1).click();
                  test.setTimeout(80000);
        await page.locator('text=Proceed to checkout').first().click();
    

        /************ AGREGAR DATOS PERSONALES DEL COMPRADOR*******************************/
     
        await page.locator('[placeholder="Email or mobile phone number"]').fill(correoFinal);
        test.setTimeout(80000);
        await page.locator('text=Email me with news and offers We’ll send you an order receipt and recurring ship >> input[type="checkbox"]').check();
        await page.locator('[placeholder="First name \\(optional\\)"]').fill(nombreFinal);
        await page.locator('[placeholder="Last name"]').fill(apepat_Final);
        await page.locator('[placeholder="Street and house number"]').fill(calle_final);
        await page.locator('[placeholder="Postal code"]').fill('45000');
        await page.locator('[placeholder="City"]').fill('Zapopan');
        await page.locator('select[name="checkout\\[shipping_address\\]\\[province\\]"]').selectOption('JAL');
        await page.locator('button:has-text("Continue to shipping")').click();
        test.setTimeout(1200000); 
     
        //*********CONTINUAR COMPRA********************************************************/
        await page.locator('button:has-text("Continue to payment")').click();
        test.setTimeout(1200000); 

        //***************Terminar Compra***************************************************/
        await page.locator('#checkout_payment_gateway_66737995887').check();  //Clic en pagar con deposito
        test.setTimeout(80000);
        await page.locator('button:has-text("Complete order")').first().click(); // Clic en terminar compra
        test.setTimeout(120000000);     
        test.setTimeout(120000000); 
        test.setTimeout(8000000); 
      
      
        await expect(page).toBeCloseTo('https://hardtek.myshopify.com/13626477/checkouts/4995a4a11ae74ab1cd18a8e6fa83e2c9/thank_you'); 
      
      } 
    
  });

  
 

 