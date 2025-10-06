import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Welcome from "../components/Welcome.jsx";
import AboutArunachal from "../components/AboutArunachal.jsx";
import AboutNIT from "../components/AboutNIT.jsx";
import AboutDepartment from "../components/AboutDepartment.jsx";
import Registration from "../components/Registration.jsx";
import InvitationLetter from "../components/Visa.jsx";
import PaperSubmission from "../components/Submission.jsx";
import ProjectDownloads from "../components/Program.jsx";
import Committee from "../components/Committee.jsx";
import KeynoteSpeakers from "../components/KeyNote.jsx";
import Sponsorship from "../components/Sponshorship.jsx";
import TravelAccommodation from "../components/Travel.jsx";
import CallForPapers from "../components/CallForPapers.jsx";
import Footer from "../components/Footer.jsx";
import KeydatesAwardsPublications from "../components/KeydatesAwardsPublication.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";


export default function UnifiedClone() {
  return (
    <div className="font-sans">
      <Header />
      <main className="pt-15">
        <Hero />
        <KeydatesAwardsPublications/>
        <Welcome />
        <AboutArunachal/>
        <AboutNIT/>
        <AboutDepartment/>
        <Registration/>
        <CallForPapers/>
        <InvitationLetter/>
        <PaperSubmission/>
        <ProjectDownloads/>
        <Committee />
        <KeynoteSpeakers/>
        <Sponsorship/>
        <TravelAccommodation/>
        <ScrollToTop/>
        <Footer/>
      </main>
    </div>
  );
}
