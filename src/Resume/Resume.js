import React from 'react';
import './Resume.css';

/**
 * This page will give access to my resume to be downloaded
 */
class Resume extends React.Component {
    constructor(props){
        super(props);
        this.image = "/images/resume.png";
    }

    render() {
        return (
            <div class="container" id="resume-margin-top">
                <div class="row align-items-center">
                    <div class="col text-center ">
                        <h2>View my Resume</h2>
                        <br></br>
                        <a href="resume/resume.pdf" target="_blank">
                            <img src={this.image} width="40" height="40" alt="Resume icon"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;