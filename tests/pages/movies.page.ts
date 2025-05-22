import { type Locator, type Page } from '@playwright/test';

export class MoviesPage {
    readonly page: Page;
    readonly searchButton: Locator;
    readonly searchInput: Locator;
    readonly searchSubmitButton: Locator;
    readonly noResultsHeading: Locator;
    readonly noResultsSubHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchButton = page.getByRole('search');
        this.searchInput = page.getByRole('textbox', { name: 'Search Input' });
        this.searchSubmitButton = page.getByRole('button', { name: 'Search for a movie' });
        this.noResultsHeading = page.getByRole('heading', { name: 'Sorry!', level: 3 });
        this.noResultsSubHeading = page.getByRole('heading', { level: 4 });
    }

    async goto() {
        await this.page.goto('https://debs-obrien.github.io/playwright-movies-app?category=Popular&page=1');
    }

    async searchForMovie(movieName: string) {
        await this.searchButton.click();
        await this.searchInput.fill(movieName);
        await this.searchSubmitButton.click();
    }

    async getMovieHeading(movieName: string) {
        return this.page.getByRole('heading', { name: movieName, level: 2 });
    }

    async getNoResultsMessage(searchTerm: string) {
        return this.page.getByRole('heading', { name: `There were no results for ${searchTerm}...`, level: 4 });
    }
}
