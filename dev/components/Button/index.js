import React from 'react';
import classes from './Button.module.css';


const Button = ({ text, onClick }) => (
	<button onClick={onClick} className={classes.btn}>
		<span className={classes.text}>{text}</span>
	</button>
)

export default Button;