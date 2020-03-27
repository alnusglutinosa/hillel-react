import React from 'react';
import classes from './Button.module.css';

class Button extends React.PureComponent {
	render() {
		const { text, onClick } = this.props;

		return (
			<button onClick={onClick} className={classes.btn}>
				<span className={classes.text}>{text}</span>
			</button>
		)
	}
}

export default Button;