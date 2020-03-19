import React from 'react';
import classes from './Button.module.css';

class Button extends React.Component {
	render() {
		const { text } = this.props;

		return (
			<button className={classes.btn}>
				<span className={classes.text}>{text}</span>
			</button>
		)
	}
}

export default Button;