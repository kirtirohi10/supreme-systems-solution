export interface Product {
  slug: string;
  name: string;
  category: 'transformers' | 'inductors' | 'chokes' | 'custom';
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
  industries: string[];
  benefits: string[];
  customizations: string[];
}

export const products: Product[] = [
  {
    slug: 'toroidal-inductors',
    name: 'Toroidal Inductors',
    category: 'inductors',
    tagline: 'High current density and superior electromagnetic shielding in a compact profile.',
    description: 'Our Toroidal Inductors are custom-engineered for maximum efficiency, offering low electromagnetic interference (EMI) and high current handling. They are wound symmetrically on high-permeability cores (iron powder, sendust, or nanocrystalline) to ensure minimal flux leakage and maximum heat dissipation. Suitable for energy storage and noise filtering in high-frequency power electronics.',
    features: [
      'Extremely low electromagnetic radiation due to closed magnetic path',
      'High current density capability with minimal temperature rise',
      'Soft saturation characteristics under transient load conditions',
      'Low DC resistance (DCR) to minimize copper losses',
      'Excellent thermal stability and mechanical robustness'
    ],
    applications: [
      'DC-DC converter energy storage',
      'AC line input filtering and output smoothing',
      'Differential mode noise suppression in solar inverters',
      'Switch Mode Power Supplies (SMPS)',
      'Electric Vehicle (EV) charging control circuits'
    ],
    specifications: [
      { label: 'Inductance Range', value: '0.5 µH to 15 mH' },
      { label: 'Current Rating', value: '1.0 A to 60 A (Up to 120 A for custom builds)' },
      { label: 'Frequency Range', value: '10 kHz to 1.5 MHz' },
      { label: 'Voltage Rating', value: 'Up to 1000 VDC / VAC' },
      { label: 'Operating Temp', value: '-40°C to +155°C (Class H compliance available)' },
      { label: 'Core Material', value: 'Iron Powder, Sendust (Kool Mµ), Nanocrystalline, High-Flux' },
      { label: 'Mounting Type', value: 'Through-hole (PCB Pin/Lead), Chassis Mount, Base Plate Mounted' },
      { label: 'Efficiency Characteristics', value: 'Up to 99.2% depending on frequency and core material' }
    ],
    imageUrl: '/images/products/toroidal-inductor.jpg',
    industries: [
      'Automotive (EV/HEV)',
      'Industrial Automation & Controls',
      'Renewable Energy (Solar/Wind)',
      'Aerospace & Medical Systems',
      'Telecommunications'
    ],
    benefits: [
      'Substantial space savings compared to EI/UI core alternatives',
      'Extremely quiet operation with zero audible magnetostriction hum',
      'Extended lifespan with 100% duty cycle rating under full current'
    ],
    customizations: [
      'Custom turns ratio and custom-sized bobbins/headers',
      'Single or multi-layer copper foil windings for high-frequency skin effect reduction',
      'Specialized potting and encapsulation for high vibration/mil-spec requirements'
    ]
  },
  {
    slug: 'ferrite-drum-bit-inductors',
    name: 'Ferrite Drum & Ferrite Bit Inductors',
    category: 'inductors',
    tagline: 'Cost-effective, high-inductance filtering components with superior RF impedance.',
    description: 'Our Ferrite Drum & Ferrite Bit Inductors are optimized for RF and high-frequency filtering applications. Constructed with high-grade MnZn and NiZn ferrite materials, these drum (pin-type) and bit (axial or surface-mount) inductors provide large inductance in small footprints, making them ideal for decoupling power supply rails and suppressing EMI noise.',
    features: [
      'High self-resonant frequency (SRF) for excellent RF suppression',
      'Compact vertical footprint (drum) or low-profile axial design (bit)',
      'Pre-tinned terminals for reliable wave or reflow soldering',
      'Shrink sleeve insulation option for mechanical and environmental protection',
      'High saturation current core choices'
    ],
    applications: [
      'Power line decoupling and filtering',
      'Signal conditioning and RF blocking',
      'LED driver circuits and electronic ballasts',
      'Consumer electronics power lines (TVs, chargers)',
      'Industrial motor drive control boards'
    ],
    specifications: [
      { label: 'Inductance Range', value: '0.1 µH to 100 mH' },
      { label: 'Current Rating', value: '0.1 A to 15 A' },
      { label: 'Frequency Range', value: '50 kHz to 100 MHz (Optimized for RF/EMI range)' },
      { label: 'Voltage Rating', value: 'Up to 500 VDC' },
      { label: 'Operating Temp', value: '-40°C to +125°C' },
      { label: 'Core Material', value: 'MnZn Ferrite, NiZn Ferrite' },
      { label: 'Mounting Type', value: 'Radial Through-hole (Pins), Axial Lead, Surface Mount (SMD)' },
      { label: 'Efficiency Characteristics', value: 'Low DCR for minimal power dissipation under load' }
    ],
    imageUrl: '/images/products/ferrite-drum-inductor.jpg',
    industries: [
      'Consumer Electronics',
      'LED Lighting',
      'Smart Metering',
      'Industrial Power Supplies'
    ],
    benefits: [
      'Highly economical filtering solution',
      'Excellent high-frequency noise attenuation capability',
      'Rugged structural build prevents damage during board assembly'
    ],
    customizations: [
      'Custom lead lengths, forming, and tape-and-reel packaging',
      'AEC-Q200 qualification options for automotive deployment',
      'Polyester or polyolefin protective sleeve colors and materials'
    ]
  },
  {
    slug: 'current-transformers',
    name: 'Current Transformers',
    category: 'transformers',
    tagline: 'High-precision AC current sensing and monitoring with robust isolation.',
    description: 'Designed for accurate current measurement and control, our Current Transformers (CTs) translate high AC currents into proportional lower currents for metering or protective relay systems. With exceptional turns-ratio accuracy and high dielectric isolation, they are perfect for energy management, motor load monitoring, and leakage current detection.',
    features: [
      'Exceptional linearity across the entire current dynamic range',
      'High galvanic isolation (up to 4.5kV AC) between primary and secondary',
      'Toroidal configuration reduces susceptibility to external magnetic fields',
      'Available in split-core or solid-core geometries',
      'Flame-retardant encapsulation material (UL 94V-0 compliant)'
    ],
    applications: [
      'Smart utility energy meters (sub-metering)',
      'Overcurrent protection relays and safety cut-offs',
      'Motor current monitors and load profile control',
      'HVAC control systems and panel boards',
      'Electric vehicle chargers input power measurement'
    ],
    specifications: [
      { label: 'Inductance Range', value: 'N/A (Turns ratios 1:500 to 1:5000)' },
      { label: 'Current Rating', value: 'Primary: 0.5 A to 1000 A; Secondary: Up to 5 A' },
      { label: 'Frequency Range', value: '45 Hz to 400 Hz (Special designs up to 200 kHz for HF sensing)' },
      { label: 'Voltage Rating', value: '600 VAC (system voltage), dielectric isolation up to 4500 VAC' },
      { label: 'Operating Temp', value: '-40°C to +85°C (Industrial grade)' },
      { label: 'Core Material', value: 'Silicon Steel, Nanocrystalline, Mu-Metal' },
      { label: 'Mounting Type', value: 'PCB Mount (pins), Panel Mount, Busbar Mounted, Flying Leads' },
      { label: 'Efficiency Characteristics', value: 'Ultra-low burden resistance and phase angle error (<0.2°)' }
    ],
    imageUrl: '/images/products/current-transformer.jpg',
    industries: [
      'Power Grid & Smart Metering',
      'Industrial Machinery & Switchgear',
      'Renewable Energy Systems',
      'Building Management Systems'
    ],
    benefits: [
      'Highly precise billing-grade accuracy (Class 0.1, 0.2, or 0.5)',
      'Maintains measurement integrity under extreme environmental conditions',
      'Completely safe output scaling protects sensitive processor circuits'
    ],
    customizations: [
      'Custom turns ratios, burden resistor integration, and output voltages',
      'Chassis brackets, din-rail mount, or custom lead wire specs',
      'Tailored physical dimensions to fit compact busbar spaces'
    ]
  },
  {
    slug: 'common-mode-chokes',
    name: 'Common Mode Chokes (CMC)',
    category: 'chokes',
    tagline: 'Superior common-mode noise suppression with minimal signal attenuation.',
    description: 'Our Common Mode Chokes (CMCs) are designed to eliminate electromagnetic and radio-frequency interference (EMI/RFI) in AC mains and DC signal lines. Wound with precision balance on high-permeability cores, they provide massive common-mode impedance while maintaining high signal integrity for differential currents.',
    features: [
      'Broadband attenuation matching CISPR and FCC specifications',
      'Extremely low leakage inductance to avoid differential signal distortion',
      'Symmetric, double-winding structures with high insulation separation',
      'Low parasitic capacitance for extended high-frequency performance',
      'Compact footprint, available in sector or bifilar winding'
    ],
    applications: [
      'Input EMI filters for SMPS (AC/DC converters)',
      'Variable frequency drive (VFD) noise suppression',
      'CAN bus, USB, and ethernet signal line noise filters',
      'Solar inverter line noise suppression',
      'Telecom and data exchange equipment'
    ],
    specifications: [
      { label: 'Inductance Range', value: '0.2 mH to 120 mH' },
      { label: 'Current Rating', value: '0.2 A to 40 A' },
      { label: 'Frequency Range', value: '10 kHz to 50 MHz' },
      { label: 'Voltage Rating', value: '250 VAC, 400 VDC (Higher voltages on custom builds)' },
      { label: 'Operating Temp', value: '-40°C to +125°C' },
      { label: 'Core Material', value: 'High Permeability Nanocrystalline, MnZn Ferrite' },
      { label: 'Mounting Type', value: 'Vertical through-hole, Horizontal through-hole, SMD' },
      { label: 'Efficiency Characteristics', value: 'Excellent thermal dissipation with low DCR' }
    ],
    imageUrl: '/images/products/common-mode-choke.jpg',
    industries: [
      'Power Supplies & UPS Systems',
      'Industrial Process Control',
      'Telecommunications & IT Infrastructure',
      'Electric Vehicles & Charging Stations'
    ],
    benefits: [
      'Achieves regulatory EMC compliance (CE, FCC, CISPR) quickly',
      'Reduces system-level filter footprint by replacing multiple filters',
      'Protects sensitive downstream circuits from voltage surges and transients'
    ],
    customizations: [
      'Nanocrystalline vs Ferrite core material comparison based on temperature',
      'Bifilar vs Sector winding configuration for high or low leakage requirements',
      'Custom headers, pin counts, and plastic casing molds'
    ]
  },
  {
    slug: 'switching-transformers',
    name: 'Switching Transformers',
    category: 'transformers',
    tagline: 'High-frequency, high-efficiency power transformers for modern SMPS designs.',
    description: 'Our Switching Transformers are the heart of Switch Mode Power Supplies (SMPS). Designed to operate at high frequencies (up to 500 kHz), they perform voltage step-up/step-down, power transfer, and galvanic isolation. Manufactured with high-frequency ferrite cores and precision sandwich winding to minimize leakage inductance and proximity effect losses.',
    features: [
      'Wound using Litz wire or copper foil for reduced skin effect losses',
      'Very low leakage inductance (<1% of primary inductance)',
      'High creepage and clearance distances for safety compliance',
      'Reinforced insulation option (triple-insulated wire - TIW)',
      'Optimized core geometries (EE, ETD, EFD, PQ, RM, Toroidal)'
    ],
    applications: [
      'Flyback, Forward, Half-bridge, and Full-bridge SMPS',
      'LED Lighting and backlight power drivers',
      'Industrial machinery controls and auxiliary power units (APU)',
      'Medical equipment power supplies',
      'Telecom power systems (-48VDC converters)'
    ],
    specifications: [
      { label: 'Inductance Range', value: '10 µH to 10 mH' },
      { label: 'Current Rating', value: 'Secondary output currents up to 80 A' },
      { label: 'Frequency Range', value: '20 kHz to 500 kHz' },
      { label: 'Voltage Rating', value: 'Isolation strength up to 4000 VAC (Primary to Secondary)' },
      { label: 'Operating Temp', value: '-40°C to +130°C (Class B/F insulation standard)' },
      { label: 'Core Material', value: 'High-frequency MnZn Ferrite (PC40/PC44 equivalent)' },
      { label: 'Mounting Type', value: 'Horizontal Through-hole, Vertical Through-hole, SMD' },
      { label: 'Efficiency Characteristics', value: 'Typical efficiency from 92% to 98%' }
    ],
    imageUrl: '/images/products/switching-transformer.jpg',
    industries: [
      'Power Electronics & SMPS Manufacturers',
      'Medical Devices (IEC 60601 compliant)',
      'Telecommunications',
      'Industrial Controls & Instrumentation'
    ],
    benefits: [
      'Ultra-compact profile yields significant weight reductions',
      'Exceptionally low electromagnetic interference (EMI) signature',
      'Tested at high-pot (4kV) to guarantee user safety and isolation'
    ],
    customizations: [
      'Custom bobbin designs, multi-output configurations, and auxiliary taps',
      'Vacuum pressure impregnation (VPI) varnish or potting for low audible noise',
      'Complete planar transformer designs for low-profile applications'
    ]
  },
  {
    slug: 'step-down-transformers',
    name: 'Step Down Transformers',
    category: 'transformers',
    tagline: 'Reliable step-down linear transformers utilizing high-grade silicon steel laminated cores.',
    description: 'Our Step Down Transformers utilize premium silicon steel laminations to convert high-voltage AC mains power to lower AC voltages for linear power supplies, control boards, and consumer devices. Wound with high-grade copper magnet wire and encapsulated for humidity and thermal protection, they ensure stable power transfer with excellent voltage regulation and high dielectric isolation.',
    features: [
      'High-grade EI/UI silicon steel laminated cores for low core loss',
      'Excellent load and line regulation under continuous duty cycles',
      'Vacuum varnished or fully encapsulated for moisture and noise insulation',
      'PCB pins or flying leads mounting configuration options',
      'Thermal protection fuses integrated for safe failure mode'
    ],
    applications: [
      'Linear power supply designs',
      'Industrial control panels and electrical cabinets',
      'Home appliances and white goods electronics',
      'Audio amplifiers and analog equipment power rails',
      'Security system panels and door controllers'
    ],
    specifications: [
      { label: 'Inductance Range', value: 'N/A (Primary input winding designed for 50/60 Hz impedance)' },
      { label: 'Current Rating', value: 'Output currents from 0.05 A up to 20 A' },
      { label: 'Frequency Range', value: '50 Hz / 60 Hz' },
      { label: 'Voltage Rating', value: 'Primary: 110V/220V/230V/440V AC; Secondary: 6V to 48V AC (including center-tapped options)' },
      { label: 'Operating Temp', value: '-25°C to +85°C (Class B insulation standard)' },
      { label: 'Core Material', value: 'Laminated Silicon Steel (EI or UI frame)' },
      { label: 'Mounting Type', value: 'PCB Pin Through-hole, Chassis Mount (Brackets), DIN Rail Mount' },
      { label: 'Efficiency Characteristics', value: 'Typical efficiency from 80% to 92% depending on VA size' }
    ],
    imageUrl: '/images/products/step-down-transformer.jpg',
    industries: [
      'Industrial Automation & Controls',
      'Consumer Appliances',
      'Security & Building Safety',
      'Professional Audio Equipment'
    ],
    benefits: [
      'Extremely low electrical noise, making them ideal for sensitive analog circuits',
      'Inherently robust against high-voltage surges and line transients',
      'Long operational lifetime with virtually no degradation over decades of use'
    ],
    customizations: [
      'Multi-tapped primary and secondary outputs (e.g., 230/18-0-18, 220/0-9V)',
      'Custom frame sizes, copper shielding foil, and brackets',
      'Waterproof encapsulated housing for extreme industrial settings'
    ]
  },
  {
    slug: 'line-filter-chokes',
    name: 'Line Filter Chokes',
    category: 'chokes',
    tagline: 'High-attenuation line filters for clean mains power and suppression of electromagnetic emissions.',
    description: 'Our Line Filter Chokes are engineered to suppress electromagnetic interference (EMI) and radio-frequency noise (RFI) from power lines. They filter out common-mode and differential-mode noise, protecting sensitive downstream circuits from grid pollution and ensuring the product complies with international EMC regulations (FCC, CE, CISPR).',
    features: [
      'Broadband noise attenuation across the 10 kHz to 30 MHz range',
      'Low leakage inductance to prevent differential signal distortion',
      'Very low DC resistance (DCR) to minimize conduction losses',
      'Vacuum impregnated or custom bobbin header designs',
      'High dielectric strength between windings'
    ],
    applications: [
      'Switch Mode Power Supplies (SMPS) input noise suppression',
      'Industrial motor drive control boards and VFD input stages',
      'Solar inverters grid-tie filtering',
      'Medical equipment mains noise filtration',
      'IT and telecommunication equipment cabinet filters'
    ],
    specifications: [
      { label: 'Inductance Range', value: '0.5 mH to 100 mH' },
      { label: 'Current Rating', value: '0.5 A to 30 A (High current chassis versions up to 80 A)' },
      { label: 'Frequency Range', value: '10 kHz to 30 MHz' },
      { label: 'Voltage Rating', value: '250 VAC / 400 VDC (Tested up to 2500 VAC isolation)' },
      { label: 'Operating Temp', value: '-40°C to +125°C' },
      { label: 'Core Material', value: 'MnZn Ferrite, Nanocrystalline, Sendust' },
      { label: 'Mounting Type', value: 'Vertical through-hole PCB, Horizontal through-hole PCB, Chassis mount' },
      { label: 'Efficiency Characteristics', value: 'Ultra-low power dissipation due to optimized copper filling factor' }
    ],
    imageUrl: '/images/products/line-filter-choke.jpg',
    industries: [
      'Power Supplies & UPS',
      'Industrial Electronics',
      'Medical Electronics',
      'Renewable Energy Grid Tie Systems'
    ],
    benefits: [
      'Ensures fast and cheap path to FCC, CE, and CISPR EMC compliance',
      'Robust protection against mains surges and high-frequency spikes',
      'Compact footprint leaves more room for core electronics layout'
    ],
    customizations: [
      'Custom winding configuration (bifilar or sectional winding)',
      'Custom plastic header spacing to match existing PCB footprint layouts',
      'Nanocrystalline cores for space-constrained high-temperature applications'
    ]
  }
];
