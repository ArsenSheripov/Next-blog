import Head from "next/head";
import Link from "next/link";
import React, { Children } from "react";

const Layout = ({ title, description = "", children }) => {
	return (
		<>
			<Head>
				<title>{title} || Simple Blog on NextJs</title>
				<meta name="descriprion" content={description} />
			</Head>
			<header>
				<span>LOGO</span>
				<Link href="/">
					<a>Glavnaya</a>
				</Link>
			</header>
			<div className="container">{children}</div>
			<footer>2022 NextJs Blog</footer>
		</>
	);
};

export default Layout;
