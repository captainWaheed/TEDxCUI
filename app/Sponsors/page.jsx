import React from "react";
import SponsorDetails from "./SponsorDetails"; // Import your SponsorDetails component

const sponsors = [
  {
    name: "E Educator",
    logoSrc: "/Educators.jpg", // Replace with the actual logo URL
    introduction:
      "At TEDxCUI, we're all about knowledge and growth, and that's why we're thrilled to have E Educator as our Gold Sponsor 📚. E Educator is a dynamic and innovative online e-learning platform dedicated to empowering individuals with the knowledge and skills they need to unlock their full potential. TEDxCUI is excited to partner with E Educator, a platform that's all about helping people grow and learn in the digital age that e-learning is all about making learning an enriching and transformative experience for everyone. Their commitment to providing accessible, high-quality education aligns perfectly with TEDxCUI's mission to inspire and educate. Join them in their mission to make learning a dynamic and innovative experience.Thank you, @eeducators, for being part of our educational journey. 🌱",
    sponsorType: "Gold", // You can set the type as needed
    website: "www.eeducators.org",
    instagram: "https://instagram.com/eeducators?igshid=MzRlODBiNWFlZA==",
    facebook: "https://www.facebook.com/eeducatorsofficial?mibextid=ZbWKwL"
  },
  {
    name: "DevHawks",
    logoSrc: "/DevHawks.png", // Replace with the actual logo URL
    introduction:
      "DevHawks is a tech startup that offers services in Web Development, Machine Learning, and Mobile Development. We're not just about business; we're committed to education too. Our goal is to prepare students for the tech industry by providing practical training in these cutting-edge technologies. We take pride in our flagship product, CyberWatch, an AI-powered Social Media moderation system. It's designed to make online spaces safer by monitoring and managing content effectively. But our mission goes beyond that. We believe in nurturing job creators, not just job seekers. That's why we partner with universities and mentor Final Year Project students, helping them turn their ideas into innovative solutions. At DevHawks, we're not just a startup; we're a movement dedicated to transforming education, fostering innovation, and empowering the next generation of tech leaders. Join us in building a future where possibilities are limitless.",
    sponsorType: "Platinum", // You can set the type as needed
    website: "https://devhawks.org/",
    twitter: "https://twitter.com/HawksDevHQ",
    linkedin: "https://www.linkedin.com/company/devhawks/",
    instagram: "https://www.instagram.com/dev_hawks/?igshid=MmU2YjMzNjRlOQ%3D%3D"
  },
  {
    name: "Alif The Band",
    logoSrc: "/alif.png", // Replace with the actual logo URL
    introduction:
      "TEDxCUI is honored to have Alif The Band as our Music Partner🎸. Get ready for a musical journey that will resonate deep within your soul. These Sufi-Rock enthusiasts are all set to rock your world with their fusion of melodies that blend tradition with modernity. A special thanks to @alif_the_band_ for being with us for our Tedx event. With a unique sound that's both electrifying and emotionally stirring, Alif The Band promises to set the stage on fire and leave you enchanted. Their dedication to their craft is an inspiration, and we can't wait to share their spellbinding melodies with our audience. Prepare to be moved, A huge round of applause to Alif The Band. 🌍🔥",
    sponsorType: "Music Partner", // You can set the type as needed
    website: "#",
    instagram: "https://www.instagram.com/alif_the_band_/",
    facebook: "#"
  }
];
const isBuilding = true;

function App() {
  if (isBuilding) {
    return <h1>Heading for Production</h1>;
  }

  return (
    <div>
      {sponsors.map((sponsor, index) => (
        <SponsorDetails
          key={index}
          name={sponsor.name}
          logoSrc={sponsor.logoSrc}
          introduction={sponsor.introduction}
          sponsorType={sponsor.sponsorType}
          website={sponsor.website}
          instagram={sponsor.instagram}
          facebook={sponsor.facebook}
        />
      ))}
    </div>
  );
}

export default App;
