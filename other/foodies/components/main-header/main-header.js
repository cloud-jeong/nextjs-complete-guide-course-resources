import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
	return (
		<>
      <MainHeaderBackground />
			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					{/* Image element를 통해 이미지 최적화 할 수 있음 */}
					<Image src={logoImg} alt="A plate with food on it" priority />
					{/* <img src={logoImg.src} alt="A plate with food on it"></img> */}
					NextLevel Food
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<Link href="/meals">Browse Meals</Link>
						</li>
						<li>
							<Link href="/community">Foodies Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
