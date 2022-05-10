import type { NextPage } from 'next'
import Head from 'next/head'
import ExerciseCard from '../components/exerciseCard'
import { getAllExercises } from '../lib/exercises'

const All: NextPage = () => {
  return (
    <div>
      <Head>
        <title>all exercises</title>
      </Head>
      <main className="padded">
        {getAllExercises().map((e) => (
          <ExerciseCard exercise={e} key={"card-" + e.name} />
        ))}
      </main>
    </div>
  );
}

export default All
