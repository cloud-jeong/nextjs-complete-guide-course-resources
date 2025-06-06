'use client'

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealFormSubmit from "@/components/meals/meals-form-submit";
import { useActionState } from "react";

export default function ShareMealPage() {
	// 'use server'를 위해 별도 파일로 분리: /lib/actions.js
	// async function shareMeal(formData) {
	// 	"use server";

	// 	const meal = {
	// 		title: formData.get("title"),
	// 		summary: formData.get("summary"),
	// 		instructions: formData.get("instructions"),
	// 		image: formData.get("image"),
	// 		creator: formData.get("name"),
	// 		creator_email: formData.get("email"),
	// 	};
	// 	console.log(meal);
	// }
	// const [state, formAction] = useFormState(shareMeal, { message: null });

	// form submit시 필수필드 등의 check하여 오류 메시지 출력. 입력한 데이터를 유지
	const [state, formAction] = useActionState(shareMeal, { message: null });

	return (
		<>
			<header className={classes.header}>
				<h1>
					Share your <span className={classes.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form className={classes.form} action={formAction}>
					<div className={classes.row}>
						<p>
							<label htmlFor="name">Your name</label>
							<input type="text" id="name" name="name" required />
						</p>
						<p>
							<label htmlFor="email">Your email</label>
							<input type="email" id="email" name="email" required />
						</p>
					</div>
					<p>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" required />
					</p>
					<p>
						<label htmlFor="summary">Short Summary</label>
						<input type="text" id="summary" name="summary" required />
					</p>
					<p>
						<label htmlFor="instructions">Instructions</label>
						<textarea
							id="instructions"
							name="instructions"
							rows="10"
							required
						></textarea>
					</p>
					<ImagePicker label="Your image" name="image" />
					{state.message && <p>{state.message}</p>}
					<p className={classes.actions}>
						{/* useFormStatus() webhook을 이용하여 submit 중일때를 판단하여 버튼명을 변경함 */}
						<MealFormSubmit />
					</p>
				</form>
			</main>
		</>
	);
}
