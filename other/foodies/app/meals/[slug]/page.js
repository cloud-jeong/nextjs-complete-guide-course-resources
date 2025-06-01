import Link from "next/link";

export default function MealPage() {
  return (
    <main>
      <p>This is meal page</p>
      <Link href="/meals/share">Go to /meals/share page</Link>
    </main>
  );
}
