import './Contact.scss';
import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_uhnvbxn', 'template_9z5ryyq', e.currentTarget, '9Rm7pFCl_-4yHY_S3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset()

    };
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form onSubmit={sendEmail}>
                        <h1><span>Contact</span> me</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" placeholder='Enter your name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" placeholder='Enter your email' />
                        </div>
                        <div>
                            <label>Subject</label>
                            <input type="text" name="subject" placeholder='Enter your subject' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea name="message" rows={10} placeholder='Enter your text' />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact