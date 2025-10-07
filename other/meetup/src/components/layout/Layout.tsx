import MainNavigation from "./MainNavigation";
import style from "./Layout.module.css";

type Props = {
	children?: React.ReactNode;
};

const Layout = (props: Props) => {
	return (
		<div>
			<MainNavigation />
			<main className={style.main}>{props.children}</main>
		</div>
	);
};

export default Layout;
