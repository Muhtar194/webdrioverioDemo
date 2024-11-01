describe ('Retirement Calculator ', ()=>{
    let executeBefore = true
   // before (async  ()=>{})
    beforeEach (async () => {
    // Open the browser and navigate to the URL
    if (executeBefore == true){
    await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
    await browser.pause(5000);
    // Set the values for all required fields 
    await $('#current-age').setValue('40');
    await $('#retirement-age').setValue('68');

    await $('#current-income').click();
    await $('#current-income').setValue('100000');

    await $('#spouse-income').click();
    await $('#spouse-income').setValue('75000');

    await $('#current-total-savings').click();
    await $('#current-total-savings').setValue('75000');

    await $('#current-annual-savings').setValue('40');
    await $('#savings-increase-rate').setValue('2');
    await browser.pause(5000);
    }
});
          
     it (' Verify User should be able to submit form with all required fields filled in ',async ()=>{

        
        await $('//button[@data-tag-id="submit"]').click()
        await browser.pause(2000) 
        await $('//h2[text()="Pre-retirement calculator"]').waitForDisplayed()
        await $('//h3[text()="Results"]').waitForDisplayed()
        await $('#result-message').waitForDisplayed()

      })
       

      
      it (' Verify Additional Social Security fields should display/hide based on Social Security benefits toggle ',async ()=>{ 

        // toggle social security income no 
         let marriageStatus = await $('#marital-status-label').isDisplayed()
         expect(marriageStatus).toBe(false)

         let overRide = await $('#social-security-override').isDisplayed()
         expect(overRide).toBe(false)

        //  toggle social security income to yes and and fill out 

        await $('label[for="yes-social-benefits"]').click()
         marriageStatus = await $('#marital-status-label').isDisplayed()
         expect(marriageStatus).toBe(true)

         overRide = await $('#social-security-override').isDisplayed()
         expect(overRide).toBe(true)
         await browser.pause(5000)
      })
       
      
      it (' Verify User should be able to submit form with all fields filled in',async ()=>{

        await $('label[for="yes-social-benefits"]').click()
        marriageStatus = await $('#marital-status-label').isDisplayed()
        expect(marriageStatus).toBe(true)

        await $('label[for="married"]').click()
        await browser.pause(2000)

         await $('#social-security-override').click()
         await $('#social-security-override').setValue('4000');  


         await $('//button[@data-tag-id="submit"]').click()
         await browser.pause(2000)
         await $('//h2[text()="Pre-retirement calculator"]').waitForDisplayed()
         await $('//h3[text()="Results"]').waitForDisplayed()
         await $('#result-message').waitForDisplayed()
        executeBefore = false
      })
        
      it (' Verify User should be able to update default calculator values',async ()=>{
        await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
        // changing default calculator value 

        await $('a[data-target="#default-values-modal"]').click()
        await $('#additional-income').click()
        await $('#additional-income').setValue('13000')
  
        await $ ('#retirement-duration').setValue('10')
        // infltion button yes 
        await browser.pause(3000)
        await $('label[for="include-inflation"]').click()

        await $('#expected-inflation-rate').setValue('2')
        await browser.pause(2000)
        await $('#retirement-annual-income').setValue('50')
        await browser.pause(2000)
        await $('#pre-retirement-roi').setValue('8')
        await browser.pause(2000)

       
        await $('#post-retirement-roi').setValue('7')
        await browser.pause(3000)
 
        
        
       // await $('//button[text()="Save changes"]').click()
         
      })








      
})