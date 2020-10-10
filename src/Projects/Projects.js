import React from 'react';
import './Projects.css';
class Projects extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>

                <div class="container">
                    <div class="row">
                        <div  class="col-md text-left" id="animation-fade-in-from-left">
                            <h4 id="element1">Coffeeshop webapp</h4>
                            <a id="element2" href="https://github.com/AndrewQ16/CoffeeShop">
                                    <img src="images/github-logo.png" alt="repo link" width="20" height="20" />
                            </a>
                            <p>I created a <em>dummy</em> online store to order coffee and other
                            breakfast items. This was a fullstack application where the front-end
                            was created with Angular, the back-end was created with Springboot and the
                            menu items were stored in a MySQL DB. The front-end is hosted on Firebase,
                            back-end is hosted on Google Cloud Run in a Docker container and the DB
                            hosted on Google SQL. You can view it <a href="https://coffeeshop-frontend.web.app/menu">here. </a>
                            There is a bit of styling lacking unfortunately :(</p>
                        </div>
                        <div class="col-md text-center" id="animation-fade-in-from-right">
                            <h5><em>A *very* visually appealing coffeeshop</em></h5>
                            <img src="images/coffeeshop.png" alt="Coffeeshop site image" width="650" height="300"/>

                        </div>
                    </div>

                    <br></br>
                    <div class="row ">
                        <div class="col-md text-left" id="animation-fade-in-from-left-delay-1">
                            <h4 id="element1">Distributed Hashtable emulated on Android</h4>
                            <a id="element2" href="https://github.com/AndrewQ16/Pa3SimpleDHT">
                                    <img src="images/github-logo.png" alt="repo link" width="20" height="20" />
                            </a>
                            <p>In this project for my <em>Distributed Systems</em> course, we implemented
                            a DHT to store <code>key:value</code> pairs. This algorithm we used was a<a href="https://en.wikipedia.org/wiki/Chord_(peer-to-peer)"> chord ring </a> with 5 nodes that would be able to successfully store values even if a node
                            was <em>lost</em> and be able to query and delete the stored values in this simulation.</p>
                        </div>
                        <div class="col text-center" id="animation-fade-in-from-right-delay-1">
                            <h5><em>Chord ring concept</em></h5>
                            <img src="images/Chord_network.png" alt="Chord ring concept"/>
                        </div>
                    </div>
                    <br></br>
                    <div class="row ">
                        <div class="col-md text-left" id="animation-fade-in-from-left-delay-2">
                            <h4 id="element1">Snake Game</h4>
                            <a id="element2" href="https://github.com/AndrewQ16/Snake-Game">
                                    <img src="images/github-logo.png" alt="repo link" width="20" height="20" />
                            </a>
                            <p>I recreated the Snake game with C++ using the SFML framework. Originally
                            this project was to get comfortable with C++ since it's the language that
                            was used in my Data Structures course. Can happily say it did help! :)</p>
                        </div>
                        <div class="col text-center" id="animation-fade-in-from-right-delay-2">
                            <h5><em>Snake game</em></h5>
                            <img src="images/snake.png" width="400" height="300" alt="Snake game image"/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Projects;