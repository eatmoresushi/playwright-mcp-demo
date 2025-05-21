import { test as base } from '@playwright/test';
import { MoviesPage } from '../pages/movies.page';

// Declare the types of fixtures
type MovieFixtures = {
    moviesPage: MoviesPage;
};

// Extend the base test with our fixtures
export const test = base.extend<MovieFixtures>({
    // Define moviesPage fixture
    moviesPage: async ({ page }, use) => {
        const moviesPage = new MoviesPage(page);
        await use(moviesPage);
    },
});
