import React from 'react';
import Checkbox from '../Checkbox';
import classes from './Form.module.css';

class Form extends React.Component {
	render() {
		return (
			<form className={classes.form}>
                <div className="form__checkbox">   
                    <Checkbox />
                </div>
 
                <div className="form-group">       
                    <label className={classes.label} htmlFor="text">Tasks text</label>
                    <textarea className={classes.textarea} name="text" id="text" />
                </div>
                
                <button className="button">post</button>
            </form>
		);
	}
}

export default Form;