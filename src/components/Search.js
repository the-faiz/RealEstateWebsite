import React from 'react'
import './Search.css';

export default function Search() {
    return (
        <>
            <dv class="fPage">
                <div class="left_item">
                    <h1>Book Your Property Now</h1>
                    <span>Unlocking the Doors to Your Future.
                        Discover Your Dream Home Today.</span>
                    <div class="SearchBox">
                        <div class="Search">
                            <input type="text" id="search" placeholder="Searh For Plots Near You"/>
                                <button type="button" class="btn btn-success"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
                        </div>
                    </div>
                    <div class="filter">
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle mx-2" data-bs-toggle="dropdown" aria-expanded="false">
                                Builders
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle mx-2" data-bs-toggle="dropdown" aria-expanded="false">
                                Area
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle mx-2" data-bs-toggle="dropdown" aria-expanded="false">
                                Budget
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle mx-2" data-bs-toggle="dropdown" aria-expanded="false">
                                Location
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </dv>
        </>
    )
}
