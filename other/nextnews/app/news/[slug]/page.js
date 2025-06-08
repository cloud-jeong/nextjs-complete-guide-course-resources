import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

import classes from "./page.module.css";

export default async function NewsDetailPage({ params }) {
	const newsSlug = await params.slug;
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<article className="news-article">
			<header>
				<div className={classes.image}>
					<h1>{newsItem.title}</h1>
					<time dateTime={newsItem.date}>{newsItem.date}</time>

					<Image
						src={`/images/news/${newsItem.image}`}
						alt={newsItem.title}
						fill
					/>
				</div>
			</header>
			<p>{newsItem.content}</p>
		</article>
	);
}
