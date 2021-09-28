import React from 'react';
import images from '../images/7.png';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';


export const Home = () => {

    return (
        <div>
            <div className="container-fluid">
                <img class="img-fluid" src={images} alt="img1" width="100%" height="auto" />
            </div>
            <div>
                <div className="Container-fluid">
                    <center><h1>DISPLAY LATEST AND FEATURED PROPERTIES</h1></center>
                        
                    <div className="row">
                        <div className="col-lg-4">
                            <img className=" rounded-circle" width="140" height="140" src={img1} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="#777" />

                            <h2>APARTMENTS</h2>
                            <p>A Higher Quality of Living. </p>
                            <p><a className="btn btn-primary" href="#">View details &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className=" rounded-circle" width="140" height="140" src={img2} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="#777" />

                            <h2>HOUSE</h2>
                            <p>Home is where our story begins</p>
                            <p><a className="btn btn-primary" href="#">View details &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className=" rounded-circle" width="140" height="140" src={img3} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="#777" />

                            <h2>OFFICES</h2>
                            <p>The future depends on present.</p>
                            <p><a className="btn btn-primary" href="#">View details &raquo;</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
