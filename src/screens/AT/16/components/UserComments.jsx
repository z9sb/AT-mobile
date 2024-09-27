import React from 'react';
import styles from './UserComments.module.css';

export default class UserComments extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <section className={styles.comments}>
        <h3>Comentarios dos usuários</h3>
        {comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <p><strong>{comment.user}</strong> ({comment.date})</p>
            <p>Rating: {comment.rating}/5</p>
            <p>{comment.message}</p>
          </div>
        ))}
      </section>
    );
  }
}


