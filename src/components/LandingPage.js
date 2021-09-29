import "../Styles/LandingPage.css";
import NavBar from "./NavBar";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className="lp">
        <section>
          <div className="creators">
              <div>
            <h1>for creators</h1>
            </div>
            <div id = 'cc-div'>
                <section className = 'cc-container'><h3>create layer names</h3></section>
                <section className = 'cc-container'><h3>upload same size png assets</h3></section>
                <section className = 'cc-container'><h3>imput rarity and mint amount</h3></section>
                <section className = 'cc-container'><h3>mint,auto-list,revenue + royalties</h3></section>
            </div>
          </div>
        </section>
        <section className="right">
          <div className="connect">
            <h1>connect wallet</h1>
          </div>
          <div className="collectors">
              <div> 
                <h1>for collectors</h1>
              </div>
              <div id = 'cc-div'>
              <section className = 'cc-container'><h3>browse generative drops</h3></section>
              <section className = 'cc-container'><h3>get drops</h3></section>
              <section className = 'cc-container'><h3>resell on market place</h3></section>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
