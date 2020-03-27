import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import classes from './Task.module.css';

class Task extends React.Component {
    state = {
        isShowForm: false,
    }

    handleChange = () => {
        const { isShowForm } = this.state;
        this.setState({
          isShowForm: !isShowForm,
        });
      }
    
      updateComment = (comm) => {
        this.props.itemUpdateTask(comm);
        this.handleChange();
      }
    
	render() {
        const { isShowForm } = this.state;
        const { isCheck, text, remove, id } = this.props;

		return (
            <>
                {
                    isShowForm ? (
                        <Form
                            item={{ isCheck, text, id }}
                            submitForm={this.updateComment}
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
                                    onClick={this.handleChange}
                                    text={'Edit'}
                                />

                                <Button 
                                    onClick={() => remove(id)}
                                    text={'Delete'}
                                />

                                </div>
                            </header>
                        </li>
                    )
                }
            </>
		);
	}
}

export default Task;