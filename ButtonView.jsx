'use strict'
import React from 'react'

var ButtonView  = React.createClass({
	getInitialState() {
		return { clickCount: 0 }
	},
	clickHandler() {
		var {clickCount} = this.state  //Same as var clickCount = this.state.clickCount
		var {maxClickCount, onSuperClick} = this.props
		var newCount = clickCount+1
		this.setState({ clickCount: newCount })
		
		if(newCount == maxClickCount) {
			return onSuperClick(newCount)
		}
	},
	render(){ return (
		<div>
			<button className="btn btn-primary" onClick={this.clickHandler} disabled={this.props.maxClickCount==this.state.clickCount}>Click me</button>
			<p>You have clicked {this.state.clickCount} times. {this.props.maxClickCount - this.state.clickCount} clicks left</p>
		</div>
	)}
	
})

export default ButtonView