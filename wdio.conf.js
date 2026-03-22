exports.config = {

    // =============================
    // WHERE YOUR TESTS ARE LOCATED
    // =============================
    specs: [
        './test/specs/**/*.js'
    ],

    // ========================
    // HOW MANY TESTS AT ONCE
    // ========================
    maxInstances: 1,

    // ========================
    // DEVICE CAPABILITIES
    // This tells Appium which
    // device and app to use
    // ========================
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.google.android.gm',
        'appium:appActivity': 'com.google.android.gm.ConversationListActivityGmail',
        'appium:noReset': true,
        'appium:autoGrantPermissions': true
    }],

    // ========================
    // TEST RUNNER + FRAMEWORK
    // ========================
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // ========================
    // APPIUM SERVICE
    // WDIO starts Appium
    // automatically for you
    // ========================
    services: [['appium', {
        command: 'appium',
        args: {
            relaxedSecurity: true,
            log: './appium.log'
        }
    }]],

    // ========================
    // REPORTS — shows results
    // in your terminal
    // ========================
    reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]
],
    // ========================
    // HOOKS — code that runs
    // before/after tests
    // ========================
    beforeSession: function () {
        console.log('Starting test session...');
    },

    afterSession: function () {
        console.log('Test session ended.');
    },
    afterTest: async function(test, context, { error }) {
    if (error) {
        await browser.takeScreenshot();
    }
}
}