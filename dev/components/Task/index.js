import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import classes from './Task.module.css';

class Task extends React.Component {
	render() {
		return (
			<li className={classes.item}>
                <header className={classes.itemWrap}>
                    <div className={classes.checkbox}>
                        <Checkbox />
                    </div>

                    <p className={classes.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
                    </p>
                    
                    <div className={classes.btnWrap}>
                        <Button />
                        <Button />
                    </div>
                </header>
            </li>
		);
	}
}

export default Task;