export default {
    name: 'countrySpecific',
    title: 'Country Specific',
    type: 'object',
    fields: [
      {
        name: 'pageMeta',
        type: 'meta'
      },
      {
        name: 'pageUrl',
        title: 'Country Name',
        type: 'string',
      },
      {
        name: 'countryHero',
        title: 'Country Hero',
        type: 'countryHeroSection',
      },
      {
        name: 'upcomingActivationsSlider',
        title: 'Upcoming Activations Slider',
        type: 'array',
        of: [{type: 'upcomingActivationsCard'}],
      },
      {
        name: 'stakeholderParticipation',
        title: 'Stakeholder Participation',
        type: 'stakeholderParticipationSection',
      },
      {
        name: 'stakeholderEngagement',
        title: 'Stakeholder Engagement',
        type: 'stakeholderEngagementSection',
      },
      {
        name: 'ecoSentiment',
        title: 'Eco Sentiment',
        type: 'ecoSentimentSection',
      },
      {
        name: 'localInsights',
        title: 'Local Insights',
        type: 'localInsightsSection',
      },
      {
        name: 'wasteSector',
        title: 'Waste Sector',
        type: 'wasteSection',
      },
      {
        name: 'videoSectionCountryPage',
        title: 'Video Section Country Page',
        type: 'videoSectionCountry',       
      },      
      {
        name: 'targetSectionCountryPage',
        title: 'Target Section Country Page',
        type: 'targetSection',
      },
      {
        name: 'partnersSection',
        title: 'Partners Section',
        type: 'partnersCountrySection',
      },
      {
        name: 'reportsGuidesSlider',
        title: 'Reports Guides Slider',
        type: 'array',
        of: [{type: 'report'}],
      },
      {
        name: 'actionSlider',
        title: 'Action Slider',
        type: 'array',
        of: [{type: 'action'}],
      },
      {
        name: 'archiveSlider',
        title: 'Archive Slider',
        type: 'array',
        of: [{type: 'archiveSection'}],
      },
      {
        name: 'bigMapSection',
        title: 'Add Big Map Section',
        type: 'bigMapSection'
      }
    ],   
  }