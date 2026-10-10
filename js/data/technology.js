/**
 * BMW Technology, Innovation & Interior Hotspot Data
 */

window.BMW_DATA = window.BMW_DATA || {};

window.BMW_DATA.technologies = [
    {
        id: 'tech-idrive',
        category: 'Operating System & Cockpit',
        title: 'BMW Curved Display & Operating System 8.5',
        subtitle: 'Fluid Intelligence at Your Fingertips',
        description: 'A floating frameless glass display uniting a 12.3" digital instrument cluster with a 14.9" central information touchscreen, angled ergonomically toward the driver. Featuring QuickSelect zero-layer interface, augmented reality video navigation, and intelligent BMW Natural Interaction with voice command recognition.',
        icon: '<svg class="w-8 h-8 text-bmw-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
        stats: 'Zero-Layer Menu • 8K Sharpness • Cloud Nav',
        features: ['Augmented reality guidance in head-up display', 'Intelligent Personal Assistant with contextual learning', 'In-car video streaming and AirConsole casual gaming when parked']
    },
    {
        id: 'tech-edrive',
        category: 'Electrification',
        title: '5th Generation BMW eDrive Architecture',
        subtitle: 'Electrifying Power without Rare-Earth Metals',
        description: 'Fifth-generation electric drivetrain integrating the electric motor, power electronics, and high-voltage transmission into a singular lightweight housing. Employing electrically excited synchronous motors that completely eliminate the use of critical rare-earth metals while sustaining peak power delivery into high RPM bands.',
        icon: '<svg class="w-8 h-8 text-bmw-icyan" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
        stats: 'Up to 324 mi Range • 10-80% in 31m • 93% Efficiency',
        features: ['High-voltage prismatic lithium-ion cells with thermal pre-conditioning', 'Combined Charging Unit (CCU) supporting up to 205 kW DC high-speed charging', 'Adaptive recuperation dynamically utilizing radar data and topography']
    },
    {
        id: 'tech-assist',
        category: 'Autonomous Drive',
        title: 'BMW Driving Assistant Professional',
        subtitle: 'Hands-Free Highway Cruising up to 85 mph',
        description: 'Advanced Level 2+ driver assistance incorporating multi-spectral radar, 8-megapixel tri-focal cameras, and ultrasonic sensors. Features the world-first Active Lane Change with eye confirmation—simply glance into the exterior side mirror when prompted, and your BMW smoothly confirms and executes the lane change.',
        icon: '<svg class="w-8 h-8 text-bmw-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
        stats: 'Highway Assist 85 mph • Eye-Glance Lane Change • 360° Shield',
        features: ['Traffic Jam Assistant with stop-and-go automated following', 'Parking Assistant Professional with 200m automated backup maneuver memory', 'Evasion Assistant with emergency steering intervention']
    },
    {
        id: 'tech-audio',
        category: 'Acoustic Engineering',
        title: 'Bowers & Wilkins Diamond 4D Surround Sound',
        subtitle: 'A Pure Symphony in Motion',
        description: 'Masterfully tuned studio acoustics engineered specifically for BMW passenger cabins. 30 strategically placed high-fidelity loudspeakers including pure Nautilus™ synthetic diamond dome tweeters, illuminated stainless-steel etched grilles, and 4D tactile bass exciters built directly into the front seat backrests.',
        icon: '<svg class="w-8 h-8 text-bmw-silver" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.757 3.63 8.25 4.51 8.25h2.24z"/></svg>',
        stats: '1,965 Watts • 30 Loudspeakers • 4D Seat Shakers',
        features: ['Studio, Concert Hall, Lounge, and Custom 3D acoustic profiles', 'Micro-perforated brushed aluminum grille panels with ambient LED backlighting', 'Active Road Noise Cancellation via targeted acoustic phase inversion']
    },
    {
        id: 'tech-digitalkey',
        category: 'Connectivity',
        title: 'BMW Digital Key Plus (Ultra-Wideband)',
        subtitle: 'Keyless Entry Without Touching Your Phone',
        description: 'Using Ultra-Wideband (UWB) radio technology with high-security cryptographic handshake, your compatible iPhone, Apple Watch, or Android device acts as your car key. The vehicle detects your approach from 10 feet away, welcomes you with a choreographed light sequence, unlocks the doors, and readies your profile.',
        icon: '<svg class="w-8 h-8 text-bmw-icyan" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>',
        stats: 'Ultra-Wideband UWB • Share via iMessage • Express Mode',
        features: ['Works even if your phone battery runs out (Express Mode)', 'Share digital access with family and friends with custom power limitations', 'Automatic seat, climate, and mirror personalization before you step in']
    },
    {
        id: 'tech-chassis',
        category: 'Vehicle Dynamics',
        title: 'M xDrive with Active M Differential',
        subtitle: 'Rear-Wheel Drive Precision with All-Weather Grip',
        description: 'Intelligent multi-plate clutch system that shifts torque continuously between front and rear axles in milliseconds. Selectable between 4WD for maximum traction, 4WD Sport for dynamic tail-happy agility, and pure 2WD rear-wheel drive mode with stability control deactivated for unadulterated track drifts.',
        icon: '<svg class="w-8 h-8 text-bmw-mred" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>',
        stats: '0-100% Variable Lock • 4WD / 4WD Sport / 2WD • Track Ready',
        features: ['Active electromechanical multi-plate clutch with millisecond response', 'M Dynamic Mode (MDM) allows controlled slip angles before intervention', 'Integrated lateral acceleration and yaw-rate sensor fusion']
    }
];

window.BMW_DATA.hotspots = [
    {
        id: 'spot-display',
        top: 32,
        left: 28,
        title: 'BMW Curved Display',
        badge: 'Cockpit Architecture',
        description: 'Single continuous anti-reflective glass housing a 12.3" instrument cluster and 14.9" infotainment screen angled directly toward the driver seat.',
        detail: 'Frameless magnesium bracket with magnesium rear housing. Zero-layer interface displays music, navigation, and vehicle telemetry simultaneously.'
    },
    {
        id: 'spot-interaction-bar',
        top: 50,
        left: 48,
        title: 'BMW Interaction Bar',
        badge: 'Atmosphere & Control',
        description: 'Faceted crystalline glass light strip running across the full dashboard into the door cards with dynamic ambient illumination.',
        detail: 'Integrates touch-sensitive capacitive climate shortcuts, hazard lights, and glove compartment release within the luminous jewel-cut structure.'
    },
    {
        id: 'spot-seats',
        top: 68,
        left: 22,
        title: 'Ergonomic M Sport Seats',
        badge: 'Craftsmanship',
        description: 'Sculpted multi-contour seating wrapped in buttery Merino leather with active heating, ventilation, and 8 pneumatic massage programs.',
        detail: 'Power adjustable lateral bolsters clamp snugly during high G-force cornering and relax automatically for easy cabin entry and exit.'
    },
    {
        id: 'spot-shifter',
        top: 72,
        left: 64,
        title: 'CraftedClarity Glass Controls',
        badge: 'Tactile Precision',
        description: 'Handmade precision-cut crystal glass components for the iDrive central controller dial, start/stop toggle, and volume roller.',
        detail: 'Features genuine illuminated crystal facets that refract the ambient interior lighting at night, elevating everyday tactile touchpoints.'
    },
    {
        id: 'spot-audio',
        top: 26,
        left: 78,
        title: 'Bowers & Wilkins Acoustic Grille',
        badge: 'Sound Architecture',
        description: 'Etched stainless steel speaker grilles with spiral perforation patterns and integrated programmable fiber-optic lighting.',
        detail: 'Acoustically transparent metal optimized in wind tunnels and sound labs to prevent sound dampening from the Nautilus diamond tweeters.'
    }
];
