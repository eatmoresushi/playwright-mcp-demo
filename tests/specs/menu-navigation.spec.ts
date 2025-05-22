import { test, expect } from '@playwright/test';
import { MoviesPage } from '../pages/movies.page';
import { NavigationPage } from '../pages/navigation.page';

test.describe('Movie Navigation', () => {
    let moviesPage: MoviesPage;
    let navigationPage: NavigationPage;

    test.beforeEach(async ({ page }) => {
        moviesPage = new MoviesPage(page);
        navigationPage = new NavigationPage(page);
        await moviesPage.goto();
    });

    test('should open and navigate menu', async ({ page }) => {
        // Open menu
        await navigationPage.openMenu();
        expect(await navigationPage.isMenuVisible()).toBeTruthy();

        // Navigate to different sections
        await navigationPage.navigateToSection('Popular');
        await expect(page).toHaveURL(/category=Popular/);

        await navigationPage.openMenu();
        await navigationPage.navigateToSection('Top Rated');
        await expect(page).toHaveURL(/category=Top.*Rated/);

        await navigationPage.openMenu();
        await navigationPage.navigateToSection('Upcoming');
        await expect(page).toHaveURL(/category=Upcoming/);
    });

    test('should handle back navigation', async ({ page }) => {
        // Navigate through sections
        await navigationPage.openMenu();
        await navigationPage.navigateToSection('Top Rated');
        await expect(page).toHaveURL(/category=Top.*Rated/);

        await navigationPage.openMenu();
        await navigationPage.navigateToSection('Upcoming');
        await expect(page).toHaveURL(/category=Upcoming/);

        // Go back
        await page.goBack();
        await expect(page).toHaveURL(/category=Top.*Rated/);
    });
});
