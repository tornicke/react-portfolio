import React from "react";

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div class="container">
        <div class="box">
          <h3>
            "Study Buddy" - generate diverse study groups for student cohorts
          </h3>
          <img
            src="./assets/images/Screenshot 1 project 2.png"
            alt="Study Buddy app screenshot"
          />
          <br></br>
          <div>
            "Study Buddy" a full-stack web application that allows users to
            upload a list of students and then distribute them in diverse study
            groups. The application uses the model-view-controller paradigm,
            includes user authentication and connects to a MySQL database.
          </div>
          <br></br>
          <div>
            {" "}
            <a href="https://study-buddy-10178.herokuapp.com/">
              Deployed application
            </a>
          </div>
          <div>
            {" "}
            <a href="https://github.com/HenniePenny/Study-Buddy/">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="box">
          <h3>
            "Field Potato" - countless ways to move you from couch to field{" "}
          </h3>{" "}
          <img
            src="./assets/images/Screenshot5.png"
            alt="Field Potato app screenshot"
          />
          <div>
            "Field Potato" is a front-end interactive and responsive application
            that utilizes two server-side APIs. The app promotes movement and
            doing activities outside the user's home, hence the name "Field
            Potato", in contrast to "couch potato". The "Field Potato" app
            allows users to look up information about TV shows and save the
            shows to their list. Each show is accompanied with a mystery
            activity, which users can reveal. Users can generate new activities
            if they are not happy with the first suggestion. Faced with a
            decision between spending more time in front of the TV or getting
            out of their comfort zone, we hope many of our users will be
            inspired to explore the field.
          </div>
          <br></br>
          <div>
            {" "}
            <a href="https://tornicke.github.io/field-potato/">
              Deployed application
            </a>
          </div>
          <div>
            {" "}
            <a href="https://github.com/tornicke/field-potato/">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="box">
          <h3>"PWA Text Editor" - edit your text easily in the browser </h3>{" "}
          <img
            src="./assets/images/Screenshot-PWA-Text-Editor.png"
            alt="Text Editor app screenshot"
          />
          <div>
            This is a single-page application thar runs in the browser and meets
            the PWA criteria. The app allows you to edit text online and
            offline. The app can be downloaded and installed on all computers.
          </div>
          <br></br>
          <div>
            {" "}
            <a href="https://pwa-text-editor-7.herokuapp.com/">
              Deployed application
            </a>
          </div>
          <div>
            {" "}
            <a href="https://github.com/tornicke/pwa-text-editor">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="box">
          <h3>"Note Taker" - take and manage your notes </h3>{" "}
          <img
            src="./assets/images/Screenshot-Note-Taker.png"
            alt="Note Taker app screenshot"
          />
          <div>
            "Note Taker" allows you to write and save notes. This application
            uses an Express.js back-end and saves and retrieves note data from a
            JSON file.
          </div>
          <br></br>
          <div>
            {" "}
            <a href="http://express-note-taker-t.herokuapp.com/">
              Deployed application
            </a>
          </div>
          <div>
            {" "}
            <a href="https://github.com/tornicke/note-taker/">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="box">
          <h3>
            "Weather Dashboard" - check the weather forecast for your city{" "}
          </h3>{" "}
          <img
            src="./assets/images/Screenshot-Weather-Dashboard.png"
            alt="Weather Dashboard app screenshot"
          />
          <div>
            "Weather Dashboard" is an app that runs in the browser and features
            dynamically updated HTML and CSS. The app uses the{" "}
            <a href="https://openweathermap.org/api/one-call-api/">
              OpenWeather One Call API
            </a>
            to retrieve weather data for various locations. The app will store
            the weather information for the most recently looked up five cities.
          </div>
          <br></br>
          <div>
            {" "}
            <a href="https://tornicke.github.io/weather-dashboard/">
              Deployed application
            </a>
          </div>
          <div>
            {" "}
            <a href="https://github.com/tornicke/weather-dashboard/">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="box">
          <h3>"Password Generator" - generate random passwords </h3>{" "}
          <img
            src="./assets/images/Screenshot-Password-Generator.jpeg"
            alt="Password Generator app screenshot"
          />
          <div>
            "Password Generator" is an application that enables users to
            generate random passwords based on criteria that they have selected.
            This app runs in the browser and features dynamically updated HTML
            and CSS.
          </div>
          <br></br>
          <div>
            {" "}
            <a href="https://tornicke.github.io/password-generator/">
              Deployed application
            </a>
          </div>
          <div>
            {" "}
            <a href="https://github.com/tornicke/password-generator/">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
