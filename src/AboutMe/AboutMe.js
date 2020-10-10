import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
    constructor(props){
        super(props)
        this.image = "images/pfp3.jpg";
    }

    render() {
        return (
            <div class="container">
                <div class="row align-items-center">
                    <div class="col text-center">
                        <img id="pfp" class="shadow  mb-5 animation-fade-in-from-top"
                            src={this.image} 
                            alt="My picture didn't load :/"/>
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col text-center animation-fade-in-from-top">

                        <p>Hello there my name's Andrew and I'm a software developer who enjoys building
                        full-stack, back-end and as a hobby, game apps. However without cornering
                        myself into a developer corner, I would just say I'm a tech enthusiast. I enjoy learning
                        new tech then building something from what I've learned.</p>

                        <p>Recently I've been learning more about web technologies, specifically React <em>since I was just
                        an Angular user until I saw the light.</em> Plus WebAssembly which has led me to learn Rust.</p>

                        <p>My other hobbies include keeping up with European Soccer and watching my favorite
                        team, Arsenal(!). Or playing with my dogs (<em>yes, plural</em>), I have 3, a beagle named Snoopy, and 
                        two half-terrier-half-dobbermans named Milly and Molly.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;