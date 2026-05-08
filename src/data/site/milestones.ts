export interface Milestone {
  year: string;
  title: string;
  description: string;
  photo?: string;
}

export const milestones: Milestone[] = [
  {
    year: '2002',
    title: 'First PC',
    description:
      'Got my first personal computer — a moment that sparked a lifelong passion for technology, tinkering with hardware, and exploring what software could do.',
    photo: '/astro-01.webp',
  },
  {
    year: '2009',
    title: 'Finished National College & Started University',
    description:
      'Graduated from national college and enrolled in university to pursue a formal education in computer science, laying the academic foundation for a career in software engineering.',
    photo: '/astro-02.jpeg',
  },
  {
    year: '2014',
    title: 'First IT Employment Contract',
    description:
      'Signed my first professional IT contract, stepping into the industry as a software developer and beginning a decade-long journey building production systems across multiple domains.',
  },
  {
    year: '2019',
    title: 'Founded My IT Consulting Business',
    description:
      'Launched an independent IT consulting business, bringing together years of hands-on engineering experience to deliver solutions for clients across fintech, telecom, and enterprise sectors.',
  },
];
