import Head from 'next/head'

import {  
  MainLayout, 
  CountryHero,
  UpcomingActivationsSection,
  TargetSection,
} from 'components'

export const getServerSideProps = async () => {
    const url =
      'https://185dfub1.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27countries%27]';
    const response = await fetch(url);
    const data = await response.json();
    if (!data) {
      return { notFound: true };
    }
    return {
      props: { page: data.result[0] },
    };
  };

export default function Country({page}) {
  
  return (
    <div className="country">
      <Head>
        <title>Global Plastic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <CountryHero />
        <UpcomingActivationsSection data={page} />
        <TargetSection />
      </MainLayout>
    </div>
  )
}