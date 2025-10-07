export default function NewPostPage() {
	function createPost({ formData }) {
		const title = formData.get("title");
		const image = formData.get("image");
		const content = formData.get("content");

		console.log(title, image, content);
	}

	return (
		<>
			<h1>Create a new post</h1>
			<form action={createPost}>
				<p className="form-control">
					<label htmlFor="text">Title</label>
					<input type="text" id="text" name="text" />
				</p>
				<p className="form-control">
					<label htmlFor="image">Image URL</label>
					<input
						type="file"
						accept="image/png, image/jpeg"
						id="image"
						name="image"
					/>
				</p>
				<p className="form-control">
					<label htmlFor="content">Content</label>
					<textarea id="content" name="content" rows="5" />
				</p>
				<p className="form-actions">
					<button type="reset">Reset</button>
					<button>Create Post</button>
				</p>
			</form>
		</>
	);
}
