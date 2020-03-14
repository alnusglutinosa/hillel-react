import React from 'react';
import Title from '../Title'; 
import Form from '../Form';
import List from '../ TaskList';
import classes from './Main.module.css';

class Main extends React.Component {
	render() {
		return (
            <main className={classes.main}>
                <Title />
                <Form />
                <List />
            </main>
        );
	}
}

export default Main;