import Head from 'next/head';
import Link from 'next/link';
import JokeCard from '../components/JokeCard';

export default function Home() {
  return (
    <div className="min-h-scree p-8">
      <Head>
        <title>Chuck Norris Jokes</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Chuck Norris Jokes
      </h1>
      <div className="flex justify-center mb-4">
        <JokeCard />
      </div>
      <div className="text-center">
        <Link href="/favorites">My favorites list</Link>
      </div>
    </div>
  );
}
