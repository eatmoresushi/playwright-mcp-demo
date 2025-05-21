export interface Movie {
    title: string;
    overview: string;
    releaseDate: string;
    voteAverage: number;
}

export type MovieCategory = 'Popular' | 'Top Rated' | 'Upcoming';

export interface SearchOptions {
    category?: MovieCategory;
    page?: number;
}
