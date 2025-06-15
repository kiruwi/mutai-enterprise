import { Metadata } from 'next'
import AboutPageContent from '@/components/AboutPageContent'

export const metadata = {
  title: 'Our Journey',
  description: 'Learn about Mutai Enterprises - East Africa\'s leading logistics and freight forwarding company.'
}

export default function AboutPage() {
  return <AboutPageContent />
}
