import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./img/alexa.png";
import CortanaImage from "./img/cortana.png";
import SiriImage from "./img/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                discription="Alexa is created by Amazon and helps you by things"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Carton"
                handle="@Cartom32"
                image={CortanaImage}
                discription="Cartona was made by Microsoft. Who knows what it is"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                discription="Siri was made by Apple.It is a virtual Assistant"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
