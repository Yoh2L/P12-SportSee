import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* 					<Route path="/user/:id" element={<Dashboard />} />
					<Route path="*" element={<Error />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
