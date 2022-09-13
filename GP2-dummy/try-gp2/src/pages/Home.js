import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import Jumbotrons from "../component/jumbotron";
import Carousels from "../component/carousel";

const Home = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "#DCDCDC" }}>
        <NavbarNav />
        <Jumbotrons />
        <Carousels />
        <a href="/Product" style={{ fontSize: "1.5vw", marginLeft: "40%" }}>
          🡸Klik disini untuk produk lainnya 🡺
        </a>
        <Footer />
      </div>
    </>
  );
};

export default Home;
