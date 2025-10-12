import style from "./MeetupList.module.css";
import MeetupItem, { MeetupItemProps } from "./MeetupItem";

type MeetupListProps = {
	meetups: MeetupItemProps[];
};

const MeetupLists = (props: MeetupListProps) => {
	return (
		<ul className={style.list}>
			{props.meetups.map((meetup) => (
				<MeetupItem
					key={meetup.title}
					id={meetup.id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
				/>
			))}
		</ul>
	);
};

export default MeetupLists;
