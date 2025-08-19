export default function DynamicComponent() {
    return (
        <div className="mt-4 p-6 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">
                ⚡ Dynamic Component
            </h3>
            <p className="text-purple-700 mb-3">
                This component uses Next.js dynamic() import with custom loading state!
            </p>
            <div className="text-sm text-purple-600">
                <p>• Uses Next.js dynamic() function</p>
                <p>• Custom loading state defined</p>
                <p>• SSR disabled for client-only rendering</p>
                <p>• Better code splitting control</p>
            </div>
        </div>
    );
} 