import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, id }) => {
	return (
		<div className="blogItem">
			<h5 className="blogItem__title">{title}</h5>
			<p className="blogItem__text">{description}</p>
			<Link href="/blog/[id]" as={`/blog/${id}`}>
				<a>Прочитать</a>
			</Link>
		</div>
	);
};

export default BlogItem;
