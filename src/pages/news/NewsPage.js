// Continuando na página NewsPage
<ul className="list-disc pl-5">
    {currentNews.length > 0 ? (
        currentNews.map((news) => (
            <li key={news.id} className="mb-2">
                <Link className="text-blue-500 hover:underline" href={`/news/article-${news.id}`}>
                    {news.title}
                </Link>
            </li>
        ))
    ) : (
        <li className="text-red-500">Nenhum artigo encontrado</li>
    )}
</ul>
