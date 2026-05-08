export interface Milestone {
  year: string;
  title: string;
  description: string;
  photo?: string;
}

export const milestones: Milestone[] = [
  {
    year: '2002',
    title: 'Script Kiddie',
    description:
      'I was 12y old when I got my first PC, was also one of the first in town to have an internet cable connection — a moment that sparked a lifelong passion for tinkering with computer hardware and software.',
    photo: '/timeline/hard.jpg',
  },
  {
    year: '2009',
    title: 'Finished College & Started University',
    description:
      'Graduated from national college in Mathematics & Informatics and enrolled in higher education to pursue a formal education in computer science, laying the academic foundation for a career in IT.',
    photo: '/timeline/atestat.jpeg',
  },
  {
    year: '2014',
    title: 'First IT Employment Contract',
    description:
      'Signed my first professional IT contract, stepping into the industry as a web developer and beginning a decade-long journey building production  systems across multiple domains.',
    photo: '/timeline/first-contract.jpeg',
  },
  {
    year: '2019',
    title: 'Founded an IT Consulting Business',
    description:
      'Launched an independent IT consulting business, bringing together years of hands-on engineering experience to deliver solutions for clients across fintech, telecom, and enterprise sectors.',
    photo: '/timeline/business-certificate.jpeg',
  },
];
