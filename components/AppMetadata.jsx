const author = "Abdul Waheed";
const description = "A front-end developer from Pakistan";
const url = "";
export const AppMetadata = {
	title: {
		default: "TEDx CUI"
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: ["TEDxCUI", "COMSATS", "TED Event", "Islamabad university"],
	creator: author,
	authors: [{ name: author, url: url }]
	// openGraph: {
	// 	title: `${author} | Portfolio`,
	// 	description: description,
	// 	url: url,
	// 	siteName: `${author} | Portfolio`,
	// 	images: [
	// 		{
	// 			url: "https://vasile-novatchii.netlify.app/screenshot.webp",
	// 			width: 800,
	// 			height: 600,
	// 			alt: "My personal portfolio website"
	// 		},
	// 		{
	// 			url: "https://vasile-novatchii.netlify.app/screenshot.webp",
	// 			width: 1800,
	// 			height: 1600,
	// 			alt: "My personal portfolio website"
	// 		}
	// 	],
	// 	locale: "en-US",
	// 	type: "website"
	// }
};
