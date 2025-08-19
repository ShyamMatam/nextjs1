export default function LazyComponent() {
    return (
        <div className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
                🚀 Lazy Loaded Component
            </h3>
            <p className="text-blue-700 mb-3">
                This component was loaded only when you clicked the button!
            </p>
            <div className="text-sm text-blue-600">
                <p>• Reduces initial bundle size</p>
                <p>• Improves page load performance</p>
                <p>• Loaded on-demand</p>
            </div>
        </div>
    );
} 