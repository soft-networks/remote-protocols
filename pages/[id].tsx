import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ExercisePageInternal from '../components/exercisePageInternal'

const ExercisePage: NextPage = () => {
  
  return (
    <main className="padded">
      <Head>
        <title>exercise</title>
      </Head>  
      <ExercisePageInternal/>
    </main>
    
  )
}


export default ExercisePage
