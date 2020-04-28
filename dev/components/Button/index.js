import React from 'react';
import classes from './Button.module.css';


const Button = ({ text, children, onClick }) => (
	<button onClick={onClick} className={classes.btn}>
		{children}
		<span className={classes.text}>{text}</span>
	</button>
)

export default Button;