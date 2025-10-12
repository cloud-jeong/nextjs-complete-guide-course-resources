import MeetupDetail from "@/components/meetups/MeetupDetail";

type MeetupDetailParam = {
	params: {
		meetupId: string;
	};
};

const MeetupDetailPage = ({ params }: MeetupDetailParam) => {
	return (
		<>
			<MeetupDetail
				id="1"
				title="First Meetup"
				address="Some street 5, Some City"
				image="https://images.unsplash.com/photo-1752643720270-68796fe5f020?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				description="This is a first meetup"
			/>
		</>
	);
};

export default MeetupDetailPage;
