import { ClockCircleOutlined } from "@ant-design/icons";
import { Col, Row, Timeline } from "antd";
import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const TimeLineComponent = () => {
	return (
		<div className="BackgroundPaper">
			<Timeline mode="alternate">
				<Timeline.Item color={"red"}>
					<motion.div
						className="containerTimeLine"
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<Row>
							<div>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</div>
							<Col xs={22} sm={22} md={24} className="elementCenter">
								<motion.div
									className="box"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									Click
								</motion.div>
							</Col>
						</Row>
					</motion.div>
				</Timeline.Item>
				<Timeline.Item color="green">
					<motion.div
						className="containerTimeLine"
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<Row>
							<div>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</div>
							<Col xs={22} sm={22} md={12} className="elementCenter">
								<motion.div
									className="box"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									Click
								</motion.div>
							</Col>
							<Col xs={22} sm={22} md={12} className="elementCenter">
								<motion.div
									className="box"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									Click
								</motion.div>
							</Col>
						</Row>
					</motion.div>
				</Timeline.Item>
				<Timeline.Item
					dot={
						<ClockCircleOutlined
							style={{
								fontSize: "16px",
							}}
						/>
					}
				>
					<motion.div
						className="containerTimeLine"
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<Row>
							<div>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</div>
							<Col xs={22} sm={22} md={24} className="elementCenter">
								<motion.div
									className="box"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									Click
								</motion.div>
							</Col>
						</Row>
					</motion.div>
				</Timeline.Item>
				<Timeline.Item color="red">
					<motion.div
						className="containerTimeLine"
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<Row>
							<div>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</div>
							<Col xs={22} sm={22} md={24} className="elementCenter">
								<motion.div
									className="box"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									Click
								</motion.div>
							</Col>
						</Row>
					</motion.div>
				</Timeline.Item>
				<Timeline.Item>
					<motion.div
						className="containerTimeLine"
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<Row>
							<div>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</div>
							<Col xs={22} sm={22} md={24} className="elementCenter">
								<motion.div
									className="box"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									Click
								</motion.div>
							</Col>
						</Row>
					</motion.div>
				</Timeline.Item>
				<Timeline.Item
					dot={
						<ClockCircleOutlined
							style={{
								fontSize: "16px",
							}}
						/>
					}
				>
					<motion.div
						className="containerTimeLine"
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<Row>
							<div>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</div>
							<Col xs={22} sm={22} md={24} className="elementCenter">
								<motion.div
									className="box"
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									Click
								</motion.div>
							</Col>
						</Row>
					</motion.div>
				</Timeline.Item>
			</Timeline>
		</div>
	);
};

export default TimeLineComponent;
