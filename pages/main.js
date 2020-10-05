const { I } = inject();
let config = require('codeceptjs').config.get()
const assert = require('assert');
const signInPage = require('../pages/signInPage');
const resemble = require("resemblejs");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

module.exports = {
  // insert your locators and methods here
	async seeText(text) {
		 switch (text.toLowerCase()) {
			case 'logo': 
			//not in use, just for reference
				I.waitForElement({android: landing.elementsAndroid.logo , ios: landing.elementsiOS.logo}, 20)
				break
			default:
			    I.waitForElement({android: text, ios: '~' +text}, 20);
				break
		}
    },

	async clickOption(name) {
		switch (name.toLowerCase()) {
			case 'options': 
			//not in use, just for reference
			//I.runOnIOS(() => {I.tap("~Allow")})
				I.tap({android: '//*[@content-desc="'+ landing.elementsAndroid.settings + '"]' , ios: landing.elementsiOS.settings})
				break
			default:
			    I.tap({android: name, ios: '~' +name});
				break
		}
    },

	type(text, field) {		
		switch (field.toLowerCase()) {
			case 'email': 	
				I.fillField('//*[@text="Email"]', text)
				I.waitForElement({android: text, ios: '~' +text}, 20);
				//I.fillField(signInPage.elementsAndroid.emailField, text)
				//I.seeInField(signInPage.elementsAndroid.emailField, text)			
				break
			case 'password': 	
				I.fillField('//*[@text="Password"]', text)
				//I.fillField(signInPage.elementsAndroid.passwordField, text)
				//I.seeInField(signInPage.elementsAndroid.passwordField, text)			
				break
			default:
				break
		}
    },
}
