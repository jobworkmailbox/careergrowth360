import { Col, Layout, Menu, Row } from "antd";
import "./index.css";
const { Header } = Layout;

export const HeaderLayout = () => {
	return (
		<Header>
			<Row>
				<Col xs={12} sm={12} md={4}>
					<div className="logo" />
				</Col>
				<Col xs={12} sm={12} md={10}>
					<div className="logo" />
				</Col>
				<Col xs={12} sm={12} md={10}>
					<div className="logo" />
				</Col>
			</Row>

			{/* <Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={["2"]}
				items={new Array(15).fill(null).map((_, index) => {
					const key = index + 1;
					return {
						key,
						label: `nav ${key}`,
					};
				})}
			/> */}
		</Header>
	);
};
