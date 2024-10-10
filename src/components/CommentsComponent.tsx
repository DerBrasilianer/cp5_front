// src/components/CommentsComponent.tsx

const CommentsComponent = ({ articleId }: { articleId: number }) => {
    // Aqui você pode implementar a lógica para carregar e gerenciar os comentários
    return (
        <div className="mt-4">
            <h2>Comentários</h2>
            {/* Renderização de comentários */}
            <p>Carregando comentários...</p>
        </div>
    );
};

export default CommentsComponent;
