const RetirementCalculatorPage = require('../pageobjects/retirementCal.page');
const testData = require('../testData/testData');

describe('Retirement Calculator', () => {
  let executeBefore = true;

  beforeEach(async () => {
    if (executeBefore) {
      await RetirementCalculatorPage.open();
      await browser.pause(5000); // Adjust pause as needed
      await RetirementCalculatorPage.fillRequiredFields();
      await browser.pause(5000);
     
    }
  });

  it('Verify User should be able to submit form with all required fields filled in', async () => {
    await RetirementCalculatorPage.submitForm();
  });

  it('Verify Additional Social Security fields should display/hide based on Social Security benefits toggle', async () => {
    
    let marriageStatus = await RetirementCalculatorPage.maritalStatusLabel.isDisplayed();
    expect(marriageStatus).toBe(false);

    let overRide = await RetirementCalculatorPage.socialSecurityOverrideInput.isDisplayed();
    expect(overRide).toBe(false);

    await RetirementCalculatorPage.toggleSocialSecurityBenefits();
    marriageStatus = await RetirementCalculatorPage.maritalStatusLabel.isDisplayed();
    expect(marriageStatus).toBe(true);

    overRide = await RetirementCalculatorPage.socialSecurityOverrideInput.isDisplayed();
    expect(overRide).toBe(true);
   
  });

  it('Verify User should be able to submit form with all fields filled in', async () => {
    await RetirementCalculatorPage.toggleSocialSecurityBenefits();
    let marriageStatus = await RetirementCalculatorPage.maritalStatusLabel.isDisplayed();
    expect(marriageStatus).toBe(true);

    await RetirementCalculatorPage.marriedStatus.click();
    await browser.pause(2000);

    await RetirementCalculatorPage.setSocialSecurityOverride(testData.socialSecurity.overrideAmount);
    await RetirementCalculatorPage.submitForm();
    executeBefore = false
  });

  it('Verify User should be able to update default calculator values', async () => {
    await RetirementCalculatorPage.open();
    await RetirementCalculatorPage.updateDefaultValues();
  });
});
