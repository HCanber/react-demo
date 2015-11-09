'use strict'
import React from 'react'
import { render } from 'react-dom'
import ButtonView from './ButtonView'

require('./index.css') //Yes we can include css into the bundle

var SomeSubComponent = React.createClass({
	render(){ return (
		<div>
			<b>{this.props.title}</b>
			{this.props.text}
		</div>
	)}	
})

var Application = React.createClass({
	getInitialState(){ return {} },
	 
	getDefaultProps(){
		return { title: 'Missing' }
	},
	
	clickCountEnough(count) {
		this.setState({ result: {title:"Application says: ",text: `You clicked: ${count} times` }})
	},
	
	render(){ return (
		<div className="container">
			<h1>{this.props.title}</h1>
			<ButtonView onSuperClick={this.clickCountEnough} maxClickCount="3" />
			{this.state.result && <SomeSubComponent title={this.state.result.title} text={this.state.result.text}/>}
		</div>
	)}
	
})


render(<Application title="Click the button"/>, document.getElementById('app'));