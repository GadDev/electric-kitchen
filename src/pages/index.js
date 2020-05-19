import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Menu from "../components/menu/menu"
import Instagram from "../components/instagram"
import LeafletMap from "../components/leafletMap"
import Footer from "../components/footer"
// import TitleHero from "../ui/atoms/TitleHero"
import firebase from "gatsby-plugin-firebase"

const IndexPage = ({ data }) => {
    const [dataAnalytics, setDataAnalytics] = React.useState(null)

    React.useEffect(() => {
        firebase
            .database()
            .ref("/user")
            .once("value")

            .then(snapshot => {
                setDataAnalytics(snapshot.val())
                console.log(dataAnalytics)
            })
    }, [dataAnalytics])
    return (
        <Layout>
            <SEO title="Home" />
            <section className="hero">
                <Img
                    fluid={data.restaurantHero.childImageSharp.fluid}
                    className="hero-image"
                />
                {/* <TitleHero title="Electric Kitchen" /> */}
                <h1 style={{ zIndex: 1, fontSize: "3rem", color: "white" }}>
                    Electric Kitchen
                </h1>
            </section>
            <section className="container">
                <span className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </span>
                <div className="gallery-grid">
                    <Img
                        fluid={data.couscous.childImageSharp.fluid}
                        className="gallery-img1"
                    />
                    <Img
                        fluid={data.ceviche.childImageSharp.fluid}
                        className="gallery-img2"
                    />
                    <Img
                        fluid={data.portrait.childImageSharp.fluid}
                        className="gallery-img3"
                    />
                    <Img
                        fluid={data.portrait.childImageSharp.fluid}
                        className="gallery-img4"
                    />
                    <Img
                        fluid={data.ceviche.childImageSharp.fluid}
                        className="gallery-img5"
                    />
                    <Img
                        fluid={data.couscous.childImageSharp.fluid}
                        className="gallery-img6"
                    />
                </div>
                <div className="about-grid">
                    <h2>WE'RE CRAZY ABOUT ELECTRIC CUISINE</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </section>
            <div className="parallax"></div>
            <section className="container">
                <Menu />
                <Instagram />
            </section>
            {typeof window !== "undefined" && (
                <LeafletMap
                    position={[55.952103, -3.196175]} // Your Coordinates
                    zoom={18} // Zoom Level
                    markerText={"Local Cafe, 65 Park Row"} // Icon text
                />
            )}
            <Footer />
        </Layout>
    )
}

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

export const pageQuery = graphql`
    query {
        restaurantHero: file(relativePath: { eq: "hero.jpeg" }) {
            ...fluidImage
        }
        portrait: file(relativePath: { eq: "portrait.jpg" }) {
            ...fluidImage
        }
        couscous: file(relativePath: { eq: "img-2.jpeg" }) {
            ...fluidImage
        }
        ceviche: file(relativePath: { eq: "img-3.jpeg" }) {
            ...fluidImage
        }
    }
`

export default IndexPage
