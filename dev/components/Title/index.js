import React from 'react';
import classes from './Title.module.css';

class Title extends React.Component {
	render() {
		return (
			<h1 className={classes.title}>To do list</h1>
		)
	}
}

export default Title;