import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";

export default async function MealDetailsPage({ params }) {
	// https://stackoverflow.com/questions/79143162/route-locale-used-params-locale-params-should-be-awaited-before-using
	const { mealSlug } = await params;

	const meal = getMeal(mealSlug);

	if (!meal) {
		// Nextjs에서 기본적으로 제공. 제일 가까운 not-found page를 찾음.
		notFound();
	}

	meal.instructions = meal.instructions.replace(/\n/g, "<br />");

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} alt={meal.title} fill />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
}
