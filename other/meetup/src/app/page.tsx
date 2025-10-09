import MeetupLists from "@/components/meetups/MeetupList";
import { Fragment } from "react";

const HomePage = () => {
	const dummy_meetup = [
		{
			title: "A First Meetup",
			address: "Some address 5, 12345 Some City",
			image:
				"https://images.unsplash.com/photo-1752643720270-68796fe5f020?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "A Second Meetup",
			address: "Some address 5, 12345 Some City",
			image:
				"https://images.unsplash.com/photo-1759239355404-63313f92cfc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	return (
		<Fragment>
			<MeetupLists meetups={dummy_meetup}></MeetupLists>
		</Fragment>
	);
};

export default HomePage;
