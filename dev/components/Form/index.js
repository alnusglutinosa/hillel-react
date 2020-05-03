import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';
import classes from './Form.module.css';
import picture from './bg2.jpg';
import { updateTask, addTask } from '../../actions';


const Form = ({ item, submitForm }) => {

    const [isCheck, changeCheck] = useState(item?.isCheck || false);
    const [text, changeText] = useState(item?.text || '');

    const handleChange = (e) => {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        if (input.name === 'text') {
            changeText(value);
        } else {
            changeCheck(value);
        }
    }

    const clearForm = () => {
        changeCheck(false);
        changeText('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            return;
        }

        const newTask = {
            id: item?.id || Date.now(),
            isCheck,
            text,
        };

        if (item) {
            updateTask(newTask);
        } else {
            addTask(newTask);
        }

        clearForm();
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            
            <img className={classes.bgImg} src={picture} alt="Scarlett" />

            <div className={classes.checkbox}>   
                <Checkbox 
                    name={"isCheck"}
                    isCheck={isCheck}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">       
                <label className={classes.label} htmlFor="text">Tasks text</label>
            
                <textarea
                    className={classes.textarea}
                    name="text"
                    id="text"
                    onChange={handleChange}
                    value={text}
                />

            </div>
            
            <Button text={'Post'} />
        </form>
    );
}

export default Form;