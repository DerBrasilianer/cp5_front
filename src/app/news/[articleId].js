import Link from "next/link";
import { useRouter } from "next/router";

// Supondo que você tenha uma função que busca as notícias com base no ID
import Comments from "../../components/Comments"; // Componente de comentários
import { getArticleById } from "../../lib/api"; // Ajuste conforme necessário

const ArticlePage = ({ article }) => {
    const router = useRouter();

    // Redireciona para a página 404 se o artigo não existir
    if (!article) {
        return null; // O Next.js irá automaticamente tratar isso como 404
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{article.title}</h1>
            <p className="mt-2 text-gray-600">{article.content}</p>

            <Comments articleId={article.id} />

            <Link href="/news" className="text-blue-500 hover:underline mt-4 inline-block">
                Voltar para a Home
            </Link>
        </div>
    );
};

// Função de obtenção de dados para SSR
export async function getServerSideProps(context) {
    const { articleId } = context.params;
    const article = await getArticleById(articleId); // Buscar o artigo usando a função de API

    // Verifica se o artigo existe
    if (!article) {
        return {
            notFound: true, // Isso renderiza a página 404
        };
    }

    return {
        props: {
            article, // Envia os dados do artigo para o componente
        },
    };
}

export default ArticlePage;
