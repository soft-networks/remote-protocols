import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Layout from "../components/layout";
import Oracle from "../components/oracle";
import { getRandomExercise } from "../lib/exercises";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="fullBleed center">
        <div className="narrow stack whiteFill border padded">
          <p>Your friend is far away, and you miss them. How can you reach them?</p>

          <p>
            It often feels like we are stuck with a few dominant digital platforms that promise us connection but leave
            us feeling sedated and lost. We might start to send a message and get trapped in the sticky mess of feeds
            and ads. We crave intimacy and are encouraged to meet that need by sharing clickbait content to get more
            likes.
          </p>

          <p>
            If “the medium is the message”, what kinds of mediums may bring us closer with each other? Marshall McLuhan
            himself was a mystic who stated, ‘there is no inevitability where there is a willingness to pay attention’
            (source). May the right medium transmit the message as a small gift, a moment of presence, a routine
            meditation, a sweet something?
          </p>

          <p>
            Here is a deck of intimacy protocols to help you get across. Center yourself in intention and attention and
            choose a card from the deck. Share the protocol with a friend you miss, and follow its instructions
            together. Reflect on how it feels to share signals this way, and share your own signals to add to the deck.
          </p>

          <p>
            This project began when two friends far apart decided to send a signal to each other every day. Over two
            weeks, we improvised with different ways to transmit a signal with each other, and we also observed whether
            they made us feel closer as well as the amount of effort it took to send each.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
