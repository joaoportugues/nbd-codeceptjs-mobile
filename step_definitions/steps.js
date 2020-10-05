const { I } = inject();
const main = require('../pages/main');
const allure = codeceptjs.container.plugins('allure')

After((test) => {
  var myJSON = JSON.stringify(test, ['tags'])

  //get config information
//console.log(config.helpers.WebDriver.browser) 

  if (myJSON.toLowerCase().includes("trivial")) {
	allure.severity("trivial")
  } else if (myJSON.toLowerCase().includes("minor")) {
	allure.severity("minor")
  } else if (myJSON.toLowerCase().includes("normal")) {
	allure.severity("normal")
  } else if (myJSON.toLowerCase().includes("critical")) {
	allure.severity("critical")
  } else if (myJSON.toLowerCase().includes("blocker")) {
	allure.severity("blocker")
  } else {
	allure.severity("normal")
  }
})

// Add in your custom step files

Given('I see {string}', (text) => {main.seeText(text)});

Then('I press {string}', (name) => {main.clickOption(name)});

Then('I type {string} in {string}', (text, field) => {main.type(text, field)});

Then('I see graphic {string}', async (text, field) => {main.evaluateGraphic(text)});
