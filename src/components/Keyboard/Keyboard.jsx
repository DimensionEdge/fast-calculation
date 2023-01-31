import { Button } from 'antd';
import React from 'react';
import 'antd/dist/reset.css';
import KeyboradStyle from './Keyboard.css'

class SingleButton extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.clickButton(this.props.displayString)
        console.log(this.props.click);
    }

    render() {
        return (
            <Button type={this.props.type || 'primary'} block onClick={this.handleClick} className='keyboard-btn'>{this.props.displayString}</Button>
        )
    }
}

export class KeyBoard extends React.Component {


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='keyboard'>
                    <div style={{flex: 'auto'}}>
                        <div className='keyboard-row'>
                            <div className='keyboard-col'>
                                <SingleButton displayString='1' clickButton={this.props.clickKeyBoard} />
                            </div>
                            <div className='keyboard-col'>
                                <SingleButton displayString='2' clickButton={this.props.clickKeyBoard} />
                            </div>
                            <div className='keyboard-col'>
                                <SingleButton displayString='3' clickButton={this.props.clickKeyBoard} />
                            </div>


                        </div>
                        <div className='keyboard-row'>
                            <div className='keyboard-col'>
                                <SingleButton displayString='4' clickButton={this.props.clickKeyBoard} />
                            </div>
                            <div className='keyboard-col'>
                                <SingleButton displayString='5' clickButton={this.props.clickKeyBoard} />
                            </div>
                            <div className='keyboard-col'>
                                <SingleButton displayString='6' clickButton={this.props.clickKeyBoard} />
                            </div>


                        </div>
                        <div className='keyboard-row'>
                            <div className='keyboard-col'>
                                <SingleButton displayString='7' clickButton={this.props.clickKeyBoard} />
                            </div>
                            <div className='keyboard-col'>
                                <SingleButton displayString='8' clickButton={this.props.clickKeyBoard} />
                            </div>
                            <div className='keyboard-col'>
                                <SingleButton displayString='9' clickButton={this.props.clickKeyBoard} />
                            </div>

                        </div>
                        <div className='keyboard-row'>
                            <div className='keyboard-col'>
                                <SingleButton displayString='0' clickButton={this.props.clickKeyBoard} />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='keyboard-col'>
                            <SingleButton displayString='+/-' clickButton={this.props.clickKeyBoard} />
                        </div>
                        <div className='keyboard-col'>
                            <SingleButton displayString='AC' clickButton={this.props.clickKeyBoard} />
                        </div>
                        <div className='keyboard-col'>
                            <SingleButton displayString='C' type='' clickButton={this.props.clickKeyBoard} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
