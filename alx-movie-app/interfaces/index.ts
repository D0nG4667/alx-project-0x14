import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode
}

export interface ButtonProps {
  title: string
  action?: () => void
}

export interface MovieProps {
  id?: string
  posterImage: string
  releaseYear: string
  title: string
}

interface PrimaryImage {
  url: string
}

interface TitleText {
  text: string
}

interface ReleaseYear {
  year: string
}

export interface MoviesProps {
  id: string
  primaryImage: PrimaryImage
  titleText: TitleText
  releaseYear: ReleaseYear
}

/**
 * Extended interface for detailed movie view
 * Adds optional fields like runtime, rating, cast, etc.
 */
export interface MovieDetailsProps extends MoviesProps {
  originalTitleText?: {
    text: string;
  };

  releaseDate?: {
    day: number;
    month: number;
    year: number;
  };

  titleType?: {
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
  };
}
