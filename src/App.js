import { Col, Layout, Row } from "antd";
import React from "react";
import "./App.css";
import { HeaderLayout } from "./components/layout/Header";
import { FooterLayout } from "./components/layout/Footer";
import { RouteComponent } from "./Route/index";
const { Content } = Layout;

const App = () => (
	<Layout className="layout">
		<HeaderLayout />
		<Content>
			<RouteComponent />
		</Content>
		<FooterLayout />
	</Layout>
);

export default App;
