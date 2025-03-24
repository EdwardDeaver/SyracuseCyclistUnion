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
    {
      text: '2024 Survey Results',
      href: '/StateOfCyclingSurvey24',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
  actions: [{ text: '2025 Demographic Survey', href: '/StateOfCyclingSurvey25', target: '_blank' }],
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

  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/syracusecyclistsunion' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  email: {org name} @gmail.com
  <br>

 All rights reserved.
  `,
};
