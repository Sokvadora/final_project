import React from 'react';
import headImg from '../../img/pedicure-slide-v2.jpg'
class HeadImg extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="content">  
                <img src=  {headImg}  width='100%'  alt="..." />
                {/* <span> BEAUTY</span>
                <span> FLY</span>  */}
                </div>
               
            </React.Fragment>
            )
    }
}
export default  HeadImg;