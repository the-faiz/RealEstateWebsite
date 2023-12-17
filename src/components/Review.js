import React from 'react'
import "./Review.css"

export default function Review() {
    return (
    <>
            <div class="review">
                <div class="carousel2">
                    <h2>Reviews</h2>
                    <div class="carousel2">
                        <div id="myCarousel2" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active rev" data-bs-interval="5000">
                                    <div>
                                        <img src="https://tse2.mm.bing.net/th?id=OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH&pid=Api&P=0&h=220" alt=""/>
                                            <span>Name1</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolores ex? Ratione reiciendis animi hic, mollitia iste optio sunt inventore exercitationem quia? Veritatis tenetur in natus enim sit quis amet aliquam pariatur ipsam perferendis, explicabo ut odio, quisquam adipisci accusamus ad. Cumque at aliquam corporis perferendis ratione illo omnis rem!</p>

                                </div>
                                <div class="carousel-item rev" data-bs-interval="5000">
                                    <div>
                                        <img src="https://tse2.mm.bing.net/th?id=OIP.ao_f7aS1AGaY0IJFd8jgqAHaLG&pid=Api&P=0&h=220" alt=""/>
                                            <span>Name2</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sit nulla incidunt laudantium eius nesciunt, debitis est corporis accusamus id. Dolor quae necessitatibus, ratione repudiandae asperiores optio nesciunt ipsa obcaecati officia accusantium facilis architecto dolore hic aperiam laborum. Illo ratione deleniti enim molestias fugiat consectetur nostrum hic provident earum vero.</p>
                                </div>
                                <div class="carousel-item rev" data-bs-interval="5000">
                                    <div>
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&pid=Api&P=0&h=220" alt=""/>
                                            <span>Name3</span>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quo, ipsum tempora temporibus labore, perspiciatis officia cum animi, placeat dolore impedit consectetur dolorum? Molestias, eveniet dignissimos quos blanditiis asperiores, temporibus nihil at perferendis veniam aut quibusdam quidem architecto qui et cum nemo magnam in non repellendus tempore quas nulla consequuntur?</p>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="contact" id="contact">
                    <h1>Give your Feedback</h1>
                    <div class="contactForm">
                        <label for="name">Name</label>
                        <input type="text"/>
                            <label for="email">Email</label>
                            <input type="email"/>
                                <label for="numner">Phone Number</label>
                                <input type="text"/>
                                    <label for="message">Message</label>
                                    <input type="text" id="message"/>
                                        <input type="submit" value="Send"/>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )
}
