import Layout from "../../../layouts/views/page"
import Banner from "../../../components/banner/views/banner"
import Gallery from "../../../components/galerie/views/galerie"
import "../assets/styles/home.css"

const Home = () => {
    return <Layout>
        <div className="home">
            <Banner imageUrl="/public/assets/imgBanner.png" text="Chez vous, partout et ailleurs" />
            <Gallery/>
        </div>
    </Layout>
}

export default Home
