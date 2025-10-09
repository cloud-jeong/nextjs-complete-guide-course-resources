type MeetupDetailParam = {
	params: {
		meetupId: string;
	};
};

const MeetupDetailPage = ({ params }: MeetupDetailParam) => {
	return <div>MeetupDetailPage: {params.meetupId}</div>;
};

export default MeetupDetailPage;
