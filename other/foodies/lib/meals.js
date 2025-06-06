import sql from "better-sqlite3";
import slugify from "slugify";
import fs from "node:fs";
import xss from "xss";

const db = sql("meals.db");

// 초기 loading을 시뮬레이션 하기 위해 delay를 줌
export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// throw new Error("Get meal data failed");
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // dynamic injection
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split(".").pop();
	const fileName = `${meal.slug}.${extension}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("Saving image failed!");
		}
	});

	// 이미지 접근시 /public 폴더는 url 경로의 /에 해당함으로 뺌.
	meal.image = `/images/${fileName}`;

	db.prepare(`
		INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
		VALUES (         
			@slug,
			@title,
			@image,
			@summary,
			@instructions,
			@creator,
			@creator_email)
	`).run(meal);
}

// better-sqlite3에서는 promise 를 사용할 필요가 없음.
// export function getMeals() {
//   return db.prepare('SELECT * FROM meals').all()
// }

// const db = sql('meals.db');

// export async function getMeals() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return db.prepare('SELECT * FROM meals').all();
// }
