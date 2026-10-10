/**
 * BMW Certified Dealership Network Data
 * Supporting dealer search by location/city, test-drive dealership selection, and service centers.
 */

window.BMW_DATA = window.BMW_DATA || {};

window.BMW_DATA.dealers = [
    {
        id: 'bmw-manhattan',
        name: 'BMW of Manhattan',
        address: '555 W 57th St, New York, NY 10019',
        city: 'New York',
        state: 'NY',
        zip: '10019',
        distance: '1.2 mi',
        phone: '(212) 586-2269',
        rating: 4.8,
        reviewsCount: 1420,
        mCertified: true,
        iCertified: true,
        hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
        amenities: ['M Performance Studio', 'Ultra-Fast DC Charging', 'Complimentary Loaners', 'Client Lounge & Espresso Bar']
    },
    {
        id: 'bmw-beverly-hills',
        name: 'BMW of Beverly Hills',
        address: '5070 Wilshire Blvd, Los Angeles, CA 90036',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90036',
        distance: '3.5 mi',
        phone: '(323) 656-9269',
        rating: 4.9,
        reviewsCount: 2180,
        mCertified: true,
        iCertified: true,
        hours: 'Mon-Sat: 8:30 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM',
        amenities: ['BMW Individual Atelier', 'M Motorsport Lounge', 'Level 3 Fast Chargers', 'Valet Pick-up & Delivery']
    },
    {
        id: 'bmw-chicago',
        name: 'Perillo BMW Downtown Chicago',
        address: '1111 N Clark St, Chicago, IL 60610',
        city: 'Chicago',
        state: 'IL',
        zip: '60610',
        distance: '2.1 mi',
        phone: '(312) 981-0000',
        rating: 4.7,
        reviewsCount: 980,
        mCertified: true,
        iCertified: true,
        hours: 'Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 6:00 PM',
        amenities: ['Heated Indoor Delivery Bay', 'EV Charging Hub', 'Custom Configuration Lounge', 'Executive Courtesy Fleet']
    },
    {
        id: 'bmw-san-francisco',
        name: 'BMW of San Francisco',
        address: '1675 Howard St, San Francisco, CA 94103',
        city: 'San Francisco',
        state: 'CA',
        zip: '94103',
        distance: '2.8 mi',
        phone: '(415) 863-9000',
        rating: 4.8,
        reviewsCount: 1650,
        mCertified: true,
        iCertified: true,
        hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
        amenities: ['Electromobility Flagship Hub', 'Track Experience Concierge', 'Express Service Lane', 'BMW Lifestyle Boutique']
    },
    {
        id: 'bmw-austin',
        name: 'BMW of Austin',
        address: '7011 McNeil Dr, Austin, TX 78729',
        city: 'Austin',
        state: 'TX',
        zip: '78729',
        distance: '4.6 mi',
        phone: '(512) 343-3500',
        rating: 4.8,
        reviewsCount: 1320,
        mCertified: true,
        iCertified: true,
        hours: 'Mon-Sat: 8:30 AM - 7:30 PM',
        amenities: ['Certified M Performance Specialist', 'Solar-Powered DC Superchargers', 'Off-road X-Ramp Testing', 'Boutique Coffee Lounge']
    },
    {
        id: 'bmw-miami',
        name: 'Braman BMW Miami',
        address: '2060 Biscayne Blvd, Miami, FL 33137',
        city: 'Miami',
        state: 'FL',
        zip: '33137',
        distance: '3.1 mi',
        phone: '(305) 576-1300',
        rating: 4.7,
        reviewsCount: 1890,
        mCertified: true,
        iCertified: true,
        hours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 11:00 AM - 6:00 PM',
        amenities: ['Braman M Motorsport Center', 'Convertible Demonstrator Fleet', 'High-Speed EV Chargers', 'Private VIP Consultation Suites']
    }
];
