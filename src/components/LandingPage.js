import "../Styles/LandingPage.css";
import NavBar from "./NavBar";
import TopNavBar from "./TopNavBar";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <TopNavBar/>
      <div className="lp">
        <section>
          <div className="creators">
              <div className = 'creator-container'>
            <h1>For Creators</h1>
              <img className = 'lp-img'src = 'https://res.cloudinary.com/kevin14/image/upload/v1633022077/gena_j9nr2v.png'/>
            </div>
            <div id = 'cc-div'>
                <section className = 'cc-container'><h3 id = 'list'>create layer names</h3></section>
                <section className = 'cc-container'><h3 id = 'list'>upload same size png assets</h3></section>
                <section className = 'cc-container'><h3 id = 'list'>imput rarity and mint amount</h3></section>
                <section className = 'cc-container'><h3 id = 'list'>mint,auto-list,revenue + royalties</h3></section>
            </div>
          </div>
        </section>
       
          <div className="collectors">
              <div className = 'collector-container'> 
                <h1>For Collectors</h1>
                <img className = 'lp-img' src = 'https://res.cloudinary.com/kevin14/image/upload/v1633022073/drop_wxel1b.png'/>
              </div>
              <div id = 'cc-div'>
              <section className = 'cc-container'><h3 id = 'list'>browse generative drops</h3></section>
              <section className = 'cc-container'><h3 id = 'list'>get drops</h3></section>
              <section className = 'cc-container'><h3 id = 'list'>resell on market place</h3></section>
              </div>
          </div>
       
      </div>
    </div>
  );
}

export default LandingPage;
