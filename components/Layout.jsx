import Head from "next/head";
import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, description = "", children }) => {
	return (
		<>
			<Head>
				<title>{title} || Simple Blog on NextJs</title>
				<meta name="descriprion" content={description} />
			</Head>
			<Header />
			<section className="container">{children}</section>
			<Footer />
		</>
	);
};

export default Layout;
