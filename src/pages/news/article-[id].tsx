// src/pages/news/article-[id].tsx
import { getNewsById } from '@/app/services/newsService';
import CommentsComponent from '@/components/CommentsComponent';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // Importando useParams em vez de useRouter
import { useEffect, useState } from 'react';
import { NewsArticle } from '../../types/newsTypes';

const ArticlePage = () => {
    const { id } = useParams(); // Obtendo o id da URL
    const [news, setNews] = useState<NewsArticle | null>(null);

    useEffect(() => {
        if (id) {
            const article = getNewsById(parseInt(id as string));
            if (article) {
                setNews(article);
            } else {
                // Redireciona para a página 404 se a notícia não existir
                window.location.href = '/404'; // Redirecionando diretamente para a página 404
            }
        }
    }, [id]);

    if (!news) {
        return <div>Carregando...</div>; // Exibindo um carregando até que a notícia seja encontrada
    }

    return (
        <div className='p-3 bg-white rounded shadow mx-auto w-full' style={{ maxWidth: '800px' }}>
            <h1 className="text-center mb-4">{news.title}</h1>
            <p>{news.content}</p>
            <img src={news.image} alt={news.title} className="w-full h-auto mb-4" />
            <Link className="text-blue-500 hover:underline" href="/news">
                Voltar para a Home
            </Link>

            <CommentsComponent articleId={news.id} />
        </div>
    );
}

export default ArticlePage;
