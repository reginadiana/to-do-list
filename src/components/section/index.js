import React from 'react';
import imageRun from '../../assets/homer_run.png'
import './style.css'

export function Section(props) {
	return (
		<div className="headerr">	
			<h1 className="title-2">Homer is a person very disorganized.
				<br/> Help him to list your tasks and 
				<br/> to check if are done.
			</h1>
			<img src={imageRun} className="imageRun" alt="Homer correndo das tarefas"/>
		</div>
	);
}