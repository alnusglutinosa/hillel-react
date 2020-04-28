import React, { useState } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import classes from './Task.module.css';
import Icon from '../Icon';


const Task = ({ isCheck, text, remove, id, itemUpdateTask}) => {
    const [isShowForm, changeIsShowForm] = useState(false);

    const handleChange = () => {
        changeIsShowForm(!isShowForm);
    }
    
    const updateComment = (comm) => {
        itemUpdateTask(comm);
        handleChange();
    }

    return (
        <>
            {
                isShowForm ? (
                    <Form
                        item={{ isCheck, text, id }}
                        submitForm={updateComment}
                    />
                ) : (
                    <li className={classes.item}>
                        <header className={classes.itemWrap}>
                            <div className={classes.checkbox}>
                                <Checkbox isCheck={isCheck} readonly={true}/>
                            </div>

                            <p className={`${classes.text} ${isCheck ? classes.textCheck : ''} `}>
                                {text}
                            </p>
                            
                            <div className={classes.btnWrap}>

                            <Button 
                                onClick={handleChange}
                                text={'Edit'}
                            >
                                <Icon name="edit" />
                            </Button>

                            <Button 
                                onClick={() => remove(id)}
                                text={'Delete'}
                            >
                                <Icon name="delete" />
                            </Button>

                            </div>
                        </header>
                    </li>
                )
            }
        </>
    );
}

export default Task;