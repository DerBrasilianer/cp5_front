// src/types/newsTypes.ts
export interface Comment {
    name: string;
    text: string;
}

export interface NewsArticle {
    id: number;
    title: string;
    content: string;
    date: string; // A propriedade que estava faltando
    image: string;
    categories: string[];
    comments: Comment[];
}
