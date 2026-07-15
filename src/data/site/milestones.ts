export interface Milestone {
  year: string;
  title: string;
  description: string;
  photo?: string;
}

export const milestones: Milestone[] = [
  {
    year: '2002',
    title: 'The Script Kiddie',
    description:
      'I stopped using my parent\'s 386 work computer when I was 12y old and got my first PC, being one of the first in town to have an internet cable connection — a moment that sparked a lifelong passion for tinkering with computer hardware and software.',
    photo: '/timeline/hard.jpg',
  },
  {
    year: '2009',
    title: 'Finished College & Started University',
    description:
      'Graduated from national college in Mathematics & Informatics and further pursued an education in computer science, laying the academic foundation for a career in IT.',
    photo: '/timeline/atestat.jpeg',
  },
  {
    year: '2014',
    title: 'First IT Employment Contract',
    description:
      'Signed my first professional IT contract after some gigs, officially stepping into the industry as a web developer and beginning a decade-long journey building production apps across multiple domains.',
    photo: '/timeline/first-contract.jpeg',
  },
  {
    year: '2019',
    title: 'started an IT Consulting Business',
    description:
      'Launched an independent IT consulting business, bringing together years of hands-on engineering experience to deliver solutions for clients across diverse enterprise sectors.',
    photo: '/timeline/business-certificate.jpeg',
  },
];
