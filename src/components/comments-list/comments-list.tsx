import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/site-data/selectors';
import Comment from '../comment/comment';

function CommentsList(): JSX.Element {
  const comments = useAppSelector(getReviews);
  return (
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper">
          {
            comments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default CommentsList;
