import React from 'react';
import headImg from '../../img/pedicure-slide-v2.jpg'
class HeadImg extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="content content-image">  
                <img src=  {headImg}  width='100%'  alt="..." />
                <div className='salon-name'> 
                <h1 className='beauty'>Beauty</h1>
                <h1 className='life'> Life</h1>
                </div>
                </div>
               
            </React.Fragment>
            )
    }
}
export default  HeadImg;