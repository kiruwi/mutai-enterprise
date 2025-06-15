import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="font-sk-modernist text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="font-sk-modernist text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="font-fustat text-gray-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary hover:bg-primary/80 text-white font-sk-modernist font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
