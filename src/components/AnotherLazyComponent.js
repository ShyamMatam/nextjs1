export default function AnotherLazyComponent() {
    return (
        <div className="mt-4 p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
                🌟 Another Lazy Component
            </h3>
            <p className="text-green-700 mb-3">
                This is a second lazy-loaded component with different styling!
            </p>
            <div className="text-sm text-green-600">
                <p>• Each component loads independently</p>
                <p>• Better user experience</p>
                <p>• Progressive loading</p>
            </div>
        </div>
    );
} 