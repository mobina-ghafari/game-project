export interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface ESRBRating {
  id: number;
  slug: string;
  name: string;
}

export interface PlatformWrapper {
  platform: Platform;
  released_at: string | null;
  requirements: PlatformRequirements | null;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface PlatformRequirements {
  minimum: string;
  recommended: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string | null;
  rating: number;
  rating_top: number;
  ratings_count: number;
  metacritic: number | null;
  playtime: number;
  updated: string;

  esrb_rating: ESRBRating | null;
  platforms: PlatformWrapper[];
}
