import React, { useState, useEffect }from 'react';
import Title from '../Title'; 
import Form from '../Form';
import List from '../ TaskList';
import classes from './Main.module.css';


const Main = () => {
	return (
		<main className={classes.main}>
			<Title />
			<Form />
			<List />
		</main>
	);
}

export default Main;