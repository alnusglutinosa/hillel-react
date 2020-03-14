import React from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';
import classes from './Form.module.css';

class Form extends React.Component {
	render() {
		return (
			<form className={classes.form}>
                <div className={classes.checkbox}>   
                    <Checkbox />
                </div>
 
                <div className="form-group">       
                    <label className={classes.label} htmlFor="text">Tasks text</label>
                    <textarea className={classes.textarea} name="text" id="text" />
                </div>
                
                <Button />
            </form>
		);
	}
}

export default Form;