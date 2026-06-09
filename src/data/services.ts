export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  imageUrl?: string;
}

export const services: Service[] = [
  {
    id: 'custom-design',
    title: 'Custom Transformer Design',
    imageUrl: '/images/services/custom-design.png',
    shortDesc: 'Tailor-made transformer configurations optimized for specific frequency, voltage, and space requirements.',
    fullDesc: 'Our engineering team utilizes advanced computer modeling and electromagnetic design software to simulate and design custom transformers that achieve peak electrical efficiency, compact sizes, and optimal thermal management for your system layout.',
    features: [
      'Core size and shape selection (EE, RM, PQ, Ring, etc.)',
      'Advanced winding layout optimizations for minimized leakage inductance',
      'Litz wire and copper foil integration for high-frequency skin effect management',
      'Thermal simulation and cooling pathway design'
    ]
  },
  {
    id: 'product-development',
    title: 'Product Development',
    imageUrl: '/images/services/product-development.png',
    shortDesc: 'Transforming custom coil concepts into robust, manufacturable magnetic products.',
    fullDesc: 'We bridge the gap between design and physical product. Our product development process focuses on Design for Manufacturability (DFM), ensuring that your customized magnetic components can be manufactured reliably, repeatedly, and cost-effectively.',
    features: [
      'BOM (Bill of Materials) optimization for cost and durability',
      'Tooling and fixture development for custom coil windings',
      'Compliance assessment (IEC, UL, RoHS, REACH) during design phase',
      'Failure Mode and Effects Analysis (FMEA)'
    ]
  },
  {
    id: 'prototype-manufacturing',
    title: 'Prototype Manufacturing',
    imageUrl: '/images/services/prototype-manufacturing.png',
    shortDesc: 'Rapid turnaround physical prototypes for testing, debugging, and initial validation.',
    fullDesc: 'We offer rapid prototyping services to deliver physical samples of your custom magnetics quickly. This allows your engineering team to test, measure, and validate performance in the target circuit before committing to tooling and production.',
    features: [
      'Quick-turn sample manufacturing (typically 7-10 working days)',
      '3D-printed bobbin and housing options for rapid mechanical checks',
      'Complete lab characterization reports provided with samples',
      'Iterative design optimization based on board testing results'
    ]
  },
  {
    id: 'mass-production',
    title: 'Mass Production',
    imageUrl: '/images/services/mass-production.png',
    shortDesc: 'High-volume production facility with automatic winding and assembly lines.',
    fullDesc: 'Our Gurugram facility is equipped with automated and semi-automated coil winding machines, insulation wrapping gear, automatic soldering pots, and vacuum varnish impregnation chambers. We handle production runs from small-batch specialized lots to high-volume commercial quantities.',
    features: [
      'Automated multi-spindle CNC winding machines',
      'Vacuum impregnation for superior insulation and moisture resistance',
      'Rigid assembly line quality control checkpoints',
      'Scalable production shifts to meet urgent demand peaks'
    ]
  },
  {
    id: 'testing-qa',
    title: 'Testing & Quality Assurance',
    imageUrl: '/images/services/testing-qa.png',
    shortDesc: 'Comprehensive electrical, insulation, and reliability testing of all components.',
    fullDesc: 'Quality is at the core of Supreme Systems Solution. We perform 100% testing on all outgoing transformers and inductors. Our QA lab is equipped with advanced testing instruments to check inductance, turns ratio, leakage inductance, DC resistance, and high-voltage dielectric strength.',
    features: [
      'High-pot (dielectric breakdown) testing up to 5kV AC/DC',
      'Impulse surge testers to check winding insulation integrity',
      'LCR meters for precise inductance, DCR, and leakage checks',
      'Thermal chambers for burn-in and environment cycle testing'
    ]
  },
  {
    id: 'technical-consultation',
    title: 'Technical Consultation',
    imageUrl: '/images/services/technical-consultation.png',
    shortDesc: 'Expert consultation on core selection, EMI mitigation, and thermal management.',
    fullDesc: 'Our senior magnetics experts are available to consult on complex power supply designs. We help resolve issues like overheating inductors, high electromagnetic noise (EMI), and saturation issues, providing concrete solutions and component recommendations.',
    features: [
      'EMI/EMC troubleshooting and design review',
      'Core material selection analysis (Amorphous vs Ferrite vs Sendust)',
      'Magnetic loss calculations and efficiency studies',
      'Cooperative design workshops with client engineering teams'
    ]
  }
];
