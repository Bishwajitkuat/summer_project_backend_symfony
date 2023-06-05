import React from "react";
import { Link } from "react-router-dom";

function WhatToDoHelsinki(props) {
  return (
    <div className="info">
      <h1 className="title">Welcome to Helsinki!</h1>
      <div className="eventDescription">
        <section className="textBox">
          <h2>Explore the Sights</h2>
          <p>
            Helsinki, the vibrant capital city of Finland, offers a perfect
            blend of rich history, stunning architecture, and breathtaking
            nature. Explore the iconic landmarks such as the majestic Helsinki
            Cathedral or the unique Temppeliaukio Church carved into solid rock.
            Take a leisurely stroll along the beautiful waterfront promenade of
            Esplanadi, or venture into the charming neighborhoods like Kallio or
            Punavuori, known for their trendy shops, cozy cafes, and vibrant
            nightlife.
          </p>

          <h4>Usefull links:</h4>
          <p>
            <Link
              to={"https://www.myhelsinki.fi/en/see-and-do/sights"}
              target={"_blank"}
              className={"linkSeeMore"}
            >
              Top 15 sights in Helsinki
            </Link>
          </p>
        </section>

        <section className="textBox">
          <h2>Savor Culinary Delights</h2>
          <p>
            Helsinki's diverse culinary scene will satisfy your taste buds.
            Indulge in traditional Finnish dishes like salmon soup and reindeer,
            or explore international cuisines. The city offers a wide range of
            gastronomic delights, from trendy restaurants to street food
            markets. Don't forget to try the local specialty, a delicious
            cinnamon bun known as "korvapuusti."
          </p>
          <h4>Usefull links:</h4>
          <p>
            <Link
              to={
                "https://www.myhelsinki.fi/en/eat-and-drink/restaurants/the-10-best-restaurants-in-finland-in-2023"
              }
              target={"_blank"}
              className={"linkSeeMore"}
            >
              The 10 best restaurants in Finland in 2023
            </Link>
          </p>
          <p>
            <Link
              to={
                "https://www.myhelsinki.fi/en/eat-and-drink/caf%C3%A9s/caf%C3%A9s-by-the-seaside"
              }
              target={"_blank"}
              className={"linkSeeMore"}
            >
              Cafés by the seaside{" "}
            </Link>
          </p>
        </section>

        <section className="textBox">
          <h2>Connect with Nature</h2>
          <p>
            Nature enthusiasts will find solace in Helsinki's picturesque parks
            and green spaces. Escape the hustle and bustle of the city and enjoy
            the tranquility of the Central Park or the serene Suomenlinna Sea
            Fortress, a UNESCO World Heritage site. Explore the surrounding
            islands, go for a bike ride along the coastal paths, or simply relax
            by the seaside. Helsinki's nature is waiting to be discovered.
          </p>

          <h4>Usefull links:</h4>
          <p>
            <Link
              to={
                "https://www.myhelsinki.fi/en/see-and-do/enjoy-beautiful-nature-in-helsinki"
              }
              target={"_blank"}
              className={"linkSeeMore"}
            >
              Enjoy beautiful nature in Helsinki
            </Link>
          </p>
        </section>

        <section className="textBox">
          <h2>Experience Vibrant City Life</h2>
          <p>
            Helsinki offers a vibrant city life with a mix of modern attractions
            and events. Explore the bustling market squares like Market Square
            or Hakaniemi Market Hall, where you can find fresh local produce,
            handicrafts, and souvenirs. Experience the lively nightlife in the
            city's bars, clubs, and live music venues. Don't forget to take part
            in the Finnish sauna tradition and rejuvenate both body and mind.
          </p>
          <h4>Usefull links:</h4>
          <p>
            <Link
              to={
                "https://www.myhelsinki.fi/en/eat-and-drink/bars-and-nightlife"
              }
              target={"_blank"}
              className={"linkSeeMore"}
            >
              Bars and Nightlife The clubber’s guide to Helsinki
            </Link>
          </p>
        </section>
        <section className="textBox">
          <p>
            Whether you're interested in history, art, nature, food, or simply
            enjoying the vibrant city life, Helsinki has something for everyone.
            So, get ready to explore, discover, and create unforgettable
            memories in this captivating Nordic capital. Welcome to Helsinki,
            your gateway to unforgettable experiences!
          </p>
        </section>
      </div>
    </div>
  );
}

export default WhatToDoHelsinki;
