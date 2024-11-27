export const CASE_STUDIES_TEXT = {
  META: {
    TITLE: 'AI-Powered Case Studies - BGLaw',
    DESCRIPTION: 'Explore how we leverage AI technology to achieve exceptional outcomes in complex legal cases.',
  },
  HERO: {
    TITLE: 'Case Studies',
    DESCRIPTION: 'Discover how our AI-powered legal strategies have helped clients achieve remarkable outcomes.',
  },
  CASES: [
    {
      title: 'AI-Driven Accident Reconstruction',
      description: 'Using advanced AI algorithms to reconstruct a complex multi-vehicle accident, leading to a favorable settlement.',
      outcome: '$2.5M Settlement',
      category: 'Auto Accident',
      icon: 'car' as const,
      highlights: [
        'Advanced AI reconstruction',
        'Multiple vehicle analysis',
        'Favorable settlement achieved'
      ]
    },
    {
      title: 'Predictive Analysis in Medical Malpractice',
      description: 'Leveraging machine learning to analyze thousands of similar cases and predict optimal settlement ranges.',
      outcome: '$3.8M Settlement',
      category: 'Medical Malpractice',
      icon: 'medical' as const,
      highlights: [
        'ML-based case analysis',
        'Optimal settlement prediction',
        'Successful negotiation'
      ]
    },
    {
      title: 'Data-Driven Workplace Safety',
      description: 'Using AI to analyze workplace safety patterns and establish negligence in a construction accident case.',
      outcome: '$1.9M Settlement',
      category: 'Workplace Injury',
      icon: 'hardhat' as const,
      highlights: [
        'Safety pattern analysis',
        'Negligence establishment',
        'Fair compensation secured'
      ]
    },
  ],
  LABELS: {
    CATEGORY: 'Category:',
    OUTCOME: 'Outcome:',
    READ_MORE: 'Read Full Case Study',
  },
}
