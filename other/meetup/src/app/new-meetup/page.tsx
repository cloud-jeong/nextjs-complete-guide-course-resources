"use client";
import NewMeetupFormPage from "@/components/meetups/NewMeetupForm";

type meetupDataType = {
	title: string;
	image: string;
	address: string;
	description: string;
};

const NewMeetup = () => {
	const addMeetupHandler = async (data: meetupDataType) => {
		console.log(data);
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"content-type": "application/json",
			},
		});

		console.log(response.json());
	};

	return <NewMeetupFormPage onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
