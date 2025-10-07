import Link from "next/link";
import Image from "next/image";
import classes from "./page.module.css";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
	return (
		<>
			<h1>News Page</h1>
			<ul>
				{DUMMY_NEWS.map((newsItem) => (
					<li key={newsItem.id}>
						<span>{newsItem.title}</span>
					</li>
				))}
			</ul>
		</>
	);
}
