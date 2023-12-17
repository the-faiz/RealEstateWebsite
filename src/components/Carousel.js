import React from 'react'
import './Carousel.css';

export default function Carousel() {
    return (
        <>
            <div class="car">
                <h1>Premium Features</h1>
                <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <div class="overlay-image" style = {{ backgroundImageURL: 'url(./image/pexels-abbas-mohammed-3680912.jpg)' }} ></div>
                            <div class="container">
                                <h1>1st Headline</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iste?</p>
                                <a href="" class="btn btn-lg btn-primary">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <div class="overlay-image" style={{backgroundImageURL: "url(./image/pexels-maxime-francis-2246476.jpg)"}} ></div>
                            <div class="container">
                                <h1>2nd Headline</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iste?</p>
                                <a href="" class="btn btn-lg btn-primary">Subscribe Now</a>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <div class="overlay-image" style={{backgroundImageURL: "url(./image/pexels-roberto-nickson-2478248.jpg)"}} ></div>
                            <div class="container">
                                <h1>3rd Headline</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iste?</p>
                                <a href="" class="btn btn-lg btn-primary">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div></>
    )
}
