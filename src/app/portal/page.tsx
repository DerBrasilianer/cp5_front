// src/pages/news/index.tsx
"use client"; // Adicionado para especificar que este é um Client Component

import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsArticle } from "../../types/newsTypes";
import { getNews } from "../services/newsService";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    setNews(getNews());
  }, []);

  const filteredNews = news.filter((article) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(lowerSearchTerm) ||
      article.content.toLowerCase().includes(lowerSearchTerm) ||
      article.categories.some(category => category.toLowerCase().includes(lowerSearchTerm))
    );
  });

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const handleNextPage = () => {
    if (indexOfLastNews < filteredNews.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='p-3 bg-white rounded shadow mx-auto w-full' style={{ maxWidth: '800px' }}>
      <h1 className="text-center mb-4">Portal de Notícias</h1>

      <input
        type="text"
        placeholder="Filtrar notícias..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      <ul className="list-disc pl-5">
        {currentNews.length > 0 ? (
          currentNews.map((article) => (
            <li key={article.id} className="mb-2">
              <Link className="text-blue-500 hover:underline" href={`/news/article-${article.id}`}>
                {article.title.length > 50 ? `${article.title.substring(0, 50)}...` : article.title}
              </Link>
            </li>
          ))
        ) : (
          <li className="text-red-500">Nenhum artigo encontrado</li>
        )}
      </ul>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastNews >= filteredNews.length}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          Próximo
        </button>
      </div>

      {indexOfLastNews >= filteredNews.length && currentNews.length > 0 && (
        <div className="mt-2 text-gray-500">Não há mais itens.</div>
      )}

      <footer className="text-center mt-4">
        <Link className="text-green-500 underline" href="/news/create">Adicionar Notícia</Link>
      </footer>
    </div>
  );
}

export default NewsPage;
