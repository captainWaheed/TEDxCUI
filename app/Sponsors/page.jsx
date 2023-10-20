import React from "react";
import SponsorDetails from "./SponsorDetails";

const sponsors = [
  {
    name: "Stella Technology",
    logoSrc: "/Stella.png",
    introduction:
      "Stella, our esteemed Diamond Sponsor, symbolizes brilliance and innovation. Stella Technologies is the leading provider of integration and collaboration solutions for the next generation, 'healthcare-connected' network.",
    sponsorType: "Stella Diamond"
  },
  {
    name: "E Educator",
    logoSrc: "/Educators.jpg",
    introduction:
      "E Educator is our Gold Sponsor. They are a dynamic and innovative online e-learning platform dedicated to empowering individuals with the knowledge and skills they need to unlock their full potential.",
    sponsorType: "Gold",
    website: "www.eeducators.org",
    instagram: "https://instagram.com/eeducators?igshid=MzRlODBiNWFlZA=="
  },
  {
    name: "DevHawks",
    logoSrc: "/DevHawks.png",
    introduction:
      "DevHawks is a tech startup offering services in Web Development, Machine Learning, and Mobile Development. They are our Platinum Sponsor.",
    sponsorType: "Platinum",
    website: "https://devhawks.org",
    twitter: "https://twitter.com/HawksDevHQ",
    linkedin: "https://www.linkedin.com/company/devhawks/",
    instagram: "https://www.instagram.com/dev_hawks/?igshid=MmU2YjMzNjRlOQ%3D%3D"
  },
  {
    name: "iSEO Ranker",
    logoSrc: "/iSEORanker.png",
    introduction:
      "iSEO Ranker is also a Platinum Sponsor with over a decade of experience in the ever-evolving digital world. They are more than just a digital agency.",
    sponsorType: "Platinum",
    website: "https://www.facebook.com/officialiseoranker",
    twitter: "https://twitter.com/iseoranker?s=11",
    linkedin: "https://www.linkedin.com/company/iseo-ranker/",
    instagram: "https://www.instagram.com/iseoranker/?igshid=MzRlODBiNWFlZA%3D%3D"
  },
  {
    name: "Cheezious",
    logoSrc: "/cheezious.png",
    introduction:
      "TEDxCUI is proud to partner with Cheezious as their Food Partner, a culinary brand that embodies the heart and soul of Pakistani flavor. With the motto of 'Spreading Cheezy Khushiyan', their delicious offerings are set to delight your taste buds and warm your heart.",
    sponsorType: "Food Partner"
  },
  {
    name: "Alif The Band",
    logoSrc: "/alif.png",
    introduction:
      "TEDxCUI is honored to have Alif The Band as our Music Partner. Get ready for a musical journey that will resonate deep within your soul.",
    sponsorType: "Music Partner",
    instagram: "https://www.instagram.com/alif_the_band_/"
  }
];

const isBuilding = false;

function App() {
  if (isBuilding) {
    return <h1>Heading for Production</h1>;
  }

  const diamondSponsor = sponsors.find((sponsor) => sponsor.sponsorType === "Stella Diamond");
  const otherSponsors = sponsors.filter((sponsor) => sponsor.sponsorType !== "Stella Diamond");
  return (
    <div>
      <SponsorDetails
        name={diamondSponsor.name}
        logoSrc={diamondSponsor.logoSrc}
        introduction={diamondSponsor.introduction}
        sponsorType={diamondSponsor.sponsorType}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", margin: 0 }}>
        {otherSponsors.map((sponsor, index) => (
          <SponsorDetails
            key={index}
            name={sponsor.name}
            logoSrc={sponsor.logoSrc}
            introduction={sponsor.introduction}
            sponsorType={sponsor.sponsorType}
            website={sponsor.website}
            instagram={sponsor.instagram}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
