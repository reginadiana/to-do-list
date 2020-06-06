import React from 'react';
import imageSky from '../../assets/header_sky.jpg'
import './style.css'

export function Header(props) {
	return (
		<div className="headerr">	
			<h1 className="title-1">Homer's <span>Task List</span></h1>
			<img src={imageSky} className="imageSky" alt="Homer nas núvens com uma rosquinha"/>
		</div>
	);
}