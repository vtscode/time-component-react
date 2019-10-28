import React, {Component} from 'react'
import Time from './Time'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        this.start = this.start.bind(this)
        this.pause = this.pause.bind(this)
    }
    start () {
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }
    pause () {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    render() {
        return <div>
            <Time ms={this.state.timeMs} />
            <input
                type="button"
                value="Start"
                onClick={this.start} />
            <input
                type="button"
                value="Pause"
                onClick={this.pause} />
        </div>
    }
}

export default Timer