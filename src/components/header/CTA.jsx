import React from "react";
import CV from "../../images/cv.pdf";

import styles from "./Header.module.scss";
const CTA = () => {
	return (
		<div className={styles.cta}>
			{/* <a href={CV} download className='btn'>Download CV</a> */}
			<a href="#contact" className="btn btn-primary">
				Let's talk
			</a>
		</div>
	);
};

export default CTA;
