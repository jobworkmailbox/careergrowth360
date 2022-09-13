import { Layout } from "antd";
import "./index.css";
const { Footer } = Layout;

export const FooterLayout = () => {
	return (
		<Footer
			style={{
				textAlign: "center",
			}}
		>
			Ant Design ©2018 Created by Ant UED
		</Footer>
	);
};
