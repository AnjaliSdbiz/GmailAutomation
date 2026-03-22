class ComposePage {

    // ================================
    // LOCATORS for Compose screen
    // ================================

    get toField() {
        return $(
            '//android.widget.EditText' +
            '[@resource-id="com.google.android.gm:id/to"]'
        );
    }

    get subjectField() {
        return $(
            '//android.widget.EditText' +
            '[@resource-id="com.google.android.gm:id/subject"]'
        );
    }

    get bodyField() {
        return $(
            '//android.widget.EditText' +
            '[@resource-id="com.google.android.gm:id/body"]'
        );
    }

    get sendButton() {
        return $('~Send');
    }

    get composeTitle() {
        return $(
            '//android.widget.TextView' +
            '[@resource-id="com.google.android.gm:id/compose_subject_view"]'
        );
    }

    // ================================
    // ACTIONS
    // ================================

    async enterTo(email) {
        await this.toField.waitForDisplayed({ timeout: 10000 });
        await this.toField.setValue(email);
        await driver.pressKeyCode(66); // press Enter key
    }

    async enterSubject(subject) {
        await this.subjectField.waitForDisplayed({ timeout: 10000 });
        await this.subjectField.setValue(subject);
    }

    async enterBody(text) {
        await this.bodyField.waitForDisplayed({ timeout: 10000 });
        await this.bodyField.setValue(text);
    }

    async tapSend() {
        await this.sendButton.waitForDisplayed({ timeout: 10000 });
        await this.sendButton.click();
    }

    async isComposeScreenVisible() {
        return await this.toField.isDisplayed();
    }

}

module.exports = new ComposePage();