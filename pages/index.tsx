import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Oracle from '../components/oracle'
import { getRandomExercise } from '../lib/exercises'

const Home: NextPage = () => {
  
  return (
    <main className="fullBleed padded center">
      <Head>
        <title>exercises for two</title>
      </Head>
      <Oracle/>      
      </main>
  )
}

export default Home
