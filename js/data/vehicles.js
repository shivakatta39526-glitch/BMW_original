/**
 * BMW Vehicle Data Architecture
 * Centralized Single Source of Truth for Models across all categories:
 * M (High Performance), i (Electric), X (SAV / SAC), Series (Sedans / Coupés), Z (Roadster)
 */

window.BMW_DATA = window.BMW_DATA || {};

window.BMW_DATA.vehicles = [
    // --- BMW M PERFORMANCE MODELS ---
    {
        id: 'm2',
        name: 'BMW M2 Coupé',
        category: 'M',
        type: 'core',
        tagline: 'Pure M Dynamics. Compact Dominance.',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
        description: 'The most agile and dynamic M model ever engineered. A compact powerhouse featuring a motorsport-derived twin-turbo inline-6, rear-wheel drive purism, and razor-sharp chassis tuning.',
        performance: {
            hp: 453,
            acceleration: '3.9s',
            topSpeed: '177 mph',
            engine: '3.0L BMW M TwinPower Turbo Inline 6-Cylinder',
            drivetrain: 'Rear-Wheel Drive (Manual or M Steptronic)',
            torque: '406 lb-ft'
        },
        electricRange: null,
        price: 63200,
        fuelEconomy: '16 / 24 mpg',
        colors: [
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Zandvoort Blue', hex: '#6AAAC9', price: 650, previewTone: 'hue-rotate(185deg) saturate(1.2)' },
            { name: 'Toronto Red Metallic', hex: '#B81414', price: 650, previewTone: 'hue-rotate(330deg) saturate(1.4)' },
            { name: 'Brooklyn Grey Metallic', hex: '#7E8388', price: 650, previewTone: 'saturate(0.4) contrast(1.1)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '19"/20" M Light Alloy Double-Spoke 930 M (Black)', size: '19" Front / 20" Rear', price: 0 },
            { id: 'w2', name: '19"/20" M Light Alloy Double-Spoke 930 M (Bicolor)', size: '19" Front / 20" Rear', price: 1200 },
            { id: 'w3', name: 'M Performance Lightweight Forged 963 M (Frozen Gunmetal)', size: '19" Front / 20" Rear', price: 3400 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Vernasca Leather with M Color Highlights', hex: '#1C1C1E', material: 'Vernasca Leather', price: 0 },
            { id: 'i2', name: 'Cognac Vernasca Leather with Contrast Stitching', hex: '#8B5A2B', material: 'Vernasca Leather', price: 1450 },
            { id: 'i3', name: 'M Carbon Bucket Seats in Black Full Merino with M Tricolor', hex: '#101012', material: 'Full Merino / Carbon Fiber', price: 4500 }
        ],
        features: [
            'Active M Differential with variable locking from 0 to 100%',
            'M Compound Brakes with blue 6-piston fixed calipers',
            'BMW Curved Display running BMW Operating System 8.5',
            'M Drive Professional with 10-stage M Traction Control & Drift Analyzer'
        ]
    },
    {
        id: 'm3',
        name: 'BMW M3 Competition Sedan',
        category: 'M',
        type: 'core',
        tagline: 'The Definitive High-Performance Sports Sedan.',
        image: 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?auto=format&fit=crop&w=1600&q=85',
        description: 'Born from motorsport heritage, refined for daily dominance. The BMW M3 Competition pairs aggressive aerodynamically sculpted bodywork with an unrelenting 503-horsepower twin-turbo power plant.',
        performance: {
            hp: 503,
            acceleration: '3.4s',
            topSpeed: '180 mph',
            engine: '3.0L BMW M TwinPower Turbo S58 Inline-6',
            drivetrain: 'M xDrive Intelligent All-Wheel Drive',
            torque: '479 lb-ft'
        },
        electricRange: null,
        price: 80200,
        fuelEconomy: '16 / 23 mpg',
        colors: [
            { name: 'Isle of Man Green Metallic', hex: '#1E4D3B', price: 650, previewTone: 'hue-rotate(120deg) saturate(1.3)' },
            { name: 'Sao Paulo Yellow', hex: '#D2DB39', price: 650, previewTone: 'hue-rotate(60deg) saturate(1.5)' },
            { name: 'Frozen Portimao Blue Metallic', hex: '#1C3A68', price: 3600, previewTone: 'hue-rotate(200deg) saturate(1.4)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '19"/20" M Double-Spoke Style 826 M (Jet Black)', size: '19" Front / 20" Rear', price: 0 },
            { id: 'w2', name: '19"/20" M Double-Spoke Style 826 M (Bicolor)', size: '19" Front / 20" Rear', price: 1300 },
            { id: 'w3', name: '19"/20" M Performance Forged Style 1000 M (Gold Bronze)', size: '19" Front / 20" Rear', price: 4200 }
        ],
        interiors: [
            { id: 'i1', name: 'Kyalami Orange / Black Extended Merino Leather', hex: '#C2511E', material: 'Extended Merino Leather', price: 0 },
            { id: 'i2', name: 'Silverstone / Black Extended Merino Leather', hex: '#A8ADB3', material: 'Extended Merino Leather', price: 0 },
            { id: 'i3', name: 'M Carbon Bucket Seats in Yas Marina Blue / Black', hex: '#1A5A88', material: 'Full Merino Leather & Carbon', price: 4500 }
        ],
        features: [
            'M xDrive with configurable 4WD, 4WD Sport, and 2WD pure rear-drive modes',
            'Carbon Fiber Roof panel lowering the vehicle center of gravity',
            'Harman Kardon® 16-speaker Surround Sound System',
            'M Carbon Ceramic Brake Package with gold metallic calipers'
        ]
    },
    {
        id: 'm4',
        name: 'BMW M4 Competition Coupé',
        category: 'M',
        type: 'core',
        tagline: 'Sculpted Precision. Track-Bred Silhouette.',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85',
        description: 'Sculpted for speed and aerodynamic excellence. The M4 Coupé fuses dramatic athletic proportions with a track-tested cooling package and instantaneous high-rpm torque.',
        performance: {
            hp: 503,
            acceleration: '3.4s',
            topSpeed: '180 mph',
            engine: '3.0L BMW M TwinPower Turbo High-Revving S58',
            drivetrain: 'M xDrive All-Wheel Drive with 2WD mode',
            torque: '479 lb-ft'
        },
        electricRange: null,
        price: 83200,
        fuelEconomy: '16 / 23 mpg',
        colors: [
            { name: 'Fire Orange III', hex: '#E25816', price: 4500, previewTone: 'hue-rotate(25deg) saturate(1.8)' },
            { name: 'Frozen Deep Grey Metallic', hex: '#484C51', price: 3600, previewTone: 'saturate(0.2) brightness(0.7)' },
            { name: 'Tanzanite Blue II Metallic', hex: '#162C4E', price: 1500, previewTone: 'hue-rotate(210deg) saturate(1.3)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '19"/20" M Star-Spoke Style 825 M (Bicolor Orbit Grey)', size: '19" Front / 20" Rear', price: 0 },
            { id: 'w2', name: '19"/20" M Double-Spoke Style 826 M (Jet Black)', size: '19" Front / 20" Rear', price: 1300 },
            { id: 'w3', name: 'M Performance Center-Lock Forged Wheels (Satin Black)', size: '20" Front / 21" Rear', price: 4900 }
        ],
        interiors: [
            { id: 'i1', name: 'Fiona Red / Black Extended Merino Leather', hex: '#9B1E22', material: 'Extended Merino Leather', price: 0 },
            { id: 'i2', name: 'Tartufo Full Merino Leather', hex: '#7A4822', material: 'Full Merino Leather', price: 2550 },
            { id: 'i3', name: 'Black Full Merino Leather with Carbon Trim', hex: '#1C1C1E', material: 'Full Merino Leather', price: 2550 }
        ],
        features: [
            'CFRP Carbon-Fiber Reinforced Plastic Roof and aerodynamic diffuser',
            'Laserlight headlights with iconic blue accenting and adaptive beam',
            'BMW M Head-Up Display with shift lights and track mode telemetry',
            'Adaptive M Suspension with electronically controlled dampers'
        ]
    },
    {
        id: 'm5',
        name: 'BMW M5 Sedan',
        category: 'M',
        type: 'hybrid',
        tagline: 'V8 Electrified Super-Sedan. Supreme Authority.',
        image: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=1600&q=85',
        description: 'The monumental benchmark of executive super-sedans. An electrified M TwinPower Turbo 4.4L V8 engine combines with a synchronous electric motor to generate a staggering 717 total horsepower.',
        performance: {
            hp: 717,
            acceleration: '3.1s',
            topSpeed: '190 mph',
            engine: '4.4L M TwinPower Turbo V8 + High-Output Electric Motor',
            drivetrain: 'M xDrive All-Wheel Drive with 2WD Track Mode',
            torque: '738 lb-ft'
        },
        electricRange: 25,
        price: 119500,
        fuelEconomy: 'Electric + Gas Hybrid',
        colors: [
            { name: 'Marina Bay Blue Metallic', hex: '#134E9B', price: 650, previewTone: 'hue-rotate(205deg) saturate(1.4)' },
            { name: 'Isle of Man Green Metallic', hex: '#1E4D3B', price: 650, previewTone: 'hue-rotate(120deg) saturate(1.3)' },
            { name: 'Frozen Deep Grey', hex: '#484C51', price: 3600, previewTone: 'saturate(0.2) brightness(0.7)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Carbon Black Metallic', hex: '#11141B', price: 650, previewTone: 'brightness(0.4) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '20"/21" M Double-Spoke Style 951 M (Bicolor)', size: '20" Front / 21" Rear', price: 0 },
            { id: 'w2', name: '20"/21" M Double-Spoke Style 951 M (Jet Black)', size: '20" Front / 21" Rear', price: 1500 },
            { id: 'w3', name: '20"/21" M Light Alloy Style 952 M (Dark Titanium)', size: '20" Front / 21" Rear', price: 2800 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Extended Merino Leather', hex: '#18181A', material: 'Extended Merino Leather', price: 0 },
            { id: 'i2', name: 'Silverstone II / Black Merino Leather', hex: '#B2B7BE', material: 'Full Merino Leather', price: 2500 },
            { id: 'i3', name: 'Deep Lagoon / Black Full Merino Luxury Interior', hex: '#1A3F47', material: 'Exclusive Bi-Color Merino', price: 3800 }
        ],
        features: [
            'Electrified M Hybrid Drivetrain with zero-emission pure EV city driving',
            'Integral Active Steering with up to 2.5° rear-wheel steering angle',
            'Bowers & Wilkins Diamond Surround Sound with 18 speakers',
            'Panoramic Sky Lounge Roof or lightweight Carbon Fiber Roof option'
        ]
    },
    {
        id: 'm8',
        name: 'BMW M8 Competition Gran Coupé',
        category: 'M',
        type: 'core',
        tagline: 'Supercar Performance Encased in Haute Couture.',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85',
        description: 'The pinnacle grand tourer. The M8 Competition Gran Coupé delivers devastating twin-turbo V8 thrust enveloped in a dramatic elongated 4-door silhouette with bespoke luxury craftsmanship.',
        performance: {
            hp: 617,
            acceleration: '3.0s',
            topSpeed: '190 mph',
            engine: '4.4L BMW M TwinPower Turbo V8 32-Valve',
            drivetrain: 'M xDrive with Rear-Biased Dynamic Torque Split',
            torque: '553 lb-ft'
        },
        electricRange: null,
        price: 138800,
        fuelEconomy: '15 / 22 mpg',
        colors: [
            { name: 'Aventurine Red Metallic', hex: '#631822', price: 1950, previewTone: 'hue-rotate(340deg) saturate(1.4)' },
            { name: 'Tanzanite Blue II Metallic', hex: '#162C4E', price: 1950, previewTone: 'hue-rotate(210deg) saturate(1.3)' },
            { name: 'Frozen Pure Grey Metallic', hex: '#5E6266', price: 5000, previewTone: 'saturate(0.2) brightness(0.8)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 0, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '20" M Star-Spoke Style 813 M (Bicolor Black)', size: '20" Front & Rear', price: 0 },
            { id: 'w2', name: '20" M Star-Spoke Style 811 M (Bicolor Black)', size: '20" Front & Rear', price: 1300 },
            { id: 'w3', name: '20" M Forged Competition Style 863 M (Ferric Grey)', size: '20" Front & Rear', price: 3900 }
        ],
        interiors: [
            { id: 'i1', name: 'Sakhir Orange / Black Full Merino Leather', hex: '#9E321E', material: 'Full Merino Leather', price: 0 },
            { id: 'i2', name: 'Midrand Beige Full Merino / Alcantara Combination', hex: '#A38B71', material: 'Merino & Alcantara', price: 0 },
            { id: 'i3', name: 'Taruma Brown Full Merino Leather', hex: '#583A26', material: 'Full Merino Leather', price: 0 }
        ],
        features: [
            'M Sport Exhaust System with dual branch quad chrome exhaust pipes',
            'Alcantara headliner with illuminated M color accents',
            'Active Roll Stabilization and M adaptive suspension damping',
            'BMW Live Cockpit Professional with 12.3" instrument cluster'
        ]
    },
    {
        id: 'x3m',
        name: 'BMW X3 M Competition',
        category: 'M',
        type: 'core',
        tagline: 'Track-Capable Versatility. High-Riding Adrenaline.',
        image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1600&q=85',
        description: 'Uncompromising M performance housed in a versatile Sports Activity Vehicle®. The S58 high-revving engine propels this family transporter with supercar urgency.',
        performance: {
            hp: 503,
            acceleration: '3.7s',
            topSpeed: '177 mph',
            engine: '3.0L BMW M TwinPower Turbo S58 Inline-6',
            drivetrain: 'M xDrive All-Wheel Drive',
            torque: '479 lb-ft'
        },
        electricRange: null,
        price: 76500,
        fuelEconomy: '15 / 20 mpg',
        colors: [
            { name: 'Marina Bay Blue Metallic', hex: '#134E9B', price: 650, previewTone: 'hue-rotate(205deg) saturate(1.4)' },
            { name: 'Toronto Red Metallic', hex: '#B81414', price: 650, previewTone: 'hue-rotate(330deg) saturate(1.4)' },
            { name: 'Brooklyn Grey Metallic', hex: '#7E8388', price: 650, previewTone: 'saturate(0.4) contrast(1.1)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '21" M Double-Spoke Style 892 M (Bicolor Black)', size: '21" Front & Rear', price: 0 },
            { id: 'w2', name: '21" M V-Spoke Style 765 M (Bicolor Black)', size: '21" Front & Rear', price: 1200 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Extended Merino Leather with M highlights', hex: '#1A1A1C', material: 'Extended Merino Leather', price: 0 },
            { id: 'i2', name: 'Adelaide Grey / Black Extended Merino Leather', hex: '#94989D', material: 'Extended Merino Leather', price: 0 },
            { id: 'i3', name: 'Sakhir Orange / Black Full Merino Leather', hex: '#A1311F', material: 'Full Merino Leather', price: 1500 }
        ],
        features: [
            'M Sport Seats with illuminated M badge and power lateral bolsters',
            'M Differential and specially tuned M xDrive all-wheel drive',
            '40/20/40 split-folding rear seats with up to 62.7 cu ft cargo volume',
            'M compound brakes with red high-gloss calipers'
        ]
    },
    {
        id: 'x4m',
        name: 'BMW X4 M Competition',
        category: 'M',
        type: 'core',
        tagline: 'Coupe Elegance Meets SAV High-Performance.',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85',
        description: 'A Sports Activity Coupé® sculpted with sweeping rooflines and M motorsport credentials. Engineered for bold drivers demanding dramatic styling and razor-sharp dynamics.',
        performance: {
            hp: 503,
            acceleration: '3.7s',
            topSpeed: '177 mph',
            engine: '3.0L BMW M TwinPower Turbo S58 Inline-6',
            drivetrain: 'M xDrive Intelligent All-Wheel Drive',
            torque: '479 lb-ft'
        },
        electricRange: null,
        price: 79100,
        fuelEconomy: '15 / 20 mpg',
        colors: [
            { name: 'Sao Paulo Yellow', hex: '#D2DB39', price: 650, previewTone: 'hue-rotate(60deg) saturate(1.5)' },
            { name: 'Marina Bay Blue Metallic', hex: '#134E9B', price: 650, previewTone: 'hue-rotate(205deg) saturate(1.4)' },
            { name: 'Carbon Black Metallic', hex: '#11141B', price: 650, previewTone: 'brightness(0.4) contrast(1.2)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' }
        ],
        wheels: [
            { id: 'w1', name: '21" M Double-Spoke Style 892 M (Bicolor Black)', size: '21" Front & Rear', price: 0 },
            { id: 'w2', name: '21" M V-Spoke Style 765 M (Bicolor Black)', size: '21" Front & Rear', price: 1200 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Extended Merino Leather', hex: '#1C1C1E', material: 'Extended Merino Leather', price: 0 },
            { id: 'i2', name: 'Tartufo Extended Merino Leather', hex: '#7A4822', material: 'Extended Merino Leather', price: 1000 }
        ],
        features: [
            'Aerodynamic M roof spoiler and quad sport exhaust pipes',
            'Full color M Head-Up Display with track display mode',
            'Harmon Kardon surround audio with 16 transducers',
            'M Differential with active torque distribution'
        ]
    },

    // --- BMW i ALL-ELECTRIC RANGE ---
    {
        id: 'ix',
        name: 'BMW iX xDrive50',
        category: 'i',
        type: 'electric',
        tagline: 'The Visionary Electric Flagship SAV.',
        image: 'https://images.unsplash.com/photo-1631295868223-63265b40d4a3?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1631295868223-63265b40d4a3?auto=format&fit=crop&w=1600&q=85',
        description: 'Conceived from the ground up for purely electric luxury and sustainability. The flagship BMW iX fuses revolutionary architectural proportions with serene acoustic insulation and fifth-generation eDrive.',
        performance: {
            hp: 516,
            acceleration: '4.4s',
            topSpeed: '124 mph',
            engine: 'Dual 5th-Generation eDrive Electric Motors',
            drivetrain: 'Electric All-Wheel Drive (Dual Motor)',
            torque: '564 lb-ft'
        },
        electricRange: 307,
        batteryCapacity: '111.5 kWh Gross / 105.2 kWh Usable',
        chargingTime: '10% to 80% in ~35 mins (195 kW DC Fast)',
        price: 87250,
        fuelEconomy: '86 MPGe combined',
        colors: [
            { name: 'Phytonic Blue Metallic', hex: '#1B4D78', price: 650, previewTone: 'hue-rotate(200deg) saturate(1.3)' },
            { name: 'Oxide Grey Metallic', hex: '#87837D', price: 650, previewTone: 'saturate(0.5) contrast(1.1)' },
            { name: 'Storm Bay Metallic', hex: '#5E666E', price: 1950, previewTone: 'saturate(0.4) brightness(0.9)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Dark Graphite Metallic', hex: '#2A2E33', price: 650, previewTone: 'brightness(0.4) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '21" Aero Style 1010 Bicolor', size: '21" Front & Rear', price: 0 },
            { id: 'w2', name: '22" M Aero Style 1020 Bicolor 3D Polish', size: '22" Front & Rear', price: 1900 },
            { id: 'w3', name: '22" Individual Aero Style 1021 Multicolour Titanium', size: '22" Front & Rear', price: 2800 }
        ],
        interiors: [
            { id: 'i1', name: 'Atelier Black Sensatec with Diamond Quilted Stitching', hex: '#202022', material: 'Perforated Sensatec', price: 0 },
            { id: 'i2', name: 'Suite Castanea Natural Olive Leaf-Tanned Leather', hex: '#582823', material: 'Natural Tanned Leather', price: 3500 },
            { id: 'i3', name: 'Loft Stone Grey Microfiber / Recycled Wool Blend', hex: '#7E8287', material: 'Sustainable Microfiber Fabric', price: 500 }
        ],
        features: [
            'Sky Lounge Electrochromic Panoramic Roof (frosted on demand)',
            'Hexagonal steering wheel and minimalist floating center console',
            'CraftedClarity faceted crystal glass controls & open-pore wood',
            'Bowers & Wilkins 30-speaker 4D Diamond Audio with headrest transducers'
        ]
    },
    {
        id: 'i4',
        name: 'BMW i4 M50 Gran Coupé',
        category: 'i',
        type: 'electric',
        tagline: 'Electric Soul. True M Adrenaline.',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85',
        description: 'The premier all-electric performance Gran Coupé. With two electric motors delivering 536 hp and Sport Boost launch control, the i4 M50 redefines instantaneous acceleration.',
        performance: {
            hp: 536,
            acceleration: '3.7s',
            topSpeed: '140 mph',
            engine: 'Dual eDrive Motors with M Sport Boost Function',
            drivetrain: 'All-Wheel Drive (Dual Motor M Spec)',
            torque: '586 lb-ft'
        },
        electricRange: 269,
        batteryCapacity: '83.9 kWh Gross / 81.5 kWh Usable',
        chargingTime: '10% to 80% in ~31 mins (205 kW DC Fast)',
        price: 69700,
        fuelEconomy: '97 MPGe combined',
        colors: [
            { name: 'Frozen Portimao Blue Metallic', hex: '#1C3A68', price: 3600, previewTone: 'hue-rotate(200deg) saturate(1.4)' },
            { name: 'San Remo Green Metallic', hex: '#264D3B', price: 650, previewTone: 'hue-rotate(120deg) saturate(1.3)' },
            { name: 'Sunset Orange Metallic', hex: '#C24D1E', price: 650, previewTone: 'hue-rotate(30deg) saturate(1.5)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '19" M Aero Style 860 M (Bicolor Black)', size: '19" Front & Rear', price: 0 },
            { id: 'w2', name: '19" M Y-Spoke Style 859 M (Bicolor Jet Black)', size: '19" Front & Rear', price: 1100 },
            { id: 'w3', name: '20" BMW Individual Aerodynamic Style 862 (Bicolor)', size: '20" Front & Rear', price: 2600 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Vernasca Leather with Blue Contrast Stitching', hex: '#1A1A1E', material: 'Vernasca Leather', price: 0 },
            { id: 'i2', name: 'Tacora Red Vernasca Leather with Decorative Stitching', hex: '#871D28', material: 'Vernasca Leather', price: 1450 },
            { id: 'i3', name: 'Mocha Vernasca Leather with Stitching', hex: '#4B3621', material: 'Vernasca Leather', price: 1450 }
        ],
        features: [
            'Adaptive M Suspension with variable sport steering',
            'BMW IconicSounds Electric composed by Hans Zimmer',
            'Single curved glass housing 12.3" and 14.9" high-def displays',
            'Class-leading low drag coefficient of 0.24 Cd'
        ]
    },
    {
        id: 'i7',
        name: 'BMW i7 xDrive60 Luxury Sedan',
        category: 'i',
        type: 'electric',
        tagline: 'The Ultimate Theater of Electric Elegance.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85',
        description: 'An unprecedented vision of modern grandeur. The BMW i7 pairs whisper-quiet twin electric motors with the revolutionary 31.3" BMW Theater Screen in 8K resolution, transforming passenger travel into private cinema.',
        performance: {
            hp: 536,
            acceleration: '4.5s',
            topSpeed: '149 mph',
            engine: 'Dual 5th-Gen eDrive Motors with Boost Mode',
            drivetrain: 'Electric All-Wheel Drive',
            torque: '549 lb-ft'
        },
        electricRange: 318,
        batteryCapacity: '105.7 kWh Gross / 101.7 kWh Usable',
        chargingTime: '10% to 80% in ~34 mins (195 kW DC Fast)',
        price: 105700,
        fuelEconomy: '89 MPGe combined',
        colors: [
            { name: 'Oxide Grey Metallic with Black Sapphire Two-Tone', hex: '#636569', price: 12000, previewTone: 'contrast(1.2)' },
            { name: 'Tanzanite Blue II Metallic', hex: '#162C4E', price: 1950, previewTone: 'hue-rotate(210deg) saturate(1.3)' },
            { name: 'Aventurine Red Metallic', hex: '#631822', price: 1950, previewTone: 'hue-rotate(340deg) saturate(1.4)' },
            { name: 'Mineral White Metallic', hex: '#EBECEE', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 0, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '20" Aerodynamic Style 906 (Gunmetal Grey)', size: '20" Front & Rear', price: 0 },
            { id: 'w2', name: '21" M Aerodynamic Style 908 M (Bicolor Titanium)', size: '21" Front & Rear', price: 2100 },
            { id: 'w3', name: '21" BMW Individual Style 910 Multicolour', size: '21" Front & Rear', price: 3400 }
        ],
        interiors: [
            { id: 'i1', name: 'Amarone Extended Merino Leather', hex: '#581822', material: 'Extended Merino Leather', price: 0 },
            { id: 'i2', name: 'Smoke White Full Merino Leather with Cashmere Inlays', hex: '#EAEBED', material: 'Merino Leather & Cashmere', price: 4800 },
            { id: 'i3', name: 'Tartufo Full Merino Leather', hex: '#7A4822', material: 'Full Merino Leather', price: 3200 }
        ],
        features: [
            '31.3" BMW Theater Screen with 8K resolution and built-in Amazon Fire TV',
            'Automatic opening & closing power doors with obstruction sensors',
            'BMW Interaction Bar with faceted crystal backlight illumination',
            'Executive Lounge Seating with reclining rear seat & footrest'
        ]
    },
    {
        id: 'ix3',
        name: 'BMW iX3 Premier SAV',
        category: 'i',
        type: 'electric',
        tagline: 'Everyday Versatility Meets Zero Emissions.',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85',
        description: 'The all-electric Sports Activity Vehicle®. Balances instantaneous electric torque with everyday practical roominess, standard panoramic sunroof, and adaptive suspension.',
        performance: {
            hp: 282,
            acceleration: '6.6s',
            topSpeed: '112 mph',
            engine: 'Rear eDrive Synchronous Electric Motor',
            drivetrain: 'Rear-Wheel Drive',
            torque: '295 lb-ft'
        },
        electricRange: 286,
        batteryCapacity: '80.0 kWh Gross / 74.0 kWh Usable',
        chargingTime: '10% to 80% in ~32 mins (150 kW DC Fast)',
        price: 57900,
        fuelEconomy: '98 MPGe combined',
        colors: [
            { name: 'Phytonic Blue Metallic', hex: '#1B4D78', price: 650, previewTone: 'hue-rotate(200deg) saturate(1.3)' },
            { name: 'Carbon Black Metallic', hex: '#11141B', price: 650, previewTone: 'brightness(0.4) contrast(1.2)' },
            { name: 'Mineral White Metallic', hex: '#EBECEE', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Sophisto Grey Brilliant Effect', hex: '#484B50', price: 650, previewTone: 'saturate(0.3) brightness(0.8)' }
        ],
        wheels: [
            { id: 'w1', name: '19" Aero Style 842', size: '19" Front & Rear', price: 0 },
            { id: 'w2', name: '20" M Aero Style 890 M (Bicolor Jet Black)', size: '20" Front & Rear', price: 1400 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Vernasca Leather with Blue Stitching', hex: '#1A1A1D', material: 'Vernasca Leather', price: 0 },
            { id: 'i2', name: 'Cognac Vernasca Leather with Decorative Stitching', hex: '#8B5A2B', material: 'Vernasca Leather', price: 1200 },
            { id: 'i3', name: 'Canberra Beige Vernasca Leather', hex: '#C2B193', material: 'Vernasca Leather', price: 1200 }
        ],
        features: [
            'Adaptive Suspension with dynamic damping control',
            'Panoramic glass sunroof with electric slide and lift function',
            'Active Protection System with collision warning & lane keeping',
            'Acoustic glazing front glass for whisper-quiet travel'
        ]
    },

    // --- BMW X FAMILY (SAV & SAC) ---
    {
        id: 'x5',
        name: 'BMW X5 xDrive40i',
        category: 'X',
        type: 'core',
        tagline: 'The Definitive Sports Activity Vehicle®.',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85',
        description: 'The vehicle that created the Sports Activity Vehicle® category. The BMW X5 commands with athletic posture, 48V mild hybrid efficiency, split power tailgate, and luxurious high-grade finishes.',
        performance: {
            hp: 375,
            acceleration: '5.2s',
            topSpeed: '130 mph',
            engine: '3.0L BMW TwinPower Turbo Inline-6 with 48V Mild Hybrid',
            drivetrain: 'xDrive Intelligent All-Wheel Drive',
            torque: '398 lb-ft'
        },
        electricRange: null,
        price: 68000,
        fuelEconomy: '23 / 27 mpg',
        colors: [
            { name: 'Manhattan Green Metallic', hex: '#37493A', price: 650, previewTone: 'hue-rotate(110deg) saturate(1.2)' },
            { name: 'Blue Ridge Mountain Metallic', hex: '#4B6A78', price: 650, previewTone: 'hue-rotate(190deg) saturate(1.2)' },
            { name: 'Carbon Black Metallic', hex: '#11141B', price: 650, previewTone: 'brightness(0.4) contrast(1.2)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Mineral White Metallic', hex: '#EBECEE', price: 650, previewTone: 'brightness(1.05)' }
        ],
        wheels: [
            { id: 'w1', name: '20" V-Spoke Style 738 (Ferric Grey)', size: '20" Front & Rear', price: 0 },
            { id: 'w2', name: '21" M Y-Spoke Bicolor Style 741 M', size: '21" Front & Rear', price: 1600 },
            { id: 'w3', name: '22" BMW Individual Multi-Spoke Style 746 I', size: '22" Front & Rear', price: 2900 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Sensafin with Decorative Quilted Stitching', hex: '#1A1A1D', material: 'Sensafin Synthetic Leather', price: 0 },
            { id: 'i2', name: 'Cognac Sensafin with Luxury Quilted Inlays', hex: '#8B5A2B', material: 'Sensafin Synthetic Leather', price: 0 },
            { id: 'i3', name: 'Silverstone Sensafin Interior', hex: '#A8ADB3', material: 'Sensafin Synthetic Leather', price: 0 },
            { id: 'i4', name: 'Coffee Extended Merino Leather', hex: '#442F21', material: 'Extended Merino Leather', price: 1950 }
        ],
        features: [
            'Iconic BMW split power tailgate with hands-free foot gesture activation',
            'Curved Display running BMW OS 8.5 with QuickSelect navigation',
            'Illuminated BMW kidney grille (Iconic Glow option)',
            'Dynamic Damper Control with available 2-axle air suspension'
        ]
    },
    {
        id: 'x7',
        name: 'BMW X7 xDrive40i',
        category: 'X',
        type: 'core',
        tagline: 'The Pinnacle of Full-Size Three-Row Luxury.',
        image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=85',
        description: 'Commanding presence, palatial space for seven passengers, and world-class driving refinement. Standard two-axle air suspension glides smoothly over imperfections while split twin headlights make a majestic statement.',
        performance: {
            hp: 375,
            acceleration: '5.6s',
            topSpeed: '130 mph',
            engine: '3.0L BMW TwinPower Turbo Inline-6 with 48V Mild Hybrid',
            drivetrain: 'xDrive Intelligent All-Wheel Drive',
            torque: '398 lb-ft'
        },
        electricRange: null,
        price: 83500,
        fuelEconomy: '21 / 25 mpg',
        colors: [
            { name: 'Ametrin Metallic', hex: '#4E1B32', price: 1950, previewTone: 'hue-rotate(320deg) saturate(1.4)' },
            { name: 'Sparkling Copper Metallic', hex: '#634A3E', price: 650, previewTone: 'hue-rotate(20deg) saturate(1.2)' },
            { name: 'Dravit Grey Metallic', hex: '#4A4C4E', price: 1950, previewTone: 'saturate(0.3) brightness(0.8)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Carbon Black Metallic', hex: '#11141B', price: 650, previewTone: 'brightness(0.4) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '21" Y-Spoke Style 752 (Ferric Grey)', size: '21" Front & Rear', price: 0 },
            { id: 'w2', name: '22" M V-Spoke Style 755 M (Jet Black)', size: '22" Front & Rear', price: 1900 },
            { id: 'w3', name: '23" BMW Individual V-Spoke Style 914 I Bicolor', size: '23" Front & Rear', price: 3600 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Extended Merino Leather', hex: '#1C1C1E', material: 'Extended Merino Leather', price: 0 },
            { id: 'i2', name: 'Ivory White Extended Merino Leather', hex: '#E6E7E8', material: 'Extended Merino Leather', price: 0 },
            { id: 'i3', name: 'Tartufo Extended Merino Leather with Piping', hex: '#7A4822', material: 'Extended Merino Leather', price: 0 }
        ],
        features: [
            'Standard three-row seating with optional second-row captain chairs',
            'Panoramic Sky Lounge LED Roof with 15,000 light graphic elements',
            'Standard Two-Axle Air Suspension with automatic self-leveling',
            'Glass CraftedClarity controls for gear selector and iDrive dial'
        ]
    },
    {
        id: 'x3',
        name: 'BMW X3 30 xDrive',
        category: 'X',
        type: 'core',
        tagline: 'Agile Spirit. Everyday Excellence.',
        image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=1600&q=85',
        description: 'Sporty, compact, and infinitely adaptable. Featuring an iconic newly contoured silhouette, ambient light bar interior architecture, and responsive intelligent all-wheel drive.',
        performance: {
            hp: 255,
            acceleration: '6.0s',
            topSpeed: '130 mph',
            engine: '2.0L BMW TwinPower Turbo 4-Cylinder with 48V Hybrid',
            drivetrain: 'xDrive Intelligent All-Wheel Drive',
            torque: '295 lb-ft'
        },
        electricRange: null,
        price: 49500,
        fuelEconomy: '27 / 33 mpg',
        colors: [
            { name: 'Dune Grey Metallic', hex: '#7D7A73', price: 650, previewTone: 'saturate(0.4) contrast(1.1)' },
            { name: 'Phytonic Blue Metallic', hex: '#1B4D78', price: 650, previewTone: 'hue-rotate(200deg) saturate(1.3)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '19" Aerodynamic Style 901 (Bicolor Grey)', size: '19" Front & Rear', price: 0 },
            { id: 'w2', name: '20" M Aero Style 906 M (Bicolor Black)', size: '20" Front & Rear', price: 1100 },
            { id: 'w3', name: '21" Individual Style 907 (Titanium Bronze)', size: '21" Front & Rear', price: 2300 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Veganza Perforated Upholstery', hex: '#1B1B1E', material: 'Veganza Premium Vegan', price: 0 },
            { id: 'i2', name: 'Espresso Brown Veganza with Stitching', hex: '#4A3427', material: 'Veganza Premium Vegan', price: 0 },
            { id: 'i3', name: 'Amber / Atlas Grey Two-Tone Merino Leather', hex: '#875C34', material: 'Individual Merino Leather', price: 1500 }
        ],
        features: [
            'Interactive illuminated BMW ambient bar across dashboard and doors',
            'Curved Display running BMW OS 9 with gaming & streaming apps',
            'Power tailgate with up to 67.1 cu ft cargo storage with seats flat',
            'Standard BMW Driving Assistant with active blind spot detection'
        ]
    },
    {
        id: 'x4',
        name: 'BMW X4 xDrive30i',
        category: 'X',
        type: 'core',
        tagline: 'Distinctive Coupé Silhouette. Muscular Stance.',
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1600&q=85',
        description: 'For drivers who refuse to blend into traffic. The X4 combines the ground clearance and all-weather confidence of an SUV with the sloping coupe roofline of a grand tourer.',
        performance: {
            hp: 248,
            acceleration: '6.0s',
            topSpeed: '130 mph',
            engine: '2.0L BMW TwinPower Turbo 4-Cylinder Engine',
            drivetrain: 'xDrive Intelligent All-Wheel Drive',
            torque: '258 lb-ft'
        },
        electricRange: null,
        price: 55000,
        fuelEconomy: '21 / 28 mpg',
        colors: [
            { name: 'Piemont Red Metallic', hex: '#821B27', price: 650, previewTone: 'hue-rotate(335deg) saturate(1.4)' },
            { name: 'Brooklyn Grey Metallic', hex: '#7E8388', price: 650, previewTone: 'saturate(0.4) contrast(1.1)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Carbon Black Metallic', hex: '#11141B', price: 650, previewTone: 'brightness(0.4) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '19" Y-Spoke Style 693 (Ferric Grey)', size: '19" Front & Rear', price: 0 },
            { id: 'w2', name: '20" M Double-Spoke Style 699 M (Jet Black)', size: '20" Front & Rear', price: 1400 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Perforated SensaTec', hex: '#1C1C1E', material: 'Perforated SensaTec', price: 0 },
            { id: 'i2', name: 'Tacora Red Vernasca Leather', hex: '#871D28', material: 'Vernasca Leather', price: 1500 }
        ],
        features: [
            'Aerodynamic rear lip spoiler and dual chrome exhaust outlets',
            'Panoramic power moonroof with electric sunshade',
            'Sport front seats with 10-way power adjustment',
            'Standard Apple CarPlay® & Android Auto™ compatibility'
        ]
    },

    // --- BMW CORE SEDAN SERIES ---
    {
        id: '3series',
        name: 'BMW 330i Sedan',
        category: 'Series',
        type: 'core',
        tagline: 'The Definitive Sports Sedan Benchmark.',
        image: 'https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&w=1600&q=85',
        description: 'For over 45 years, the BMW 3 Series has set the universal golden standard for dynamic handling balance, communicative steering, and driver-centric cockpit ergonomics.',
        performance: {
            hp: 255,
            acceleration: '5.6s',
            topSpeed: '130 mph',
            engine: '2.0L BMW TwinPower Turbo 4-Cylinder with 48V Hybrid',
            drivetrain: 'Rear-Wheel Drive (or available xDrive)',
            torque: '295 lb-ft'
        },
        electricRange: null,
        price: 45500,
        fuelEconomy: '25 / 34 mpg',
        colors: [
            { name: 'Portimao Blue Metallic', hex: '#1B4783', price: 650, previewTone: 'hue-rotate(205deg) saturate(1.3)' },
            { name: 'Melbourne Red Metallic', hex: '#9E1C20', price: 650, previewTone: 'hue-rotate(340deg) saturate(1.4)' },
            { name: 'Skyscraper Grey Metallic', hex: '#6E7277', price: 650, previewTone: 'saturate(0.3) brightness(0.9)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '18" Double-Spoke Style 796 M (Black)', size: '18" Front & Rear', price: 0 },
            { id: 'w2', name: '19" M Double-Spoke Style 791 M (Jet Black)', size: '19" Front & Rear', price: 1100 },
            { id: 'w3', name: '19" BMW Individual Double-Spoke Style 793 I', size: '19" Front & Rear', price: 1800 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Perforated SensaTec', hex: '#1C1C1E', material: 'Perforated SensaTec', price: 0 },
            { id: 'i2', name: 'Cognac Perforated SensaTec', hex: '#8B5A2B', material: 'Perforated SensaTec', price: 0 },
            { id: 'i3', name: 'Oyster Vernasca Leather with Contrast Stitching', hex: '#DDD9D0', material: 'Vernasca Leather', price: 1500 }
        ],
        features: [
            'Near-perfect 50:50 front-to-rear axle weight distribution',
            'Curved Display featuring 12.3" instrument and 14.9" infotainment screen',
            'Sport automatic transmission with steering wheel mounted paddle shifters',
            'Optional M Sport suspension and variable sport steering'
        ]
    },
    {
        id: '5series',
        name: 'BMW 530i Sedan',
        category: 'Series',
        type: 'core',
        tagline: 'Executive Poise. Progressive Innovation.',
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1600&q=85',
        description: 'The executive benchmark redefined for the modern digital era. Boasting a striking elongated profile, illuminated BMW kidney grille contour, and hands-free Active Driving Assistant up to 85 mph.',
        performance: {
            hp: 255,
            acceleration: '5.9s',
            topSpeed: '130 mph',
            engine: '2.0L BMW TwinPower Turbo 4-Cylinder with 48V Hybrid',
            drivetrain: 'Rear-Wheel Drive (or available xDrive)',
            torque: '295 lb-ft'
        },
        electricRange: null,
        price: 58800,
        fuelEconomy: '27 / 35 mpg',
        colors: [
            { name: 'Cape York Green Metallic', hex: '#3B584E', price: 650, previewTone: 'hue-rotate(130deg) saturate(1.2)' },
            { name: 'Phytonic Blue Metallic', hex: '#1B4D78', price: 650, previewTone: 'hue-rotate(200deg) saturate(1.3)' },
            { name: 'Oxide Grey Metallic', hex: '#87837D', price: 650, previewTone: 'saturate(0.5) contrast(1.1)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '19" Triplex-Spoke Style 933 (Silver)', size: '19" Front & Rear', price: 0 },
            { id: 'w2', name: '20" M Aero Style 938 M (Bicolor Jet Black)', size: '20" Front & Rear', price: 1300 },
            { id: 'w3', name: '21" Individual Aero Style 954 I Bicolor', size: '21" Front & Rear', price: 2500 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Veganza Perforated & Quilted', hex: '#1C1C1E', material: 'Veganza Premium Vegan', price: 0 },
            { id: 'i2', name: 'Espresso Brown Veganza with Inlay Quilting', hex: '#4A3427', material: 'Veganza Premium Vegan', price: 0 },
            { id: 'i3', name: 'BMW Individual Black / Atlas Grey Extended Merino', hex: '#232528', material: 'Extended Merino Leather', price: 2450 }
        ],
        features: [
            'Highway Assistant with Active Lane Change triggered by eye glance',
            'BMW Interaction Bar with dynamic ambient lighting across cockpit',
            'Panoramic Sky Lounge roof with expanded glass surface',
            'Harman Kardon Premium Sound or optional Bowers & Wilkins Audio'
        ]
    },
    {
        id: '7series',
        name: 'BMW 760i xDrive Sedan',
        category: 'Series',
        type: 'core',
        tagline: 'The Zenith of Automotive Sovereign Craftsmanship.',
        image: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1600&q=85',
        description: 'The monumental flagship sedan. Powered by a twin-turbo 4.4L V8 engine with 536 hp, it delivers peerless authority, crystal glass detailing, and first-class airline comfort in the rear cabin.',
        performance: {
            hp: 536,
            acceleration: '4.1s',
            topSpeed: '155 mph',
            engine: '4.4L BMW TwinPower Turbo V8 with 48V Mild Hybrid',
            drivetrain: 'xDrive Intelligent All-Wheel Drive',
            torque: '553 lb-ft'
        },
        electricRange: null,
        price: 121300,
        fuelEconomy: '18 / 26 mpg',
        colors: [
            { name: 'Oxide Grey Metallic', hex: '#87837D', price: 650, previewTone: 'saturate(0.5) contrast(1.1)' },
            { name: 'Tanzanite Blue II Metallic', hex: '#162C4E', price: 1950, previewTone: 'hue-rotate(210deg) saturate(1.3)' },
            { name: 'Aventurine Red Metallic', hex: '#631822', price: 1950, previewTone: 'hue-rotate(340deg) saturate(1.4)' },
            { name: 'Dravit Grey Metallic', hex: '#4A4C4E', price: 1950, previewTone: 'saturate(0.3) brightness(0.8)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 0, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '20" M Aerodynamic Style 907 M (Bicolor Black)', size: '20" Front & Rear', price: 0 },
            { id: 'w2', name: '21" M Star-Spoke Style 908 M (Bicolor Titanium)', size: '21" Front & Rear', price: 1900 },
            { id: 'w3', name: '21" Individual Multi-Spoke Style 910 I Bicolor', size: '21" Front & Rear', price: 3200 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Extended Merino Leather', hex: '#1C1C1E', material: 'Extended Merino Leather', price: 0 },
            { id: 'i2', name: 'Smoke White Full Merino Leather & Cashmere Wool', hex: '#ECECED', material: 'Merino & Fine Cashmere', price: 5400 },
            { id: 'i3', name: 'Amarone Full Merino Leather', hex: '#581822', material: 'Full Merino Leather', price: 3400 }
        ],
        features: [
            'Executive Lounge seating with continuous leg rest and 42.5° seat recline',
            '31.3" 8K BMW Theater Screen with touch control in rear door armrests',
            'Automatic closing power doors with tactile and voice commands',
            'Integral Active 4-Wheel Steering with active roll stabilization'
        ]
    },

    // --- BMW Z ROADSTER ---
    {
        id: 'z4',
        name: 'BMW Z4 M40i Roadster',
        category: 'Z',
        type: 'core',
        tagline: 'Open-Air Purism. TwinPower Turbo Road Thrills.',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
        detailImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85',
        description: 'Classic roadster proportion with a long sculpted hood, short overhangs, and a power soft-top that opens in 10 seconds. Powered by the legendary 382 hp B58 inline-6, it transforms every winding ribbon of tarmac into exhilarating joy.',
        performance: {
            hp: 382,
            acceleration: '3.9s',
            topSpeed: '155 mph',
            engine: '3.0L BMW M TwinPower Turbo Inline 6-Cylinder',
            drivetrain: 'Rear-Wheel Drive (with M Sport Differential)',
            torque: '369 lb-ft'
        },
        electricRange: null,
        price: 66300,
        fuelEconomy: '23 / 31 mpg',
        colors: [
            { name: 'Frozen Deep Green Metallic', hex: '#263F32', price: 3600, previewTone: 'hue-rotate(120deg) saturate(1.2)' },
            { name: 'San Francisco Red Metallic', hex: '#B81E24', price: 650, previewTone: 'hue-rotate(335deg) saturate(1.5)' },
            { name: 'Thundernight Metallic (Purple)', hex: '#4B2A58', price: 650, previewTone: 'hue-rotate(270deg) saturate(1.3)' },
            { name: 'Alpine White', hex: '#F4F5F7', price: 0, previewTone: 'brightness(1.05)' },
            { name: 'Black Sapphire Metallic', hex: '#0D0E11', price: 650, previewTone: 'brightness(0.35) contrast(1.2)' }
        ],
        wheels: [
            { id: 'w1', name: '19" M Double-Spoke Style 799 M (Jet Black)', size: '19" Front & Rear', price: 0 },
            { id: 'w2', name: '19" M Double-Spoke Style 799 M (Bicolor Cerium Grey)', size: '19" Front & Rear', price: 600 },
            { id: 'w3', name: '19"/20" M Light Alloy Style 800 M (Frozen Dark Silver)', size: '19" Front / 20" Rear', price: 1800 }
        ],
        interiors: [
            { id: 'i1', name: 'Black Vernasca Leather with Contrast Stitching', hex: '#1C1C1E', material: 'Vernasca Leather', price: 0 },
            { id: 'i2', name: 'Magma Red Vernasca Leather with Contrast Stitching', hex: '#9E2428', material: 'Vernasca Leather', price: 1500 },
            { id: 'i3', name: 'Cognac Vernasca Leather with Decorative Stitching', hex: '#8B5A2B', material: 'Vernasca Leather', price: 1500 },
            { id: 'i4', name: 'Ivory White Vernasca Leather', hex: '#EAEAEB', material: 'Vernasca Leather', price: 1500 }
        ],
        features: [
            'Acoustic soft top opens or closes in 10 seconds at speeds up to 30 mph',
            'Adaptive M Suspension with electronically controlled dampers',
            'M Sport Differential providing optimal traction out of apexes',
            'Sport bucket seats with integrated headrests and lateral bolster support'
        ]
    }
];

// Quick index helper
window.BMW_DATA.getVehicleById = function(id) {
    return window.BMW_DATA.vehicles.find(v => v.id === id) || window.BMW_DATA.vehicles[0];
};

window.BMW_DATA.getVehiclesByCategory = function(category) {
    if (!category || category === 'all') return window.BMW_DATA.vehicles;
    return window.BMW_DATA.vehicles.filter(v => v.category === category);
};
