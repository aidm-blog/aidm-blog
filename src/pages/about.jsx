import React from 'react';
import Layout from '../layout';
// import logo from '../../static/favicons/logo.png';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        {/* <img src={logo} className="user-avatar" alt="AIDM-logo" /> */}
        <section className="about-context">
          <div>
            <h1>ABOUT</h1>
            <p className="markdowm-body">
              We are a group of Writers, Journalists, Engineers and Artists dedicated to telling the truth to the masses
              via different art forms including memes, sketches, and articles.
            </p>
            <p className="markdowm-body">
              No matter odds, we always believe that truth needs to be said with the loudest voice possible. Therefore
              we strive to bring it in the form of satire, jokes, rants and in every other form understandable to human
              beings.
            </p>
            <p className="markdowm-body">
              To quote the Verbatim: &quot; If the whole world is telling you, that something wrong is something right.
              If the whole world is telling you to move. It is your duty, to plant yourself like a tree, beside the
              river of river of river of truth, look the entire world in the eye and say,
              <strong> NO. You Move. </strong>
              &quot;.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
