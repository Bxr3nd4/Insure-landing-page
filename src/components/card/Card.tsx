import styles from './Card.module.css'


interface Props {
    img: string,
    title: string ,
    text:string ,
  }

const Card = ({ img, title, text}:Props) => {
    return (
      <div className={styles.cardsContent}>
        <img src={img}  />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    );
  };
  

export default Card