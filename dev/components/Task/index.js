import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import classes from './Task.module.css';

class Task extends React.Component {
	render() {
        const { isCheck, text } = this.props;

		return (
			<li className={classes.item}>
                <header className={classes.itemWrap}>
                    <div className={classes.checkbox}>
                        <Checkbox isCheck={isCheck}/>
                    </div>

                    <p className={`${classes.text} ${isCheck ? classes.textCheck : ''} `}>
                        {text}
                    </p>
                    
                    <div className={classes.btnWrap}>
                        <Button text={'Edit'}/>
                        <Button text={'Delete'}/>
                    </div>
                </header>
            </li>
		);
	}
}

export default Task;