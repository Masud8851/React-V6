import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	let navigate = useNavigate();
	return (
		<div>
			This is <b>Error Page</b>
			<br />
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Go to Home Page
			</button>
		</div>
	);
};

export default ErrorPage;
