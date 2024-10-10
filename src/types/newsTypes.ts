// src/types/newsTypes.ts

export interface Comment {
    name: string;
    text: string;
}

export interface NewsArticle {
    id: number;
    title: string;
    date: string; // Formato: YYYY-MM-DD
    content: string;
    image: string;
    categories: string[];
    comments: Comment[];
}
