import React from 'react'
import banner from '../assets/Banner.jpg'
import ServicesHome from '../components/ServicesHome'
import aboutImg from '../assets/OUR.jpg'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div
                className="min-h-screen bg-cover bg-center flex items-center text-center justify-center"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className='uppercase'>
                    <h1 className="text-6xl md:text-7xl font-bold tracking-widest text-[#2c541d]">
                        Earth
                    </h1>
                    <h2 className="mt-6 text-xl md:text-2xl tracking-[0.4em] text-gray-800">
                        Endless Potential
                    </h2>
                    {/* Button */}
                    <button className="mt-10 px-8 py-3 bg-green-600 text-white text-sm tracking-widest hover:bg-green-700 transition duration-300">
                        Explore
                    </button>
                </div>
            </div>

            <ServicesHome />

            <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-black uppercase">
                            About Us
                        </h2>

                        <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                            I made it so it is super easy to update and so that it flows
                            perfectly with my tutorials. Lots of love and hundreds of hours
                            went into making it. I hope you love it as much as I do. I wish
                            you the best of luck with your business, enjoy the adventure.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <img
                            src={aboutImg}
                            alt="About"
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-md"
                        />
                    </div>

                </div>
            </section>

            <ContactCTA />
            <Footer />
        </>
    )
}

export default Home
