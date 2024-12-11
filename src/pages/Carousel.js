import React from "react";

function Carousel() {
    return (
        <div className="row">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPK6mJ4i0uA11eA40pbXJPL4YlBi39GjLodCDm6STN6f-BDaL477Wv8ALR8jbHcgF5eeg&usqp=CAU" 
                            className="d-block w-100" 
                            alt="Slide 1" 
                        />
                    </div>
                    <div className="carousel-item">
                        <img 
                            src="https://f.ptcdn.info/484/066/000/pzm9fd3mhs6zavWLRJc9-o.jpg" 
                            className="d-block w-100" 
                            alt="Slide 2" 
                        />
                    </div>
                    <div className="carousel-item">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPK6mJ4i0uA11eA40pbXJPL4YlBi39GjLodCDm6STN6f-BDaL477Wv8ALR8jbHcgF5eeg&usqp=CAU" 
                            className="d-block w-100" 
                            alt="Slide 3" 
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
