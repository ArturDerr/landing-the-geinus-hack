import React, { useEffect } from "react"
import { Header } from "./components/header"
import { MainSection } from "./components/MainSection"
import { AboutSection } from "./components/AboutSection"
import { PartSection } from "./components/PartSection"
import { PrizesSection } from "./components/PrizesSection"
import { CaseSection } from "./components/CaseSection"
import { OrganazierSection } from "./components/OrganazierSection"
import { FaqSection } from "./components/FaqSection"
import { Footer } from "./components/Footer"
import { FooterImage } from "./shared/FooterImage"

function Landing() {
  return (
    <body>
      <Header />
      <MainSection />
      <AboutSection />
      <PartSection />
      <PrizesSection />
      <CaseSection />
      <OrganazierSection />
      <FaqSection />
      <FooterImage />
      <Footer />
    </body>
  )
}

export default Landing
