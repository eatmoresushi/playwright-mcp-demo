import { test, expect } from '@playwright/test';
import { MoviesPage } from '../pages/movies.page';

test('Movie Search - Search for Garfield movie in search results', async ({ page }) => {
    const moviesPage = new MoviesPage(page);

    // Navigate to the movies app
    await moviesPage.goto();

    // Search for the movie
    await moviesPage.searchForMovie('Garfield');

    // Verify that we're on the search results page
    await expect(page).toHaveTitle('Garfield - Search Results');

    // Verify that the Garfield movie is in the results
    const garfieldMovie = await moviesPage.getMovieHeading('The Garfield Movie');
    await expect(garfieldMovie).toBeVisible();
});

test('Movie Search - No results found for non-existent movie', async ({ page }) => {
    const moviesPage = new MoviesPage(page);
    const searchTerm = '12345';

    // Navigate to the movies app
    await moviesPage.goto();

    // Search for a non-existent movie
    await moviesPage.searchForMovie(searchTerm);

    // Verify that we're on the search results page
    await expect(page).toHaveTitle(`${searchTerm} - Search Results`);

    // Verify that the no results message is shown
    await expect(moviesPage.noResultsHeading).toBeVisible();
    await expect(await moviesPage.getNoResultsMessage(searchTerm)).toBeVisible();
});

