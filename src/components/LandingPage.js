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
            <div>
                <section><h3>create layer names</h3></section>
                <section><h3>upload sane size png assets</h3></section>
                <section><h3>imput rarity and mint amount</h3></section>
                <section><h3>mint,auto-list,revenue + royalties</h3></section>
            </div>
          </div>
        </section>
        <section className="right">
          <div className="connect">
            <h1>connect wallet</h1>
          </div>
          <div className="collectors">
            <h1>for collectors</h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
