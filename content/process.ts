export type ProcessStep = {
  number: string;
  name: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    name: 'Strategy',
    description: 'Understanding your brand, audience, and objectives.',
  },
  {
    number: '02',
    name: 'Production',
    description: 'Executing shoots with attention to lighting and composition.',
  },
  {
    number: '03',
    name: 'Post',
    description: 'Refining through editing, sound design, and color.',
  },
];
