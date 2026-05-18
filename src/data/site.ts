export const PHONE = '(555) 482-7600'
export const PHONE_HREF = 'tel:+15554827600'
export const EMAIL = 'hello@asresidential.com'
export const EMAIL_HREF = 'mailto:hello@asresidential.com'

export const services = [
  {
    title: 'Custom Homes',
    description:
      'Ground-up builds tailored to your lot, lifestyle, and budget — managed from permits through final walkthrough.',
    icon: 'home',
  },
  {
    title: 'Renovations',
    description:
      'Kitchens, baths, and whole-home refreshes with clear timelines, dust control, and respect for your daily routine.',
    icon: 'hammer',
  },
  {
    title: 'Home Additions',
    description:
      'Seamless expansions that match existing architecture — sunrooms, second stories, and in-law suites.',
    icon: 'expand',
  },
] as const

export const projects = [
  {
    title: 'Lakeview Custom Build',
    category: 'Custom Home',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop',
    alt: 'Modern two-story custom home with large windows at dusk',
  },
  {
    title: 'Heritage Kitchen Remodel',
    category: 'Renovation',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d4046?w=800&q=80&auto=format&fit=crop',
    alt: 'Bright renovated kitchen with wood cabinets and island',
  },
  {
    title: 'Cedar Second-Story Addition',
    category: 'Addition',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6162a9a0c0?w=800&q=80&auto=format&fit=crop',
    alt: 'Craftsman-style home with new second-story addition',
  },
  {
    title: 'Oakridge Master Suite',
    category: 'Renovation',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80&auto=format&fit=crop',
    alt: 'Serene master bedroom with natural light and neutral tones',
  },
  {
    title: 'Prairie Outdoor Living',
    category: 'Addition',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop',
    alt: 'Covered patio and outdoor living space attached to a home',
  },
  {
    title: 'Willow Creek New Build',
    category: 'Custom Home',
    image:
      'https://images.unsplash.com/photo-1605276374101-de9d4e3a1b1e?w=800&q=80&auto=format&fit=crop',
    alt: 'Contemporary farmhouse exterior with landscaped front yard',
  },
] as const

export const testimonials = [
  {
    quote:
      'AS Residential turned our outdated floor plan into the home we imagined. Communication was steady, and the crew left the site clean every day.',
    name: 'Sarah & Michael T.',
    project: 'Whole-home renovation',
  },
  {
    quote:
      'From the first quote to move-in, they were transparent about costs and timelines. Our custom build finished on schedule.',
    name: 'James R.',
    project: 'Custom home build',
  },
  {
    quote:
      'The addition looks like it was always part of the house. We gained a full bedroom suite without the stress we expected.',
    name: 'Elena M.',
    project: 'Second-story addition',
  },
] as const

export const projectTypes = [
  'Custom home',
  'Renovation',
  'Home addition',
  'Not sure yet',
] as const
