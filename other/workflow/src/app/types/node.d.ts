type BaseNodeProps = {
	id: number;
	type: string;
	data: {
		title: string;
		description: string;
		onNodeClickCallback(id: number);
		onDeleteNodeCallback(id: number);
	};
	selected?: boolean;
	disabled?: boolean;
	onNodeClick: (type: string, data: any) => void;
	onCloseIconClick?: (event: any) => void;
	additionalClassName?: string;
};

export default BaseNodeProps;
