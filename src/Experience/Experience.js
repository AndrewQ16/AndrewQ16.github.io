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
                        <h4>FedEx Ground</h4>
                        <h5><em>Software Engineer (January 2021 - Current)</em></h5>
                        <h6><em>PittsBurgh, PA (remote)</em></h6>
                        <br></br>
                        <p>
                            At FedEx I was in the Linehaul department. The department was in charge of building out applications to help drivers
                            and managers of stations. The project I worked on was a modernization of a legacy system.
                            This system would be used for scheduling and assigning trips to drivers and with the added functionality
                            of a messaging system for drivers and managers. The project was built with Spring Boot, Angular, Oracle SQL and Redis.
                        </p>
                    </div>
                    <div class="col">
                        <img src="images/fedex-ground-og-logo.jpg" width="150" height="150"></img>
                    </div>
                </div>

                <div class="row ">
                    <div class="col" text-center>
                        <h4>BlueCross BlueShield of Western NY</h4>
                        <h5><em>Application Developer Intern (May 2019 - August 2019)</em></h5>
                        <h6><em>Buffalo, NY</em></h6>
                        <br></br>
                        <p>
                            BCBS is a health insurance company and was also my first experiene in using tech in industry.
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