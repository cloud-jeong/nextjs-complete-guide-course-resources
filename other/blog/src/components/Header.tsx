import Link from "next/link";

const HeaderPage = () => {
	return (
		<header className="page__header">
			<h1 className="page__logo">
				<Link href="/" className="page__logo-link">
					UTCloud
				</Link>
			</h1>
			<nav className="page__navigation">
				<ul className="page__nav-list">
					<li className="page__nav-item">
						<Link href="/write" className="page__nav-link">
							글쓰기
						</Link>
					</li>
					<li className="page__nav-item">
						<Link href="/auth" className="page__nav-link">
							인증
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default HeaderPage;
