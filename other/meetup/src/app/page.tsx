"use client";

import MeetupLists from "@/components/meetups/MeetupList";
import { Fragment, useEffect, useState } from "react";

export type MeetupItemProps = {
	id: string;
	title: string;
	image: string;
	address: string;
	description: string;
};

const dummy_meetup = [
	{
		id: "1",
		title: "Weekly Meeting 42th on 2025",
		address: "198, Haan-ro, Gwangmyeong-si, Gyeonggi-do, Republic of Korea",
		image:
			"https://images.unsplash.com/photo-1752643720270-68796fe5f020?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "A first meetup",
	},
	{
		id: "2",
		title: "A Second Meetup",
		address: "Some address 5, 12345 Some City",
		image:
			"https://images.unsplash.com/photo-1759239355404-63313f92cfc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "A Seconde Meetup",
	},
];

const HomePage = () => {
	const [loadedMeetups, SetLoadedMeetups] = useState<MeetupItemProps[]>([]);

	useEffect(() => {
		SetLoadedMeetups(dummy_meetup);
	}, []);

	return (
		<Fragment>
			<MeetupLists meetups={loadedMeetups}></MeetupLists>
		</Fragment>
	);
};

export default HomePage;
