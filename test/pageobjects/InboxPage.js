class InboxPage {

    // ================================
    // LOCATORS — from real ui.xml dump
    // ================================

    get composeButton() {
        return $(
            '//android.widget.Button' +
            '[@resource-id="com.google.android.gm:id/compose_button"]'
        );
    }

    get searchBar() {
        return $(
            '//android.widget.EditText' +
            '[@resource-id="com.google.android.gm:id/open_search"]'
        );
    }

    get inboxLabel() {
        return $(
            '//android.widget.TextView' +
            '[@resource-id=' +
            '"com.google.android.gm:id/conversation_list_folder_name"]'
        );
    }

    get navigationDrawer() {
        return $(
            '//android.widget.ImageButton' +
            '[@content-desc="Open navigation drawer"]'
        );
    }

    get firstEmailSender() {
        return $(
            '(//android.widget.TextView' +
            '[@resource-id="com.google.android.gm:id/senders"])[1]'
        );
    }

    get firstEmailSubject() {
        return $(
            '(//android.widget.TextView' +
            '[@resource-id="com.google.android.gm:id/subject"])[1]'
        );
    }

    get firstEmailSnippet() {
        return $(
            '(//android.widget.TextView' +
            '[@resource-id="com.google.android.gm:id/snippet"])[1]'
        );
    }

    // ================================
    // ACTIONS
    // ================================

    async waitForInbox() {
        await this.composeButton.waitForDisplayed({ timeout: 15000 });
    }

    async tapCompose() {
        await this.composeButton.waitForDisplayed({ timeout: 10000 });
        await this.composeButton.click();
    }

    async tapSearch() {
        await this.searchBar.waitForDisplayed({ timeout: 10000 });
        await this.searchBar.click();
    }

    async getInboxTitle() {
        await this.inboxLabel.waitForDisplayed({ timeout: 10000 });
        return await this.inboxLabel.getText();
    }

    async tapFirstEmail() {
        await this.firstEmailSender.waitForDisplayed({ timeout: 10000 });
        await this.firstEmailSender.click();
    }

    async getFirstEmailSenderText() {
        await this.firstEmailSender.waitForDisplayed({ timeout: 10000 });
        return await this.firstEmailSender.getText();
    }

    async getFirstEmailSubjectText() {
        await this.firstEmailSubject.waitForDisplayed({ timeout: 10000 });
        return await this.firstEmailSubject.getText();
    }

}

module.exports = new InboxPage();