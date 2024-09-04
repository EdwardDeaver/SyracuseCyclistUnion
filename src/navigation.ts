import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'About',
      href: '/about',
    },
  ],
  actions: [{ text: '2024 Demographic Survey', href: '/StateOfCyclingSurvey24', target: '_blank' }],
};

export const footerData = {
  links: [
    
    {
      title: 'Syracuse Cyclists Union',
      links: [
        { text: 'About', href: '/about' },
      ],
    },
  ],


  footNote: `
 All rights reserved.
  `,
};
