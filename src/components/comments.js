// components/Comments.js
import { useEffect, useState } from "react";

const Comments = ({ articleId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            // Simulando uma chamada à API para buscar comentários
            const response = await fetch(`/api/comments?articleId=${articleId}`);
            const data = await response.json();
            setComments(data);
        };

        fetchComments();
    }, [articleId]);

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Comentários</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className="mt-2">
                        <p>{comment.text}</p>
                        <span className="text-sm text-gray-500">— {comment.author}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
