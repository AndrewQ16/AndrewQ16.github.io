import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.image = "images/pfp2.jpg"
    }

    render(){
        return (
            // container requires a breakpoint for each screen width, add later if necessary
            <div>
                <div class="container">
                    <div class="row align-items-center">
                        {/* <div id="animation-fade-in-from-left" class="col text-center left">
                        
                            <img id="pfp" class="shadow  mb-5"
                                src={this.image} 
                                alt="My picture didn't load :/"/>
                                        
                        </div> */}
                        <div id="animation-fade-in-from-right" class="col text-center right">
                            
                            <p class="h1"><em>Hello there</em></p>
                            
                            <p>I'm Andrew and I'm a Software Developer.</p>
                            <p>Feel free to have a look around!</p>


                            {/* <ul class="list-inline">
                                <li class="list-inline-item">Lorem ipsum</li>
                                <li class="list-inline-item">Phasellus iaculis</li>
                                <li class="list-inline-item">Nulla volutpat</li>
                            </ul> */}
                        </div>

                        
                    </div>
                </div>

                <div class="footer">
                    <a href="https://github.com/AndrewQ16" id="right-space">
                        <img src="/images/github-logo.png" width="40" height="40" alt="Github"/>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/andrew-quinonez-801051b6/">
                        <img src="/images/linkedin.png" width="40" heigh="40" alt="LinkedIn"/>
                    </a>
                    
                </div>
            </div>
            
        )
    }
}

export default Home;