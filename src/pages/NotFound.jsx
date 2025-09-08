export const NotFound = () => (
    <section className="section-bridge min-h-screen flex items-center justify-center px-4 py-24">
        <div className="section-panel max-w-lg w-full mx-auto px-10 py-16 text-center">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">404</h1>
            <p className="text-lg text-white/80 mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 text-white font-semibold shadow-md transition hover:brightness-110 active:scale-95">Go Home</a>
        </div>
    </section>
);