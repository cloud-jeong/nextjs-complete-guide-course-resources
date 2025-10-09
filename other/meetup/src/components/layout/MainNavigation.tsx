"use client";

import Link from "next/link";
import style from "./MainNavigation.module.css";
import { usePathname } from "next/navigation";

const MainNavigation = () => {
	const path = usePathname();

	return (
		<header className={style.header}>
			<div className={style.logo}>Next Meetups</div>
			<nav>
				<ul>
					<li>
						<Link
							href="/"
							className={
								path === "/" ? `${style.link} ${style.active}` : style.link
							}
						>
							All Meetups
						</Link>
					</li>
					<li>
						<Link
							href="/new-meetup"
							className={
								path.startsWith("/new-meetup")
									? `${style.link} ${style.active}`
									: style.link
							}
						>
							Add New Meetup
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
