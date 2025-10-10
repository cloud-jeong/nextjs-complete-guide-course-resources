"use client";

import { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

type meetupDataType = {
	title: string;
	image: string;
	address: string;
	description: string;
};

type MeetupFormProps = {
	onAddMeetup: (data: meetupDataType) => void;
};

const NewMeetupFormPage = (props: MeetupFormProps) => {
	const titleInputRef = useRef<HTMLInputElement>(null);
	const addressInputRef = useRef<HTMLInputElement>(null);
	const imageInputRef = useRef<HTMLInputElement>(null);
	const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const enteredTitle =
			titleInputRef.current == null ? "" : titleInputRef.current.value;
		const enteredAddress =
			addressInputRef.current == null ? "" : addressInputRef.current.value;
		const enteredImage =
			imageInputRef.current == null ? "" : imageInputRef.current.value;
		const enteredDescription =
			descriptionInputRef.current == null
				? ""
				: descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		props.onAddMeetup(meetupData);
	};

	const [inputValue, setInputValue] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title" ref={titleInputRef}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Image</label>
					<input type="url" required id="image" ref={imageInputRef}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						required
						id="address"
						ref={addressInputRef}
					></input>
					<div className={classes.control}>
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							required
							rows={5}
							ref={descriptionInputRef}
						></textarea>
					</div>
					<div className={classes.actions}>
						<button>Add Meetup</button>
					</div>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupFormPage;
