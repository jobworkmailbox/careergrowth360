import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import TimeLineComponent from "../pages/TimeLine";
import DetailsPage from "../pages/Details";

export const RouteComponent = () => {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/timeline" element={<TimeLineComponent />} />
					<Route path="/details" element={<DetailsPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</React.Fragment>
		</BrowserRouter>
	);
};
