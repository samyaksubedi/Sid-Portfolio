import hero from '../assets/images/IMG_1521.png'
import about from '../assets/images/IMG_1755.png'
import break_img from '../assets/images/IMG_1756.png'
import gallery1 from '../assets/images/IMG_1519.JPG.jpeg'
import gallery2 from '../assets/images/IMG_1521.png'
import gallery3 from '../assets/images/IMG_1756.png'
import gallery4 from '../assets/images/IMG_1759.JPG.jpeg'
import gallery5 from '../assets/images/IMG_1760.JPG.jpeg'
// import gallery6 from '../assets/images/IMG_1529.png'

export const model = {
  name: 'Sid Laurent',
  tagline: 'Editorial & Runway Model',
  bio: `Sid Laurent is a Paris-based editorial and runway model known for sculptural poses, quiet intensity, and a cinematic presence in front of the lens. Represented internationally, Sid moves between haute couture campaigns, luxury lookbooks, and avant-garde editorials with equal ease.`,
  details: {
    height: '5\'11" / 180 cm',
    hair: 'Dark Brown',
    eyes: 'Hazel',
    location: 'Paris · Milan · NYC',
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const images = {
  hero: hero ,
    // 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2400&q=80',
  about: about,
    // 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  break:break_img ,
    // 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2400&q=80',
}

export const galleryItems = [
  {
    id: 1,
    // src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    src: gallery1,
    alt: 'Editorial fashion portrait',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-[3/4] md:aspect-auto md:h-full',
  },
  {
    id: 2,
    src: gallery2,
    // src: 'https://images.unsplash.com/photo-1496440737103-c858586f93c2?auto=format&fit=crop&w=800&q=80',
    alt: 'Runway moment',
    span: '',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 3,
    src: gallery3,
    // src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury campaign still',
    span: '',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 4,
    src: gallery4,
    // src: 'https://images.unsplash.com/photo-1483985988351-763728e1935b?auto=format&fit=crop&w=800&q=80',
    alt: 'Street style editorial',
    span: 'md:col-span-2',
    aspect: 'aspect-[16/9] md:aspect-[21/9]',
  },
  {
    id: 5,
    src: gallery5,
    // src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    alt: 'Monochrome studio portrait',
    span: '',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    alt: 'Fashion detail shot',
    span: '',
    aspect: 'aspect-[3/4]',
  },
]

export const experiences = [
  {
    year: '2025',
    title: 'Spring Couture Campaign',
    brand: 'Maison Noire',
    type: 'Global Campaign',
    description:
      'Lead face for the maison’s spring couture film and print series, shot in Paris by award-winning directors.',
  },
  {
    year: '2024',
    title: 'Paris Fashion Week',
    brand: 'Élise Dubois · Lumière Atelier',
    type: 'Runway',
    description:
      'Opened and closed two shows; featured in Vogue Runway’s best-of-week editorial roundup.',
  },
  {
    year: '2024',
    title: 'Luxury Beauty Collaboration',
    brand: 'Or Noir Parfums',
    type: 'Brand Ambassador',
    description:
      'Six-month fragrance partnership including billboards in Milan, London, and New York.',
  },
  {
    year: '2023',
    title: 'Vogue Italia Editorial',
    brand: 'Vogue Italia',
    type: 'Editorial',
    description:
      '12-page “Shadow & Silk” feature photographed on location in Lake Como.',
  },
  {
    year: '2023',
    title: 'Milan Fashion Week',
    brand: 'Various Houses',
    type: 'Runway',
    description:
      'Walked for seven established and emerging Italian labels across the official calendar.',
  },
]

export const quote = {
  text: 'Elegance is not about being noticed, it is about being remembered.',
  attribution: 'Giorgio Armani',
}

export const contact = {
  email: 'bookings@sidlaurent.com',
  instagram: '@sidlaurent',
  agency: 'Elite Creative Management',
}
