// src/services/newsService.ts
import { NewsArticle } from "@/types/newsTypes";

const newsArray: NewsArticle[] = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Notícia ${index + 1}`,
    date: `2024-10-${String(index + 1).padStart(2, '0')}`, // Exemplo de data
    content: `Conteúdo da notícia ${index + 1}. Esta é uma descrição sobre o que aconteceu na notícia ${index + 1}.`,
    image: `https://via.placeholder.com/150?text=Imagem+${index + 1}`,
    categories: [
        'geral',
        'tecnologia',
        'esportes',
        'saúde',
        'política'
    ].slice(index % 5),
    comments: [], // Inicialmente sem comentários
}));

export const getNews = (): NewsArticle[] => {
    return newsArray;
};

export const getNewsById = (id: number): NewsArticle | null => {
    return newsArray.find(news => news.id === id) || null;
};
