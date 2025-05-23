import { Page } from '@playwright/test';

export class ThemePage {
    private page: Page;
    private lightThemeButton: any;
    private darkThemeButton: any;
    private themeToggle: any;

    constructor(page: Page) {
        this.page = page;
        this.lightThemeButton = page.getByRole('button', { name: '☀' });
        this.darkThemeButton = page.getByRole('button', { name: '☾' });
        this.themeToggle = page.getByText('Toggle Switch');
    }

    async toggleTheme() {
        await this.themeToggle.click();
        // Wait for theme transition
        await this.page.waitForTimeout(100);
    }

    async isDarkTheme() {
        // Theme toggle state represents the current theme directly
        return await this.themeToggle.isChecked();
    }

    async getLightThemeButtonVisibility() {
        // Light theme button (☀) is shown when in dark mode
        const isDark = await this.isDarkTheme();
        return isDark;
    }

    async getDarkThemeButtonVisibility() {
        // Dark theme button (☾) is shown when in light mode
        const isDark = await this.isDarkTheme();
        return !isDark;
    }
}
