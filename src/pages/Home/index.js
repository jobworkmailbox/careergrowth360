import { Col, Row } from "antd";
import React from "react";
import { CgBanner } from "../../components/cgBanner/index";
import Card from "../../components/HomeCard/index";
import { properties } from "../../Utils/constant/homeCard/data";
const Home = () => {
	return (
		<>
			<CgBanner />
			<div style={{ background: "white" }}>
				<Row>
					{properties.map((item) => {
						return (
							<Col lg={8} md={12} sm={12} xs={24}>
								<Card data={item} key={item.id} />
							</Col>
						);
					})}
				</Row>
			</div>
		</>
	);
};

export default Home;
