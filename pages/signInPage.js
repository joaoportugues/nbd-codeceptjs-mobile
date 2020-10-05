const { I } = inject();

module.exports = {
  // insert your locators and methods here
	elementsiOS: {
		settingsMenuTitle: '~Einstellungen',
		themeText: '~Themenauswahl',
		languageText: '~Sprachauswahl',
		themeDropDown: '~Blau',
	},
	
	elementsAndroid: {
		emailField: "(//*[@class='android.view.ViewGroup' and ./parent::*[@class='android.view.ViewGroup'] "+
		"and (./preceding-sibling::* |(//*[@class='android.view.ViewGroup' and ./parent::*[@class='android.view.ViewGroup'] and "+
		"(./preceding-sibling::* | ./following-sibling::*)[@class='android.widget.ImageView']]/*/*[@class='android.widget.EditText'])[1]",
		passwordField: "(//*[@class='android.view.ViewGroup' and ./parent::*[@class='android.view.ViewGroup'] and (./preceding-sibling::* "+
		"| ./following-sibling::*)[@class='android.widget.ImageView']]/*/*[@class='android.widget.EditText'])[2]",
		logo: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout'+
		'/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup'+
		'/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ImageView[2]',
	},
}
