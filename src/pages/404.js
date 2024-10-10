import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl mb-4">404 - Página Não Encontrada</h1>
            <Link href="/news">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Voltar para o Portal de Notícias
                </button>
            </Link>
        </div>
    );
}

export default Custom404;


