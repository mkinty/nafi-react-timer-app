import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
                <button onClick={this.props.onBtnClick} className ={this.props.btnCssClasses} >
                    {this.props.text}
                </button>
            
        )
    }
}
