import Link from "next/link";
import Image from "next/image";
import classes from './page.module.css'


import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
	return (
		<>
			<h1>News Page</h1>
			<ul className="news-list">
				{DUMMY_NEWS.map((newsItem) => (
					<li key={newsItem.id} className={classes.image}>
						<Link href={`/news/${newsItem.slug}`}>
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
								fill
              />
							<span>{newsItem.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
