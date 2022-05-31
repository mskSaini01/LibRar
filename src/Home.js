import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./Nav.js";
import Login from "./Login.js";
import background from "./images/pexels-polina-zimmerman-3747468.jpg";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (

    <div style={myStyle}>

      <Nav/>
      <Login/>
    </div>
  );
};
export default Home;
