import style from "./Card.module.css";

type CardProps = {
	children: React.ReactNode;
};

const Card = (props: CardProps) => {
	return <div className={style.card}>{props.children}</div>;
};

export default Card;
