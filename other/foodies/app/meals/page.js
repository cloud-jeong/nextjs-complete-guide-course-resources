import Link from "next/link";

export default function MealPage() {
  return (
    <main>
      <p>This is meal page</p>
      <Link href="/meals/community">Go to /meals/community page</Link>
    </main>
  );
}
