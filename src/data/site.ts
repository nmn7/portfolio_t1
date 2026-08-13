export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'story', label: 'Work', href: '#story' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'landscape', label: 'Capabilities', href: '#landscape' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

export const SITE_METADATA = {
  title: 'Naman Mehta Portfolio',
  email: 'namanmehta711@gmail.com',
  linkedin: 'https://linkedin.com/in/naman711',
  github: 'https://github.com/nmn7',
  timezone: 'Asia/Kolkata',
  timezoneLabel: 'IST / GMT+5:30'
};
