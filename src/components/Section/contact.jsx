import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class ContactSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
                {/*Contact Section */}
                <section id="contact">
                    <div className="contact-section angular section-padding">
                        <div className="top-angle">
                        </div>{/*/.top-angle */}
                        <div className="container">
                            <div className="section-head">
                                <h2 className="section-title">
                                    Contact
            </h2>
                                <p className="section-description">
                                    {data.subtitle}
            </p>
                            </div>{/*/.section-head */}
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-form-container">
                                        <h3 className="content-title">
                                            Drop us a message
                    </h3>

                                        <form className="contact-form" id="contact-form" action="email.php" method="post">
                                            <div id="name_error" className="error">
                                                <img src="assets/images/email/error.png" alt="Error!" />
                                                Please enter your name.
                        </div>{/*/#name_error */}
                                            <div className="input-container li_user">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
                                            </div>{/*/.input-container*/}

                                            <div id="email_error" className="error">
                                                <img src="assets/images/email/error.png" alt="Error!" />
                                                Please enter your valid E-mail ID.
                        </div>{/*/#email_error */}
                                            <div className="input-container li_mail">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                                            </div>{/*/.input-container */}

                                            <div id="message_error" className="error">
                                                <img src="assets/images/email/error.png" alt="Error!" />
                                                Please enter your message.
                        </div>{/*/#message_error */}
                                            <div className="input-container li_pen">
                                                <textarea className="form-control" id="message" name="message" cols="45" placeholder="Message" rows="6"></textarea>
                                            </div>{/*/.input-container */}

                                            <div id="mail_success" className="success">
                                                <img src="assets/images/email/success.png" alt="Success!" />
                                                Your message has been sent successfully.
                        </div>{/*/#mail_success */}

                                            <div id='mail_fail' className='error'>
                                                <img src="assets/images/email/error.png" alt="Error!" /> Sorry, error occured this time sending your message.
                        </div>{/*/#mail_fail */}

                                            <button type="submit" className="btn custom-btn angle-effect" id="send_message">Submit</button>
                                        </form>{/*/.contact-form */}

                                    </div>{/*/.contact-form-container */}
                                </div>{/*/.col-md-6 */}

                                <div className="col-md-6">
                                    <div className="contact-info">
                                        <h3 className="content-title">
                                            {data.infotitle}
                    </h3>
                                        <p className="content-description">
                                            {data.description}
                    </p>
                                        <address>
                                            <ul className="contact-address">
                                                <li className="fa-map-marker">
                                                    {data.location}
                            </li>
                                                <li className="fa-phone">
                                                    {data.phonelist}
                            </li>
                                                <li className="fa-envelope">
                                                    {data.maillist}
                            </li>
                                            </ul>{/*/.contact-address */}
                                        </address>
                                    </div>{/*/.contact-info */}
                                </div>{/*/.col-md-6 */}
                            </div>
                        </div>
                        {/* <div className="bottom-angle">
                        </div> */}
                    </div>{/*/.contact-section */}
                </section>{/*/#contact */}
                {/*Contact Section End */}
            </React.Fragment>
        )
    }
}

ContactSection.propTypes = {
    data: PropTypes.any
}



