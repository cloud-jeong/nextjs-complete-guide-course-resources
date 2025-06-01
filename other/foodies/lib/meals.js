import sql from "better-sqlite3";

const db = sql("meals.db");

// 초기 loading을 시뮬레이션 하기 위해 delay를 줌
export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// throw new Error("Get meal data failed");
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug); // dynamic injection
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
