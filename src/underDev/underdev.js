import React , {Component} from 'react';
import './underdev.css';
import underDevelopImage from '../assets/bot.jpg'

class UnderDev extends Component
{
    render()
    {
        let messageStr = this.props.sectionName + " Section is under development";

        return(
            <div className="underdev-box">
                <h5><strong>{messageStr}</strong></h5>
                <img src={underDevelopImage} alt="Under Development Image" width="20%" height="20%"/>
            </div>
        )
    }
}

export default UnderDev;