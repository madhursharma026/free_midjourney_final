import Information from "./components/Home/Information"
import HowToGenerate from "./components/Home/HowToGenerate"
import Faq from "./components/Home/Faq"
import Blog from "./components/Home/Blog"
import SearchInput from "./components/Home/SearchInput";
import Container from "./components/Ui/Container";
import InformationTwoSection from "./components/Home/Information-2";

export default function Home () {
  return (
    <>
      {/* <BottomNotification /> */}
      {/* <AnimationHero /> */}
      <section className="min-h-screen flex items-center relative p-0 bg-dark-2 bg-[url('../assets/images/hero-bg.webp')] bg-no-repeat bg-center bg-cover">
        <Container>
          <div className="hero-content mb-14 text-center" id="heroContentDiv">
            <h1 className="font-Mona_EB lg:text-7xl md:text-6xl text-3xl bg-[linear-gradient(180deg,_#56a3d9_40%,_#7b7b7b00_100%)] bg-clip-text inline-block mb-2 text-transparent">FreeMidJourney</h1>
            {/* <span>Powered by Free midjourney</span> */}
            <h2 className="xl:text-6xl lg:text-5xl md:text-3xl text-xl mb-4 tracking-wider font-Mona_EB text-white">Transforming words into images.</h2>
            <p className="text-white my-0 mx-auto xl:max-w-4xl lg:max-w-3xl text-base">
            Free AI art wonders await with Free MidJourney - the imaginative portal for free AI image generation that manifests your wildest creative visions into visually stunning scenes. 
            </p>
          </div>
          <SearchInput />
        </Container>
      </section>
      <Information />
      <HowToGenerate />
      <InformationTwoSection />
      <Faq />
      <Blog />
    </>
  );
}
