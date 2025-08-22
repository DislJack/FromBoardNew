import styles from './comment-card.module.css';

type TCommentCard = {
  author: string;
  comment: string;
}

function CommentCard({author, comment}: TCommentCard) {
  return (
    <article className={styles.container} data-testid='comment-card'>
      <h3 className={styles.heading}>{author}</h3>
      <p className={styles.text}>{comment}</p>
    </article>
  )
}

export default CommentCard;