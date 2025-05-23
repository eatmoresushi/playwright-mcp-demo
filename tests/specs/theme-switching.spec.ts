import { test, expect } from '@playwright/test';
import { MoviesPage } from '../pages/movies.page';
import { ThemePage } from '../pages/theme.page';

test.describe('Theme Switching', () => {
    let moviesPage: MoviesPage;
    let themePage: ThemePage;

    test.beforeEach(async ({ page }) => {
        moviesPage = new MoviesPage(page);
        themePage = new ThemePage(page);
        await moviesPage.goto();
    });

    test('should toggle theme correctly', async () => {
        // Get initial theme state
        const initialIsDark = await themePage.isDarkTheme();

        // Toggle theme
        await themePage.toggleTheme();

        // Verify theme has changed
        expect(await themePage.isDarkTheme()).toBe(!initialIsDark);

        // Check icon visibility based on current theme
        if (await themePage.isDarkTheme()) {
            expect(await themePage.getLightThemeButtonVisibility()).toBe(true);
            expect(await themePage.getDarkThemeButtonVisibility()).toBe(false);
        } else {
            expect(await themePage.getLightThemeButtonVisibility()).toBe(false);
            expect(await themePage.getDarkThemeButtonVisibility()).toBe(true);
        }

        // Toggle theme back
        await themePage.toggleTheme();

        // Verify theme has changed back
        expect(await themePage.isDarkTheme()).toBe(initialIsDark);

        // Check icon visibility has reverted
        if (await themePage.isDarkTheme()) {
            expect(await themePage.getLightThemeButtonVisibility()).toBe(true);
            expect(await themePage.getDarkThemeButtonVisibility()).toBe(false);
        } else {
            expect(await themePage.getLightThemeButtonVisibility()).toBe(false);
            expect(await themePage.getDarkThemeButtonVisibility()).toBe(true);
        }
    });
});
