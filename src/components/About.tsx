import React from 'react'
// import Image from 'next/image'
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import fecture from '@/image/fecture (1).svg'
import fecture1 from '@/image/fecture (2).svg'
import man from "@/image/man.svg"
import Image from "next/image";
// import dynamic from "next/dynamic";
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });
// import { Card, CardContent } from "@/components/ui/carousel"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import messages from "@/messages.json"

function About() {
  // const client = {
  //   loop: false,
  //   dots: false,
  //   responsiveClass: true,
  //   autoplay: true,
  //   smartSpeed: 3000,
  //   autoplayTimeout: 4000,
  //   autoplayHoverPause: true,
  //   navigation: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       stagePadding: 70,
  //     },
  //     600: {
  //       items: 3,
  //       stagePadding: 100,
  //     },
  //     1280: {
  //       items: 5,
  //       stagePadding: 100,
  //     },
  //   },
  // };


  return (
    <>
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>

    </head>
     <section className='bg-[#ECF4F1] py-5'>
        <div className='container max-w-screen-xl py-0 md:py-5 relative px-0 md:px-4 mx-auto overflow-x-hidden'>
            <div className='flex justify-center items-center lg:gap-10 py-4 text-[#43916F] font-extrabold outfit uppercase text-xl gap-4'>
            <Image src={fecture1} width={0} height={0} alt='image' ></Image> 
            aBOUT US
          <Image src={fecture} width={0} height={0} alt='image'></Image>
            </div>

        <div className='p-4 lg:p-0'>
            <h2 className='font-extrabold lg:text-4xl text-2xl outfit md:text-center text-justify  uppercase text-[#072B2C] lg:leading-[50px] mb-3'>Innovating Financial Solutions for <br/> Business Growth</h2>
            <p className='text-[#072B2C] outfit md:text-center text-justify text-base font-normal mb-10'>Founded with a commitment to revolutionize financial management, we empower businesses with cutting-edge software solutions tailored <br/> to streamline operations and foster sustainable growth. Led by a team of industry experts, we prioritize customer satisfaction, continually <br/> refining our products to meet evolving needs and exceed expectations in the dynamic business landscape.</p>
            <h1 className='outfit font-extrabold text-4xl uppercase text-center text-[#072B2C] '>dashboard</h1>
        </div>
        </div>
    </section>  


    <section>
        <div className="flex justify-center items-center lg:gap-10 py-10 text-[#43916F] font-extrabold outfit uppercase text-xl gap-4">
        <Image src={fecture1} width={0} height={0} alt='image' ></Image> 
        Testimonials
          <Image src={fecture} width={0} height={0} alt='image'></Image>
        </div>

        <div className='p-2 lg:p-0'>
            <h2 className='font-extrabold lg:text-4xl text-2xl outfit text-center uppercase text-[#072B2C] lg:leading-[50px] '>Our happy users</h2>
            <p className="text-[#072B2C] outfit lg:text-center text-justify text-base font-normal lg:mb-20">Lorem ipsum dolor sit amet consectetur. Quis faucibus senectus velit mauris nullam. Auctor vel <br/> lorem sed in felis. Morbi dignissim facilisis arcu posuere.</p>
        </div>
        




        {/* OwlCarousel start */}
        <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>



        {/* OwlCarousel end */}


        {/* <OwlCarousel className="owl-theme" {...client} loop={true}> 
          
        <div className="item ">
    <div className=" max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-[#C4EDD7] testimonialbox">
      <div className=" flex items-center xl:space-x-10 md:space-x-3">  */}
        {/* <!-- Left Section: Image --> */}
        {/* <div className="lg:flex-shrink-0">
          <img src={man}  alt="Person 1" className="lg:w-28 lg:h-28 rounded-lg "/>
        </div>
     */}
        {/* <!-- Right Section: Testimonial Content --> */}
        {/* <div className="testimonialright"> */}
          {/* <!-- Name and Title --> */}
          {/* <h4 className="text-[6px] outfit font-bold text-[#072B2C]">Fredi Allan</h4>
          <p className="text-[#072B2C] outfit font-normal text-[3px]">Founder, ABC</p>
     */}
          {/* <!-- Star Rating --> */}
          {/* <div className="flex items-center space-x-1 mt-2">
            <span className="outfit"><img src="image/Group 1359.svg" alt=""/></span>
          </div>
     */}
          {/* <!-- Testimonial Title --> */}
          {/* <p className="mt-2 text-xs font-bold outfit text-[#1A1E23]">"TIME AND MONEY SAVING"</p> */}
    
          {/* <!-- Testimonial Description --> */}
                                          {/* <p className="mt-2 text-[#1A1E23] text-[5px] font-normal Aleo Aleop">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat <br/> ligula ullamcorper quisque sed libero. Metus diam, ultrices et diam <br/> dapibus purus sed nunc accumsan. Tristique ultrices vestibulum <br/> vulputate curabitur nullam turpis. Diam sed id lorem sed.
                                          </p>
                                        </div>
                                        </div>
                                        </div>
                                  
                                      </div>
                                        </OwlCarousel>

                                        
                                        */}

  </section>    
    </>
  )
}

export default About
