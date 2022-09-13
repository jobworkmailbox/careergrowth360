import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Avatar, Card } from "antd";
import "./index.css";
const { Meta } = Card;

const DetailsPage = () => {
	return (
		<div style={{ padding: "2%", fontFamily: "cursive" }} className="BackgroundPaper">
			<section>
				<Row>
					<Col xs={22} sm={22} md={22}>
						<h1>Python Beginner Bootcamp</h1>
					</Col>
				</Row>
			</section>
			<section>
				<Row>
					<Col xs={22} sm={22} md={15}>
						<h3 className="fontH3">About This Course</h3>
						<br />
						<p className="fontp">
							Analyze Python like a professional start from the fundamentals and cross all the way to developing your own programs from today,
							Lets Get Started…
						</p>
						<br />
						<br />

						<Card
							title="Curriculum"
							style={{
								width: "100%",
							}}
						>
							<Row>
								<Col xs={22} sm={22} md={12}>
									You will examine Python from zero to advanced.
								</Col>
								<Col xs={22} sm={22} md={12}>
									You will construct actual-international programs with Python.
								</Col>
								<Col xs={22} sm={22} md={12}>
									You'll learn how to develop ours logics.
								</Col>
								<Col xs={22} sm={22} md={12}>
									You'll analyze other programming gear and techniques
								</Col>
							</Row>
						</Card>
						<br />
						<br />
						<br />
						<h3>Material Includes</h3>
						<br />
						<p></p>
						<p></p>
						<h3>Requirements</h3>
						<br />
						<p>There are no software or materials needed</p>
						<h3>Prerequisite</h3>
						<p>Have some examples in mind of areas you'd like to negotiate over</p>
						<Card
							title="Curriculum"
							style={{
								width: "100%",
							}}
						>
							<p>Card content</p>
							<p>Card content</p>
							<p>Card content</p>
						</Card>
					</Col>
					<Col xs={22} sm={22} md={9} style={{ display: "flex", justifyContent: "center" }}>
						<div style={{ padding: "4%" }} className="glassBackground">
							<Card
								style={{
									width: 300,
								}}
								className="stickyCourse"
								cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
								actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
							>
								<Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} title="Card title" description="This is the description" />
							</Card>
						</div>
					</Col>
				</Row>
			</section>
		</div>
	);
};

export default DetailsPage;
