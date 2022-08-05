import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className=" text-primary-100 font-regular text-2xl">
        <p>We might have some problem...</p>
        <p>
          It's okay, no need to cry, you just found our Missing Pages (yeaay). 
          {' '} <section className='text-primary-300'>
          <a href="https:/vodea.id">Click here to visit home!</a>
          </section>
        </p>
      </section>
    </Layout>
  );
}