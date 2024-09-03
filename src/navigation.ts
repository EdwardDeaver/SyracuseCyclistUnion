import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Blog',
      href:getBlogPermalink()
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
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],


  footNote: `
 All rights reserved.
  `,
};
