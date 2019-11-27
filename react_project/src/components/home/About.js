import React from 'react';
import img4 from '../../img/h4.jpg'
import img2 from '../../img/h2.jpg'
import img3 from '../../img/h3.jpg'
class About extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className="about">
                    <h1> ~ Welcome ~</h1>
                </div>
                <div className='about-content row'>
                     
                    <div className='col m4 s12 card-home'>
                        <div className="card ">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={img2} className='activator' width='100%' height='100%' alt="..." />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Elegant braided<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Elegant braided<i className="material-icons right">close</i></span>
                                <p>So you’re going out on a date and want to look cute but don’t want to see as if you have
                                put in too much effort. Hmmm... what do you do? I would say, try out this hairstyle.
                                The side braid and the thin curly wisp of hair add a cute softness to this messy bun look.</p>
                            </div>
                        </div>
                    </div>


                    <div className='col m4 s12 card-home'>
                        <div className="card  ">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={img3} className='activator' width='100%' height='100%' alt="..." />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Long curls<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Long curls<i className="material-icons right">close</i></span>
                                <p>Who doesn’t love the whole glamorous Hollywood starlet look? With gorgeous long tresses
                                cascading down one side and swooped back on the other, this curly look is sure to make heads turn.
                                I usually do my hair up in this I’m heading out for dinner..</p>
                            </div>
                        </div>
                    </div>

                    <div className='col m4 s12 card-home'>
                        <div className="card ">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={img4} className='activator' width='100%' height='100%' alt="..." />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Elegant braided<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Elegant braided<i className="material-icons right">close</i></span>
                                <p>So you’re going out on a date and want to look cute but don’t want to see as if you have
                                put in too much effort. Hmmm... what do you do? I would say, try out this hairstyle.
                                The side braid and the thin curly wisp of hair add a cute softness to this messy bun look.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
export default About;