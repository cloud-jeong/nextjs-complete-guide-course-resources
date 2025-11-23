const BlogDetailPage = async ({
	params,
}: {
	params: {
		Id: string;
	};
}) => {
	const { Id } = await params;

	return <div>BlogDetailPage {Id}</div>;
};

export default BlogDetailPage;
