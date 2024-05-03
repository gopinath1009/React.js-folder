
// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
// // import { PrimeReactProvider } from 'primereact/api';
// import Navbar from '../Navbar/Navrbar';

import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navrbar";
import './Home.css'
// import { Carousel } from 'primereact/carousel';
import React, { useState } from "react";
import { Galleria } from 'primereact/galleria';
import image1 from '../../assets/s-img-4.jpg'
import image2 from '../../assets/s-img-5.jpg'
import image3 from '../../assets/s-img-6.jpg'
import image4 from '../../assets/s-img-7.jpg'
// import image2 from '../../assets/school-img2.jpg'
// import image3 from '../../assets/class-img.jpg'
import About from "../About/About";
import Login from "../login/Admin";
import ContactUs from "../ContactUs/Contactus";

import { Carousel } from 'primereact/carousel';
import { Button } from "primereact/button";
import Navbar2 from "../Navbar/Navbar2";


export default function Home() {

    const [navbar, setnavbar] = useState(true)

    const images = [
        { itemImageSrc: image1 },
        { itemImageSrc: image2 },
        { itemImageSrc: image3 },
        // { itemImageSrc: image4 },
    ];


    const productTemplate = (image) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3 mb-31">
                    <img src={image.itemImageSrc} className="w-6 imgscl shadow-2" />
                    <div className="txtad">Admission Open in Eagle School
                        <Button label="APPLY NOW" severity="success" icon="pi pi-check-circle" />
                    </div>
                    <div className="txtad txtad2">Admission Open in Eagle School
                        <Button label="APPLY NOW" severity="success" icon="pi pi-check-circle" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="bg-clr">

                {/* <Navbar2 /> */}
                {navbar && <div className="bglit"><Navbar /></div>}

                <div className="croseldiv">
                    <Carousel value={images} numVisible={1} numScroll={3} className="custom-carousel" circular autoplayInterval={3000} itemTemplate={productTemplate} />
                </div>

            </div>
            <About />
            <ContactUs />
        </div>
    );

}



