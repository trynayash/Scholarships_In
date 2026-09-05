import logoShort from '@images/nsp_logo_short.svg';
import logoFull from '@images/nsp-logo.svg';

import studentIcon from '@images/Student.svg';
import instituteIcon from '@images/Institute.svg';
import officersIcon from '@images/Officers.svg';
import publicIcon from '@images/Public.svg';

import announcementsIcon from '@images/Announcements-color.svg';
import faqIcon from '@images/faq.svg';
import feedbackIcon from '@images/feedback.svg';
import accessibilityIcon from '@images/acces.svg';

import heroBanner from '@images/Banner4.png';
import heroBannerAlt from '@images/banner3.png';
import heroBannerWide from '@images/banner5.png';

import meityLogo from '@images/meity.png';
import nicLogo from '@images/logo_nic.png';
import mygovLogo from '@images/mygov.png';
import dbtLogo from '@images/DBT.png';
import indiagovLogo from '@images/indiagov.png';
import digitalIndiaLogo from '@images/Digital-India-Color.svg';
import umangLogo from '@images/Umang_logo.png';
import bhashiniLogo from '@images/bhashini-logo.png';

export const images = {
  logo: { short: logoShort, full: logoFull },
  roles: {
    student: studentIcon,
    institute: instituteIcon,
    officer: officersIcon,
    public: publicIcon,
  },
  utility: {
    announcements: announcementsIcon,
    faq: faqIcon,
    feedback: feedbackIcon,
    accessibility: accessibilityIcon,
  },
  banners: {
    primary: heroBanner,
    secondary: heroBannerAlt,
    wide: heroBannerWide,
  },
  partners: {
    meity: meityLogo,
    nic: nicLogo,
    mygov: mygovLogo,
    dbt: dbtLogo,
    indiagov: indiagovLogo,
    digitalIndia: digitalIndiaLogo,
    umang: umangLogo,
    bhashini: bhashiniLogo,
  },
} as const;

export type PartnerKey = keyof typeof images.partners;

export const bannerSlides = [
  {
    src: images.banners.primary,
    alt: 'Students using the National Scholarship Portal to discover and apply for scholarships',
    caption: 'Application windows open for 2025–26',
  },
  {
    src: images.banners.secondary,
    alt: 'Scholarship support programmes available across India',
    caption: 'Explore merit, need-based and state schemes',
  },
  {
    src: images.banners.wide,
    alt: 'Track your scholarship application journey in one place',
    caption: 'One profile · fewer forms · clearer next steps',
  },
] as const;

export const utilityPartners = [
  { key: 'umang' as const, name: 'UMANG', label: 'Open UMANG app' },
  { key: 'bhashini' as const, name: 'Bhashini', label: 'Language services via Bhashini' },
];

export const partnerList: Array<{
  key: PartnerKey;
  name: string;
  description: string;
}> = [
  { key: 'meity', name: 'MeitY', description: 'Ministry partner' },
  { key: 'nic', name: 'NIC', description: 'Technology partner' },
  { key: 'mygov', name: 'myGov', description: 'Citizen platform' },
  { key: 'dbt', name: 'UIDAI / DBT', description: 'Payment rails' },
  { key: 'indiagov', name: 'India.gov.in', description: 'Public information' },
  { key: 'digitalIndia', name: 'Digital India', description: 'National programme' },
];
