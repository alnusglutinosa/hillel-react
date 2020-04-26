import React, { Component, createRef } from 'react';
import classes from './Checkbox.module.css';


const Checkbox = ({ name, isCheck, readonly, onChange }) => {	
	const handleChecked = (e, readonly) => {
		if(readonly) {
			return;
		}
		
		onChange(e);
	}

	return (
		<label className={classes.container}>Is checked
			<input 
				name={name}
				type="checkbox"
				checked={isCheck}
				onChange={ (e)=>handleChecked(e, readonly) }
				className={classes.checkboxInput}
			/>
			<span className={classes.checkmark}></span>
		</label>
	)
}

Checkbox.defaultProps = {
	readonly: false
};

export default Checkbox;