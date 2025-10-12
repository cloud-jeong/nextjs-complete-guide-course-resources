import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

export type MeetupItemProps = {
	id: string;
	title: string;
	image: string;
	address: string;
	description: string;
};

const MeetupDetail = (props: MeetupItemProps) => {
	return (
		<section className={classes.detail}>
			<img src={props.image} alt={props.title}></img>
			<h1>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</section>
	);
};

export default MeetupDetail;
