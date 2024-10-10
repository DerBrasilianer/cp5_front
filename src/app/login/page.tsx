import Link from "next/link";

const NewsPage = () => {
  return (
    <div className='p-3 bg-white rounded shadow mx-auto w-full' style={{ maxWidth: '800px' }}>
      <h1 className="text-center mb-4">Portal de Notícias</h1>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          <Link className="text-blue-500 hover:underline" href="/news/article-1">Notícia 1</Link>
        </li>
        <li className="mb-2">
          <Link className="text-blue-500 hover:underline" href="/news/article-2">Notícia 2</Link>
        </li>
        <li className="mb-2">
          <Link className="text-blue-500 hover:underline" href="/news/article-3">Notícia 3</Link>
        </li>
      </ul>
      <footer className="text-center mt-4">
        <Link className="text-green-500 underline" href="/news/create">Adicionar Notícia</Link>
      </footer>
    </div>
  );
}

export default NewsPage;
