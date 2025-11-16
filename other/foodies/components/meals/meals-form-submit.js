"use client";

import { useFormStatus } from "react-dom";

export default function MealFormSubmit() {

	const { pending, data, method, action} = useFormStatus()

	return (
		<button disabled={pending}>
			{pending ? "Submitting ..." : "Share Meal"}
		</button>
	);
}
