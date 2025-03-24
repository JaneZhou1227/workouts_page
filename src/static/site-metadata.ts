interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://janeworkout.pages.dev/',
  logo: 'https://i.ibb.co/0jDdsCDf/O1-CN01-Bb-Eq-Mb1-Ln8g2-Bd-XBm-2212191151343-jpg-Q75-jpg.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/153749189',
    },
  ],
};

export default data;
