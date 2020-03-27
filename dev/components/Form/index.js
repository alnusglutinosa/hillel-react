import React from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';
import classes from './Form.module.css';

class Form extends React.Component {
    state = {
        isCheck: this.props.item?.isCheck || false,
        text: this.props.item?.text || '',
    }

    handleChange = (e) => {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { isCheck, text } = this.state;

        if (!text) {
            return;
        }

        const newComment = {
            id: this.props.item?.id || Date.now(),
            isCheck,
            text,
        };

        this.props.submitForm(newComment);
        this.clearForm();
    }

    clearForm = () => {
        this.setState({
            isCheck: false,
            text: '',
        });
    }
    
	render() {
        const { isCheck, text } = this.state;

		return (
			<form onSubmit={this.handleSubmit} className={classes.form}>
                <div className={classes.checkbox}>   
                    <Checkbox 
                        name={"isCheck"}
                        isCheck={isCheck}
                        onChange={this.handleChange}
                    />
                </div>
 
                <div className="form-group">       
                    <label className={classes.label} htmlFor="text">Tasks text</label>
                
                    <textarea
                        className={classes.textarea}
                        name="text"
                        id="text"
                        onChange={this.handleChange}
                        value={text}
                    />

                </div>
                
                <Button text={'Post'} />
            </form>
		);
	}
}

export default Form;