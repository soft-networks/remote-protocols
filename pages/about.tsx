import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Layouts/header";
import Layout from "../components/Layouts/layout";
import Oracle from "../components/PageInternal/Oracle";
import { getRandomExercise } from "../data/protocols";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="fullBleed cover">
        <div className="medium centerv centerh stack">
          <div className="stack grayFill border padded">
            <p>Your friend is far away, and you miss them. How can you reach them?</p>

            <p>
            It often feels like we are stuck with a few dominant digital platforms that promise us connection but leave us feeling sedated and lost. We might start to send a message and get trapped in the sticky mess of feeds and ads. We crave intimacy and are encouraged to meet that need by sharing  content to get more likes. 
            </p>

            <p>
            1:1 is a set of remote connection protocols to help you reach someone from a distance. Ground yourself with intention and attention and ask the wizard to select a protocol. Share this protocol with your remote peer and follow its instructions to experiment together. Reflect on how it feels to share signals this way, and add your own protocol ideas to the collection. What kinds of protocols may bring us closer with each other? Would they move us to transmit a small gift, a moment of presence, a routine meditation, a sweet something?
            </p>

            <p>
            This project began when two friends far apart decided to send a signal to each other every day for two weeks. We improvised with different ways to transmit this signal and observed whether they made us feel closer as well as the amount of effort it took to send each. 
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
            <p>Bios</p>

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
              </a>{" "}
              |{" "}
              <a href="https://aliceyuanzhang.com/" target="_blank" rel="noreferrer">
                Website
              </a>
            </p>

            <p>soft networks is an exploratory design and development studio. We create slow, intimate, tools as a means of imagining alternate futures for social software. 
              <br/>
              <a href="https://softnet.works/" target="_blank" rel="noreferrer">
                Website
              </a>{" "}
              |{" "}
              <a href="https://www.instagram.com/soft_networks/" target="_blank" rel="noreferrer">
                Instagram
              </a>{" "}
              |{" "}
              <a href="https://twitter.com/soft_networks/" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
