import { Page } from '@playwright/test';

/**
 * Utility functions for handling common test operations
 */
export class TestUtils {
    /**
     * Extracts text content from an element
     * @param page - Playwright page object
     * @param selector - Element selector
     * @returns Promise with the text content
     */
    static async getElementText(page: Page, selector: string): Promise<string> {
        return await page.locator(selector).textContent() || '';
    }

    /**
     * Waits for network calls to complete
     * @param page - Playwright page object
     */
    static async waitForNetworkIdle(page: Page): Promise<void> {
        await page.waitForLoadState('networkidle');
    }

    /**
     * Formats a date string to a readable format
     * @param dateString - Date string to format
     * @returns Formatted date string
     */
    static formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    /**
     * Extracts number from a string
     * @param text - Text containing a number
     * @returns Extracted number or null if not found
     */
    static extractNumber(text: string): number | null {
        const match = text.match(/\d+(\.\d+)?/);
        return match ? parseFloat(match[0]) : null;
    }
}
