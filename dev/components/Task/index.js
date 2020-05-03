import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import classes from './Task.module.css';
import Icon from '../Icon';
import { removeTask} from '../../actions';


const Task = ({ isCheck, text, id }) => {
    const [isShowForm, changeShowForm] = useState(false);

    useEffect(() => {
        changeShowForm(false); 
     }, [isCheck, text, id]);

    return (
        <>
            {
                isShowForm ? (
                    <Form
                        item={{ isCheck, text, id }}
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
                                onClick={() => changeShowForm(!isShowForm)}
                                text={'Edit'}
                            >
                                <Icon name="edit" />
                            </Button>

                            <Button 
                                onClick={() => removeTask(id)}
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