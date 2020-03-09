import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';

class Task extends React.Component {
	render() {
		return (
			<li className="item">
                <header className="item__head">
                    <Checkbox />
                    <p>олололололололо</p>
                    <div className="item__action">
                        <Button />
                        <Button />
                    </div>
                </header>
            </li>
		);
	}
}

export default Task;