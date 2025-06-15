'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center border border-red-200">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Application Error
            </h2>
            <p className="font-fustat text-gray-600 mb-6">
              A critical error occurred in the application.
            </p>
            <button
              onClick={() => reset()}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
