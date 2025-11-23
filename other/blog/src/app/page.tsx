import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div>
			<p>Home page</p>
			<section className={styles.image}>
				{/* <section
				style={{ position: "relative", width: "30rem", height: "20rem" }}
				> */}
				<Image src="/images/dummy-image-1.png" alt="dummy image 1" fill></Image>
			</section>
		</div>
	);
}
