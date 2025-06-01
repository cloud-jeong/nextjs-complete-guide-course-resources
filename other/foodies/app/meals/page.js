import { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

async function Meals() {
	const meals = await getMeals();

	return <MealsGrid meals={meals} />;
}

export default function MealPage() {
	// 아래와 같이 useEffect 및 fetch로 서버 접속하여 데이터를 fetch하는 것이 일반적임.
	// 다만 nextjs는 모든 컴포넌트들이 서버 사이드에서 실행됨으로 useEffect로 사용하지 않아도 됨.
	// useEffect(() => {
	//   fetch()
	// }, [])

	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created{" "}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Choose your favorite recipe and cook it yourself. It is easy and fun!
				</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share Your Favorite Recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
