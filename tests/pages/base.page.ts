import { Page } from '@playwright/test';
import { TIMEOUT } from '../data/constants';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Waits for navigation and checks if the page URL matches the expected path
     * @param path - The expected path after navigation
     */
    async navigateTo(path: string): Promise<void> {
        await this.page.goto(path);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Waits for an element to be visible
     * @param selector - The selector to wait for
     * @param timeout - Optional timeout in milliseconds
     */
    async waitForSelector(selector: string, timeout: number = TIMEOUT.MEDIUM): Promise<void> {
        await this.page.waitForSelector(selector, { timeout, state: 'visible' });
    }

    /**
     * Gets the current page URL
     */
    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    /**
     * Checks if an element exists on the page
     * @param selector - The selector to check
     */
    async isElementVisible(selector: string): Promise<boolean> {
        return await this.page.isVisible(selector);
    }
}
