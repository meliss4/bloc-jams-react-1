import React from 'react';

const Landing = () => (
  <section className="landing">
  <div className="logo">
  <img className="logo-img" src='assets/images/bloc_jams_logo.png' alt="Bloc Jams Banner" />
     <h5 className="hero-title">Turn the music up!</h5>
     </div>

    <div className="point col-sm-4">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
    </div>

      <div className="point col-sm-4">
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>

      <div className="point col-sm-4">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>

  </section>
);

export default Landing;