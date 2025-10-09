import Image from "next/image";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export type MeetupItemProps = {
	title: string;
	image: string;
	address: string;
};

const MeetupItem = (props: MeetupItemProps) => {
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title}></img>
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address style={{ color: "red" }}>{props.address}</address>
				</div>
				<div className={classes.actions}>
					<button>Show Details</button>
				</div>
			</Card>
		</li>
	);
};

export default MeetupItem;
