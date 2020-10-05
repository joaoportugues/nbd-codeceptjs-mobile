const properties = require('./resources/properties.json')

const fs = require('fs')
const path = require('path')
const directory = 'reports'

var today = new Date();  
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const directoryDate = 'reports' + '/' + date

//json configs in properties file

//var deviceConfig = "properties.iosConfigs.local.emulator.appium"
var deviceConfig = "properties.androidConfigs.bitbar.androidReal.appium"

var env = deviceConfig.split (".")

//var deviceConfig = properties.iosConfigs.local.emulator.appium
var deviceConfig = properties.androidConfigs.bitbar.androidReal.appium

reportsDirectory = './'+ directory + '/' + date + "/" + env[2] + "-" + env[3] + "-" + deviceConfig.capabilities.deviceName

if (!fs.existsSync(directoryDate)) {
    fs.mkdirSync(directoryDate);
}

if (!fs.existsSync(reportsDirectory)) {
    fs.mkdirSync(reportsDirectory);
}

exports.config = {
  output: './output',
  helpers: {
	 Appium: deviceConfig
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
	allure: {
      enabled: true,
      outputDir: reportsDirectory
    },
  },
  tests: './*_test.js',
  name: 'codeceptjs-ios'
}