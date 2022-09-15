import React from "react";
import Layout from "../../components/Layout";

const Post = ({ post }) => {
	if (!post) {
		return <h1>Поста нету</h1>;
	}
	return (
		<Layout title={post.title}>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</Layout>
	);
};

export const getServerSideProps = async ({ query }) => {
	const data = await fetch(`${process.env.API_URL}/posts/${query.id}`);
	const post = await data.json();

	return {
		props: { post },
	};
};

export default Post;
