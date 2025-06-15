export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 bg-teal-600 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 bg-teal-400 mx-auto mb-4"></div>
        <p className="font-fustat bg-teal-200 text-lg">Loading Mutai Enterprise...</p>
      </div>
    </div>
  )
}
