import Typography from "typography"

const typography = new Typography({
	baseFontSize: "16px",
	baseLineHeight: 1.8,
	scaleRatio: 2.15,
	blockMarginBottom: 0.75,
	googleFonts: [
		{
			name: "Playfair Display",
			styles: ["400", "500", "600", "700"],
		},
		{
			name: "Lato",
			styles: ["400", "400i", "700", "700i"],
		},
	],
	headerFontFamily: ["Playfair Display", "serif"],
	bodyFontFamily: ["Lato", "sans-serif"],
	headerColor: "hsla(0,0%,0%,1)",
	bodyColor: "hsla(0,0%,0%,0.8)",
	headerWeight: 400,
	bodyWeight: 400,
	boldWeight: 700,
	overrideThemeStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
		h1: {
			...adjustFontSizeTo("5rem"),
			marginBottom: rhythm(1),
			marginTop: rhythm(2),
		},
		"h2,h3": {
			marginBottom: rhythm(1),
			marginTop: rhythm(2),
		},
	}),
})

export default typography
