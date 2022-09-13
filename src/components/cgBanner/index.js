import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import "./index.css";
import { cgglobalConstant } from "../../Utils/constant/appconstant";
import LottieComponent from "../cgLottie/LottieComponent";
import LottieFile from "../../assests/lottie-files";

export const CgBanner = () => {
	const constraintsRef = useRef(null);

	const changeLotties = [LottieFile.BookAnimation, LottieFile.coding, LottieFile.boyHeight, LottieFile.codingLang, LottieFile.frontEnd, LottieFile.cLang];
	const [currentLotties, setCurrentLotties] = useState(0);
	const changeLottie = () => {
		console.log(currentLotties, changeLotties.length);
		if (currentLotties > changeLotties.length - 1) {
			setCurrentLotties(0);
		} else {
			console.log(currentLotties);
			setCurrentLotties(currentLotties + 1);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			changeLottie();
		}, 5000); //eslint-disable-next-line
	}, [currentLotties]);

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<>
			<Row className="bannerBackground">
				<Col md={12} sm={24} xs={24}>
					<div style={{ padding: "7%" }}>
						<h1 style={{ fontSize: "35px", color: "dodgerblue", textAlign: "center", fontFamily: "cursive" }}>
							{cgglobalConstant.Banner_salutation_1}&nbsp;
							<motion.div className="container" ref={constraintsRef} variants={container} initial="hidden" animate="visible">
								<motion.div className="item" drag dragConstraints={constraintsRef}>
									<span style={{ color: "#f6108e", cursor: "pointer" }}>{cgglobalConstant.title}</span>
								</motion.div>
							</motion.div>
						</h1>
						<br />
						<h1 style={{ textAlign: "center" }}>START TO SUCCESS</h1>
						<br />
						<h2 style={{ textAlign: "center" }}>
							Access To <span style={{ color: "red", fontWeight: "600", fontFamily: "cursive" }}>New Courses</span> from{" "}
							<span style={{ color: "red", fontWeight: "600", fontFamily: "cursive" }}> Our Instructors</span>
						</h2>
					</div>
				</Col>
				<Col md={10} sm={24} xs={24}>
					<div>
						<LottieComponent width={"100%"} height={"60%"} file={changeLotties[currentLotties]} />
					</div>
				</Col>
			</Row>
		</>
	);
};
