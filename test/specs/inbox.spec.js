const InboxPage = require('../pageobjects/InboxPage');

describe('Gmail App - Inbox Tests', function () {

    // ================================
    // TEST 1 — Inbox loads correctly
    // ================================
    it('should display Gmail inbox with Compose button', async function () {
        await InboxPage.waitForInbox();
        await expect(InboxPage.composeButton).toBeDisplayed();
        console.log('✓ Inbox loaded and Compose button visible');
    });

    // ================================
    // TEST 2 — Inbox label shows
    // ================================
    it('should show Inbox label at top of mail list', async function () {
        const title = await InboxPage.getInboxTitle();
        expect(title).toBe('Inbox');
        console.log('✓ Inbox title is: ' + title);
    });

    // ================================
    // TEST 3 — Search bar exists
    // ================================
    it('should display Search bar on inbox screen', async function () {
        await expect(InboxPage.searchBar).toBeDisplayed();
        console.log('✓ Search bar is visible');
    });

    // ================================
    // TEST 4 — Navigation drawer exists
    // ================================
    it('should show navigation drawer button', async function () {
        await expect(InboxPage.navigationDrawer).toBeDisplayed();
        console.log('✓ Navigation drawer button visible');
    });

    // ================================
    // TEST 5 — Emails are in the inbox
    // ================================
    it('should display at least one email in inbox', async function () {
        const sender = await InboxPage.getFirstEmailSenderText();
        expect(sender).toBeTruthy();
        console.log('✓ First email sender is: ' + sender);
    });

    // ================================
    // TEST 6 — Can read email subject
    // ================================
    it('should display subject of first email', async function () {
        const subject = await InboxPage.getFirstEmailSubjectText();
        expect(subject).toBeTruthy();
        console.log('✓ First email subject is: ' + subject);
    });

});
