import Head from 'next/head'

import {  
  MainLayout, 
  HeroSection, 
  SliderSection, 
  CardSection, 
  WideSliderSection, 
  TargetSection, 
  SponsorsSection
} from 'components'

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Global Plastic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <HeroSection />
        <SliderSection />
        <CardSection />
        <WideSliderSection />
        <TargetSection />
        <SponsorsSection />
      </MainLayout>
    </div>
  )
}
