import Head from 'next/head';
import NavBar from '../components/navBar/navBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hireish</title>
        <link rel="icon" href="/Hireish.png" />
      </Head>
      <div>
        <NavBar/>
      </div>
    </>
  )
}
