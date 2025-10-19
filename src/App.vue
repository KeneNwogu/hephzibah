<template>
  <NavBar />
  <router-view></router-view>
  

  <!-- Footer -->
  <FooterSection />
</template>

<script setup>
// import FeatureCard from "./components/FeatureCard.vue";
import NavBar from "./components/NavBar.vue";
// import MegaLaunch from "./components/MegaLaunch.vue";
// import ScrollingBanner from "./components/ScrollingBanner.vue";
// import Gino1 from "./assets/exhibition/gino/gino-1.png";
// import Gino2 from "./assets/exhibition/gino/gino-2.png";
// import Gino3 from "./assets/exhibition/gino/gino-3.png";
// import Gino4 from "./assets/exhibition/gino/gino-4.png";
// import Gino5 from "./assets/exhibition/gino/gino-5.png";
// import Gino6 from "./assets/exhibition/gino/gino-6.png";

// import Bama1 from "./assets/exhibition/bama/bama-1.png";
// import Bama2 from "./assets/exhibition/bama/bama-2.png";
// import Bama3 from "./assets/exhibition/bama/bama-3.png";
// import Bama4 from "./assets/exhibition/bama/bama-4.png";
// import Bama5 from "./assets/exhibition/bama/bama-5.png";
// import FAQSection from "./components/FAQSection.vue";
import FooterSection from "./components/landing/FooterSection.vue";

// const ginoImages = [Gino1, Gino2, Gino3, Gino4, Gino5, Gino6];
// const bamaImages = [Bama1, Bama2, Bama3, Bama4, Bama5];

// const metrics = [
//   { value: "20+", label: "Years in Business" },
//   { value: "150+", label: "Campaigns Delivered" },
//   { value: "5.8M", label: "Impressions Generated" },
//   { value: "90%", label: "Client Retention Rate" },
// ];

// const features = [
//   {
//     title: "Experiential Marketing",
//     features: [
//       "Brand Activation & Consumer Research",
//       "POSM Merchandising & Deployment Conference & Event Management",
//     ],
//     bgColor: "#098CEF",
//     textColor: "#FFFFFF",
//   },
//   {
//     title: "ATL (Above-The-Line)",
//     features: [
//       "Advertising (TV, Radio, Print)",
//       "Public Relations",
//       "Strategic Media Monitoring",
//       "Digital Profiling & Marketing Media Buying & Placement",
//     ],
//     textColor: "#02121F",
//     bgColor: "#D6EDFF",
//   },
//   {
//     title: "Public Relations",
//     features: [
//       "Media Relations & Press Releases",
//       "Crisis Communication Support Influencer & Stakeholder Engagement",
//       "Thought Leadership Positioning",
//     ],
//     bgColor: "#098CEF",
//     textColor: "white",
//   },
//   {
//     title: "Digital Production",
//     features: [
//       "Outdoor LED Content & Management",
//       "Video Production & Editing",
//       "3D Animation & Motion Graphics",
//       "Corporate Communication Materials",
//     ],
//     textColor: "#252525",
//     bgColor: "#D6EDFF",
//   },
// ];
</script>

<style>
#first-section {
  background: url("./assets/first-section-hero.png");
  height: 700px;
  /* background-position: 20% 100%;   */
}

img {
  max-width: 100%;
}

#grotesque {
  font-family: "Bricolage Grotesque", sans-serif;
}
</style>
