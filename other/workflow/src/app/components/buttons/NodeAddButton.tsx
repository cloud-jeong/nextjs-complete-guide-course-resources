import AddButton from "./AddButton";
import styles from "./NodeAddButton.module.scss";

const NodeAddButton = (props: { onClick: () => {} }) => {
	return (
		<div className={styles.NodeAddButton}>
			<AddButton {...props} />
		</div>
	);
};
