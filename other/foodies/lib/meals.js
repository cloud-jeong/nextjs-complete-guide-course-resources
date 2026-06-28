import postgres from "postgres";
import slugify from "slugify";
import fs from "node:fs";
import xss from "xss";

const sql = postgres(process.env.DATABASE_URL);

// 초기 loading을 시뮬레이션 하기 위해 delay를 줌
export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// throw new Error("Get meal data failed");
	return sql`SELECT * FROM meals`;
}

export async function getMeal(slug) {
	const rows = await sql`SELECT * FROM meals WHERE slug = ${slug}`;
	return rows[0];
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

	await sql`
		INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
		VALUES (
			${meal.slug},
			${meal.title},
			${meal.image},
			${meal.summary},
			${meal.instructions},
			${meal.creator},
			${meal.creator_email}
		)
	`;
}
