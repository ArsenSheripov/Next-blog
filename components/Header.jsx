import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container container">
				<Link href="/">
					<a>Glavnaya</a>
				</Link>
				<img src="/Blog-Post_thumbnail.png" alt="logo" width={140} />
			</div>
		</header>
	);
};

export default Header;
