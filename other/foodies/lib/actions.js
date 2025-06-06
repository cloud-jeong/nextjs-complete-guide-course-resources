"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
	return !text || text.trim() === "";
}

// useActionState() 훅을 사용하기 위해 form submit handler의 첫번째는 이전 상태 값 변수임.
export async function shareMeal(prevState, formData) {
	console.log(formData);
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.includes("@") ||
		!meal.image ||
		meal.image.size === 0
	) {
		return {
			message: 'Invalid input.',
		}
	}

	await saveMeal(meal);

	redirect("/meals");
}
