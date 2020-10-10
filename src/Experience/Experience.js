import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="container">
                <div class="row ">
                    <div class="col" text-center>
                        <h4>BlueCross BlueShield of Western NY</h4>
                        <h5><em>Application Developer Intern (May 2019 - August 2019)</em></h5>
                        <h6><em>Buffalo, NY</em></h6>
                        <br></br>
                        <p>
                            BCBS is a health insurance company and was my first experience in using tech in industry.
                            While there I created a full-stack application, specifically a Dashboard the the claims department
                            could use to view the processing of claims going through the system. This would identify things such
                            as if there is an error with the batching programs and to alert the claims department
                            if there is a problem with claims being processed or that may require manual processing.
                        </p>
                    </div>
                    <div class="col">
                        <img src="images/bcbs.jpeg" width="150" height="150"></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Experience;