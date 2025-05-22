import { Page } from '@playwright/test';

export class NavigationPage {
    private page: Page;
    private menuButton: any;
    private navigationPanel: any;

    constructor(page: Page) {
        this.page = page;
        this.menuButton = page.getByRole('menu');
        this.navigationPanel = page.getByRole('navigation');
    }

    async openMenu() {
        await this.menuButton.click();
        // Wait for the navigation panel to be visible and ensure its ready to interact
        await this.page.waitForTimeout(500); // Add a small delay for animation
        await this.navigationPanel.waitFor({ state: 'visible' });
    }

    async navigateToSection(sectionName: string) {
        const link = this.navigationPanel.getByRole('link', { name: sectionName });
        await link.waitFor({ state: 'visible' });
        await link.click();
    }

    async isMenuVisible() {
        return await this.navigationPanel.isVisible();
    }

    async getActiveMenuItem() {
        return this.navigationPanel.getByRole('link', { selected: true });
    }
}
