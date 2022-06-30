const {test, expect} = require('@playwright/test');

//Para la construcción del correo
const correo_parte1 = ["sonia+prueba"];
const correo_parte2= ['@chilliapps.com'];

//Para la construcción del nombre
const nombre_parte1 = ["SoniaName"];

//Para la construcción del Primer Apellido
const apepat_parte1 = ["ApePat"];

//Para la construcción de la calle
const calle_parte1 = ["Av. siempre viva "]

// Contadores 
var contador= 666;



//***TC01_ GENERAR UNA COMPRA EN TIENDA*************************************************** 
    test('Generar una compra en Hardtek', async ({page})  => {
     
    for (var a=0; a<=50; a++) { //número de compras a generar 50
         contador = contador + 1;
               
           correo_final = correo_parte1+contador+correo_parte2; 
           nombre_final = nombre_parte1+contador; 
           apepat_final = apepat_parte1+contador;
            calle_final = calle_parte1+contador;

        test.setTimeout(120000000); 
       
        //*********** */ Compras con el producto 5-satellite-speakers-system*************/
        await page.goto('https://hardtek.myshopify.com/collections/speakers/products/5-satellite-speakers-system')
        await page.locator('button:has-text("Add to Cart")').click();
        await page.locator('button:has-text("Add to Cart")').nth(1).click();
                 test.setTimeout(820000);
               
        await page.locator('text=Proceed to checkout').first().click();
       console.log("a) Producto seleccionado")

        /************ AGREGAR DATOS PERSONALES DEL COMPRADOR*******************************/
     
        await page.locator('[placeholder="Email or mobile phone number"]').fill(correo_final);
        test.setTimeout(830000);
        
        await page.locator('text=Email me with news and offers We’ll send you an order receipt and recurring ship >> input[type="checkbox"]').check();
        await page.locator('[placeholder="First name \\(optional\\)"]').fill(nombre_final);
        await page.locator('[placeholder="Last name"]').fill(apepat_final);
        await page.locator('[placeholder="Street and house number"]').fill(calle_final);
        await page.locator('[placeholder="Postal code"]').fill('45000');
        await page.locator('[placeholder="City"]').fill('Zapopan');
        await page.locator('select[name="checkout\\[shipping_address\\]\\[province\\]"]').selectOption('JAL');

        console.log ("b) Datos del cliente agregados")

        await page.locator('button:has-text("Continue to shipping")').click();
        test.setTimeout(1200001);
         
     
        //*********CONTINUAR COMPRA********************************************************/
        await page.locator('button:has-text("Continue to payment")').click();
        test.setTimeout(1200002); 
        

        //***************Terminar Compra***************************************************/
        await page.locator('#checkout_payment_gateway_66737995887').check();  //Clic en pagar con deposito
        test.setTimeout(810000);
        console.log("c) Agregar deposito de pago")
        await page.locator('button:has-text("Complete order")').first().click(); // Clic en terminar compra
            
        test.setTimeout(120000003); 
        
        console.log ("d) Operación finalizada, número: "+ a +" , con correo: ",correo_final)
      
        await expect.soft(page.locator('body > div.content > div > div > main > div.step > div.step__sections > div:nth-child(2) > div > div:nth-child(1) > div.content-box__row.text-container > h2'))
                     .toHaveText('Your order is confirmed');
      
      } 
    
  });

  
 

 