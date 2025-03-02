import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import img1 from '../../assets/Gallery_1.jpg';
import img2 from '../../assets/Gallery_2.jpg';
import img3 from '../../assets/Gallery_3.jpg';
import img4 from '../../assets/Gallery_4.jpg';

function CarouselGames() {
    return (
        <section className='bg-black py-20 px-4 lg:px-20 flex flex-col justify-start gap-12 bg-gradient-to-r from-purple-950 to-black'>
            <div className='text-center text-3xl lg:text-5xl font-bold'>
                <h2 className='text-[#00ffcc]'>Glimpse: Wealth of Wizard 2K24</h2>
            </div>
            <Splide
                options={{
                    type: "loop",
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: true,
                        speed: 1,
                    },
                    arrows: true,
                    pagination: false,
                    fixedWidth: '600px',
                    fixedHeight: '400px', 
                    gap: '16px', 
                    breakpoints: {
                        640: {
                            fixedWidth: '350px', 
                            fixedHeight: '250px',
                            gap: '12px',
                        },
                        768: {
                            fixedWidth: '450px', 
                            fixedHeight: '300px',
                        },
                        1024: {
                            fixedWidth: '600px', 
                            fixedHeight: '400px',
                        },
                    },
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <img src={img1} alt="Gallery Image 1" className="w-full h-full rounded-lg object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img2} alt="Gallery Image 2" className="w-full h-full rounded-lg object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img3} alt="Gallery Image 3" className="w-full h-full rounded-lg object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img4} alt="Gallery Image 3" className="w-full h-full rounded-lg object-cover" />
                </SplideSlide>
            </Splide>
        </section>
    );
}

export default CarouselGames;
