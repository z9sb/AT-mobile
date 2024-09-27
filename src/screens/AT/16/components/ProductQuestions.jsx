import React from 'react';
import styles from './ProductQuestions.module.css';

export default class ProductQuestions extends React.Component {
  render() {
    const { questions } = this.props;
    return (
      <section className={styles.questions}>
        <h3>Perguntas</h3>
        {questions.map((question, index) => (
          <div key={index} className={styles.question}>
            <p><strong>{question.user}</strong> ({question.date})</p>
            <p>Question: {question.query}</p>
            <p>Answer: {question.answer}</p>
          </div>
        ))}
      </section>
    );
  }
}
