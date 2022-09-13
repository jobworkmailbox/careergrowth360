import React from "react";
import Lottie from "react-lottie";
import LottieFile from "../../assests/lottie-files/index";

const defaultOptions = {
	loop: true,
	autoplay: true,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const LottieComponent = ({ width = "100%", height = "100%", loop = true, file = LottieFile.BookAnimation }) => {
	return <Lottie isClickToPauseDisabled={true} options={{ ...defaultOptions, animationData: file, loop }} width={width} height={height} />;
};

export default LottieComponent;
