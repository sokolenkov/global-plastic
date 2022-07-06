import Head from 'next/head'

import {  
  MainLayout, 
  TargetSection,
  CountryPresenceSection,
  BigMapSection,
  RegionsSection,
  LinksSection,
} from 'components'

export const getStaticProps = async () => {
  const url =
    'https://185dfub1.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27countryPresenceSection%27]';
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: { page: data.result[0] },
  };
};

export default function Countries({page}) {
  
  return (
    <div className="countries">
      <Head>
        <title>Global Plastic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <TargetSection />
        <CountryPresenceSection data={page} />
        <BigMapSection />
        <RegionsSection />
        <LinksSection />
      </MainLayout>
    </div>
  )
}
