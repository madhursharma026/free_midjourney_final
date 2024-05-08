import React from 'react'
import Container from '../Ui/Container';

const HowToGenerate = () => {
  return (
    <section className="generate bg-gray-950 xl:py-28 lg:py-20 md:py-10">
      <Container>
        <div className="text-center">
          <h2 className="heading text-white xl:pb-5 lg:pb-2 md:pb-3">Easy Steps to Turn Your Text into Images</h2>
          <p className="text text-white xl:max-w-7xl lg:max-w-2xl md:max-w-xl mx-auto">
            Learn how to make pictures from your words! This easy guide shows you how to turn your writing into cool images, making your ideas come alive in a snap!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5 px-3">
            <div className="text-center">
              <h2 className="text-5xl leading-tight font-Mona_EB font-extrabold text-primary-voilet">01</h2>
              <div className="pq-icon-box-content">
                <h3 className="text-white font-['Outfit'] mb-2 xl:text-2xl text-xl font-semibold capitalize">Type a Prompt</h3>
                <p className="text-gray-400 font-Mona_Regular leading-6 lg:text-base text-sm mb-0">
                  Just type a prompt, and watch as the AI turns your words into amazing pictures. It's easy and fun—discover the creative possibilities with this simple guide!
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-5xl leading-tight font-Mona_EB font-extrabold text-primary-voilet">02</h2>
              <div className="pq-icon-box-content">
                <h3 className="text-white font-['Outfit'] mb-2 xl:text-2xl text-xl font-semibold capitalize">Generate Image</h3>
                <p className="text-gray-400 font-Mona_Regular leading-6 lg:text-base text-sm mb-0">
                  Hit 'Generate Image' and see your words come to life as pictures right on your screen!
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-5xl leading-tight font-Mona_EB font-extrabold text-primary-voilet">03</h2>
              <div className="pq-icon-box-content">
                <h3 className="text-white font-['Outfit'] mb-2 xl:text-2xl text-xl font-semibold capitalize">Download and Share the Image</h3>
                <p className="text-gray-400 font-Mona_Regular leading-6 lg:text-base text-sm mb-0">
                  Just click to download, and spread the joy by sharing the image created from your text
                </p>
              </div>
            </div>
          {/* <Col lg={6}>
            <div className="pq-sticky-top">
              <div className="pq-generate-overflow-img">
                <Image src={Generate} className="img-fluid w-100" alt="generate" />
              </div>
            </div>
          </Col> */}
        </div>
      </Container>
    </section>
  )
}

export default HowToGenerate