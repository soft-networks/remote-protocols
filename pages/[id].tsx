import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ExercisePageInternal from '../components/exercisePageInternal'

const ExercisePage: NextPage = () => {
  
  return (
    <div >
      <Head>
        <title>exercise</title>
      </Head>
      <main className="padded">
        <ExercisePageInternal/>
      </main>
    </div>
  )
}


export default ExercisePage
