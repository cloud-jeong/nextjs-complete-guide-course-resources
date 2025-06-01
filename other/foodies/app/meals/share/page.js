import Link from "next/link";

export default function SharePage() {
  return (
    <main>
      <p>This is share page</p>
      <Link href="/meals/community">Go to /meals/community page</Link>
    </main>
  );
}
