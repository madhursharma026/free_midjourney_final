import React from 'react'
import Intro1 from "@/assets/images/front/2.jpg";
import Intro2 from "@/assets/images/front/1.jpg";
import Intro3 from "@/assets/images/front/3.jpg";
import Intro4 from "@/assets/images/intro-4.png";
import Intro5 from "@/assets/images/intro-5.jpg";
import Image from 'next/image';
import Link from 'next/link';
import Container from '../Ui/Container';

const Information = () => {
  return (
    <React.Fragment>
      <section className="introduction xl:py-40 lg:py-28 lg:pb-16 md:pt-20">
        <Container>
          <div className="grid grid-cols-2 md:px-6">
            <div className="relative text-center group">
              <Image src={Intro2} alt="intro" className='transition-all xl:w-[300px] xl:h-[440px] lg:w-[250px] md:w-[200px] object-cover rounded-lg absolute top-1/2 translate-y-[-50%] xl:left-2 lg:left-8 md:left-10 z-0 group-hover:-left-0.5 md:group-hover:left-[10px]' />
              <Image src={Intro1} alt="intro" className='transition-all xl:w-[300px] xl:h-[440px] lg:w-[250px] md:w-[200px] object-cover rounded-lg z-10 scale-110 absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]' />
              <Image src={Intro3} alt="intro" className='transition-all xl:w-[300px] xl:h-[440px] lg:w-[250px] md:w-[200px] object-cover rounded-lg absolute top-1/2 translate-y-[-50%] xl:right-2 lg:right-8 md:right-10 z-0 group-hover:-right-0.5 md:group-hover:right-[10px]' />
            </div>

            <div className="text-start xl:px-5 lg:px-3">
              <h2 className="heading text-gray-950">Why Free midjourney?</h2>
              <p className="text my-4 text-gray-900">At Mid Journey free , we believe creativity is a basic human right. It should be available to all, no matter their means. That's why we provide a generous free AI image generation - no credit card is required. Describe whatever your imagination dreams up. Watch with wonder as a free AI artist brings it to visual life. We focus purely on empowering ideas rather than profit. Our special algorithm allows for stunning image quality even with free credits. Unlock your inner genius and give your ideas wings through the magic of free AI art, freely available to all at Free MidJourney.
              </p>
              <Link href="/auth/signin" className='pq-button-flat w-fit'>Read more</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="text-to-image pt-10 xl:pb-40 pb-32">
        <Container>
          <div className="grid grid-cols-2 md:px-6">
            <div className="text-start xl:pl-0 lg:pl-8">
              <h2 className="heading text-gray-950">Why stick to credits only!</h2>
              <p className="text my-4 text-gray-900">At FreeMid Journey, we focus exclusively on credits rather than subscriptions for AI image generation. This allows for maximum flexibility - spend credits whenever inspiration strikes without locking into monthly fees. Our credits-only model empowers imagination on demand. And our special algorithm squeezes high image quality out of even small numbers of credits. We provide this pay-as-you-go approach to tear down any barriers, making AI-powered visual art accessible to all budgets. Stretch your creativity further through the Looking Glass with our credit system - no monthly commitments are required.
              </p>
              <Link href="/pricing" className='pq-button-flat w-fit'>See Pricing</Link>
            </div>
            
            <div className="relative text-center group">
              <Image src={Intro5} alt="intro" className='transition-all w-full scale-90 absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] group-hover:scale-[0.98]' />
              <Image src={Intro4} alt="intro" className='transition-all xl:block hidden absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-45%]' />
            </div>
          
          </div>
        </Container>
      </section>
      {/* <section className="text-to-image">
        <Container>
          <Row className="flex-column-reverse flex-lg-row align-items-center">
            <Col
              lg={6}
              className="mt-4 mt-xl-0 pe-xl-5 text-lg-start text-center"
            >
              <div className="pq-section-title pq-style-1 pq-mb-30">
                <h5 className="pq-section-main-title mt-lg-0 mt-5">
                  Get Free Credits everyday!
                </h5>
                <p className="pq-section-description">
                  We love your creativity! That's why we're giving away credits to folks who create images. It's simple: you make cool stuff, we give you credits to keep making more. If you're happy with what you've made using our credits, you might want to buy more to keep the creative flow going. It's a win-win: you get to explore your ideas, and we get to support your awesome creations!
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="intro-section-2 position-relative pq-about-us-img">
                <Image src={Intro5} alt="" />
                <Image src={Intro4} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </React.Fragment>
  )
}

export default Information