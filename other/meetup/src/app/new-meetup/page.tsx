"use client";
import NewMeetupFormPage from "@/components/meetups/NewMeetupForm";

type meetupDataType = {
	title: string;
	image: string;
	address: string;
	description: string;
};

const NewMeetup = () => {
	const addMeetup = (data: meetupDataType) => {
		console.log(data);
	};

	return <NewMeetupFormPage onAddMeetup={addMeetup} />;
};

export default NewMeetup;
