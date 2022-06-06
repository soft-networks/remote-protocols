import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Layout from "../components/layout";
import Oracle from "../components/oracle";
import { getRandomExercise } from "../data/protocols";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="fullBleed cover">
        <div className="medium centerv centerh stack">
          <div className="stack grayFill border padded">
            <p>Your friend is far away, and you miss them. How can you reach them?</p>

            <p>
              It often feels like we are stuck with a few dominant digital platforms that promise us connection but
              leave us feeling sedated and lost. We might start to send a message and get trapped in the sticky mess of
              feeds and ads. We crave intimacy and are encouraged to meet that need by sharing clickbait content to get
              more likes.
            </p>

            <p>
              If “the medium is the message”, what kinds of mediums may bring us closer with each other? Marshall
              McLuhan himself was a mystic who stated, ‘there is no inevitability where there is a willingness to pay
              attention’ (source). May the right medium transmit the message as a small gift, a moment of presence, a
              routine meditation, a sweet something?
            </p>

            <p>
              Here is a deck of intimacy protocols to help you get across. Center yourself in intention and attention
              and choose a card from the deck. Share the protocol with a friend you miss, and follow its instructions
              together. Reflect on how it feels to share signals this way, and share your own signals to add to the
              deck.
            </p>

            <p>
              This project began when two friends far apart decided to send a signal to each other every day. Over two
              weeks, we improvised with different ways to transmit a signal with each other, and we also observed
              whether they made us feel closer as well as the amount of effort it took to send each.
            </p>
          </div>
          <div className="padded stack border">
            <p>a note on accessibility:</p>

            <p>
              the list of possible protocols ranges across digital and analog, synchronous and asynchronous, and various
              body senses. depending on the devices, bandwidth, disabilities, location across time and space, or other
              circumstances that you and your partner have, not all protocols may be applicable.
            </p>

            <p>feel free adapt the instructions as you prefer, or ask the wizard again</p>
          </div>
          <div className="padded stack border">
            <p>by Alice Yuang Zhang x soft networks</p>

            <p>
              Alice Yuan Zhang 张元 (she/her) is a Chinese-American media artist and educator. Her practice operates on
              cyclical and intergenerational time. Along the peripheries of imperialist imagination, she works to bridge
              ecology and technology through ancestral remembering, interspecies pedagogy, and translocal solidarity.
              <br/>
              <a href="https://www.instagram.com/aliceyuanzhang/" target="_blank" rel="noreferrer">
                Instagram
              </a>{" "}
              |{" "}
              <a href="https://twitter.com/aliceyuanzhang/" target="_blank" rel="noreferrer">
                Twitter
              </a>{" "}
              |{" "}
              <a href="https://post.lurk.org/@aliceyuanzhang/" target="_blank" rel="noreferrer">
                Mastodon
              </a>
            </p>

            <p>soft networks is an exploratory design and development studio. We create slow, intimate, tools as a means of imagining alternate futures for social software. 
              <br/>
              <a href="softnet.works/" target="_blank" rel="noreferrer">
                Website
              </a>{" "}
              |{" "}
              <a href="https://www.instagram.com/soft_networks/" target="_blank" rel="noreferrer">
                Instagram
              </a>{" "}
              |{" "}
              <a href="https://twitter.com/soft_networks/" target="_blank" rel="noreferrer">
                Twitter
              </a>{" "}
              |{" "}
  

            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
