import React from "react"
import "../../style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "./helpers/AnimationRevealPage"
import About from "./AboutSection"// Good
import Header from "./Header" // Good
import Footer from ".//MiniCenteredFooter"// Good
import Features from "./FeatureSection" // Good
import FAQSection from "./FAQSection" //Good
import CTASection from "./JoinVinylSection" // Good



const LandingPage = () => {
  return (
    <AnimationRevealPage disabled >
      <div >
        <Header />
      </div>
      <About />
      <AnimationRevealPage >
        <Features />
      </AnimationRevealPage>
      <CTASection />
      <Footer />
    </AnimationRevealPage>
  )
}

export default LandingPage