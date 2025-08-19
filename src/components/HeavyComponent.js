export default function HeavyComponent() {
    return (
        <div className="mt-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">
                🏋️ Heavy Component
            </h3>
            <p className="text-orange-700 mb-3">
                This component simulates a heavy, resource-intensive component!
            </p>
            <div className="text-sm text-orange-600">
                <p>• Uses spinner loading animation</p>
                <p>• SSR enabled for better SEO</p>
                <p>• Loaded only when needed</p>
                <p>• Improves initial page performance</p>
            </div>

            {/* Simulate heavy content */}
            <div className="mt-4 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="h-16 bg-orange-200 rounded animate-pulse"></div>
                ))}
            </div>
        </div>
    );
} 