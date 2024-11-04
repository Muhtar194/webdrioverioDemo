const testData = require('../testData/testData');

class RetirementCalculatorPage {
   
    get currentAgeInput() {
      return $('#current-age');
    }
  
    get retirementAgeInput() {
      return $('#retirement-age');
    }
  
    get currentIncomeInput() {
      return $('#current-income');
    }
  
    get spouseIncomeInput() {
      return $('#spouse-income');
    }
  
    get totalSavingsInput() {
      return $('#current-total-savings');
    }
  
    get annualSavingsInput() {
      return $('#current-annual-savings');
    }
  
    get savingsIncreaseRateInput() {
      return $('#savings-increase-rate');
    }
  
    get submitButton() {
      return $('//button[@data-tag-id="submit"]');
    }
  
    get preRetirementCalculatorHeader() {
      return $('//h2[text()="Pre-retirement calculator"]');
    }
  
    get resultsHeader() {
      return $('//h3[text()="Results"]');
    }
  
    get resultMessage() {
      return $('#result-message');
    }
  
    get socialBenefitsToggleYes() {
      return $('label[for="yes-social-benefits"]');
    }
  
    get maritalStatusLabel() {
      return $('#marital-status-label');
    }
  
    get socialSecurityOverrideInput() {
      return $('#social-security-override');
    }
  
    get marriedStatus() {
      return $('label[for="married"]');
    }
  
    get defaultValuesButton() {
      return $('a[data-target="#default-values-modal"]');
    }
  
    get additionalIncomeInput() {
      return $('#additional-income');
    }
  
    get retirementDurationInput() {
      return $('#retirement-duration');
    }
  
    get includeInflationToggle() {
      return $('label[for="include-inflation"]');
    }
  
    get expectedInflationRateInput() {
      return $('#expected-inflation-rate');
    }
  
    get retirementAnnualIncomeInput() {
      return $('#retirement-annual-income');
    }
  
    get preRetirementROIInput() {
      return $('#pre-retirement-roi');
    }
  
    get postRetirementROIInput() {
      return $('#post-retirement-roi');
    }
  
    
    async open() {
     
      await browser.url('retirement-calculator.html');
    }
  
 
    async fillRequiredFields() {
        await this.currentAgeInput.setValue(testData.requiredFields.currentAge);
        await this.retirementAgeInput.setValue(testData.requiredFields.retirementAge);
        await this.currentIncomeInput.click();
        await this.currentIncomeInput.setValue(testData.requiredFields.currentIncome);
        await this.spouseIncomeInput.click();
        await this.spouseIncomeInput.setValue(testData.requiredFields.spouseIncome);
        await this.totalSavingsInput.click();
        await this.totalSavingsInput.setValue(testData.requiredFields.totalSavings);
        await this.annualSavingsInput.setValue(testData.requiredFields.annualSavings);
        await this.savingsIncreaseRateInput.setValue(testData.requiredFields.savingsIncreaseRate);
    }
  
    
    async submitForm() {
      await this.submitButton.click();
      await browser.execute(() => document.readyState === 'complete');
      await this.preRetirementCalculatorHeader.waitForDisplayed();
      await this.resultsHeader.waitForDisplayed();
      await this.resultMessage.waitForDisplayed();
    }
  
  
    async toggleSocialSecurityBenefits() {
      await this.socialBenefitsToggleYes.click();
    }
  
  
    async setSocialSecurityOverride(value) {
      await this.socialSecurityOverrideInput.setValue(value);
    }
  
    
    async updateDefaultValues() {
        await this.defaultValuesButton.click();
        await this.additionalIncomeInput.setValue(testData.defaultValues.additionalIncome);
        await this.retirementDurationInput.setValue(testData.defaultValues.retirementDuration);
        await this.includeInflationToggle.click();
        await this.expectedInflationRateInput.setValue(testData.defaultValues.expectedInflationRate);
        await this.retirementAnnualIncomeInput.setValue(testData.defaultValues.retirementAnnualIncome);
        await this.preRetirementROIInput.setValue(testData.defaultValues.preRetirementROI);
        await this.postRetirementROIInput.setValue(testData.defaultValues.postRetirementROI);
    }
  }
  
  module.exports = new RetirementCalculatorPage();
  