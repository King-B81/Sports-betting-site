import React from "react";

export default function Plus({ ...props }) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M8 1V15M1 8H15" stroke="inherit" strokeLinecap="square" />
		</svg>
	);
}
