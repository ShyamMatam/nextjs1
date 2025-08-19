"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamic imports with loading states and error boundaries
const DynamicComponent = dynamic(
    () => import("@/components/DynamicComponent"),
    {
        loading: () => (
            <div className="p-4 bg-gray-200 rounded animate-pulse">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
        ),
        ssr: false, // Disable server-side rendering for this component
    }
);

const HeavyComponent = dynamic(
    () => import("@/components/HeavyComponent"),
    {
        loading: () => (
            <div className="p-4 bg-blue-100 rounded border border-blue-300">
                <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                    <span className="text-blue-700">Loading Heavy Component...</span>
                </div>
            </div>
        ),
        ssr: true, // Enable server-side rendering
    }
);

export default function DynamicImportPage() {
    const [showDynamic, setShowDynamic] = useState(false);
    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    Dynamic Import Demo
                </h1>

                <div className="space-y-6">
                    {/* Dynamic Component with Custom Loading */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Dynamic Component</h2>
                        <p className="text-gray-600 mb-4">
                            This component uses Next.js dynamic() with custom loading state and SSR disabled.
                        </p>
                        <button
                            onClick={() => setShowDynamic(!showDynamic)}
                            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
                        >
                            {showDynamic ? "Hide" : "Show"} Dynamic Component
                        </button>

                        {showDynamic && <DynamicComponent />}
                    </div>

                    {/* Heavy Component with Spinner Loading */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Heavy Component</h2>
                        <p className="text-gray-600 mb-4">
                            This component uses dynamic() with spinner loading and SSR enabled.
                        </p>
                        <button
                            onClick={() => setShowHeavy(!showHeavy)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                        >
                            {showHeavy ? "Hide" : "Show"} Heavy Component
                        </button>

                        {showHeavy && <HeavyComponent />}
                    </div>

                    {/* Explanation */}
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                            How Dynamic Imports Work:
                        </h3>
                        <ul className="text-green-700 space-y-1">
                            <li>• Uses Next.js dynamic() function for code splitting</li>
                            <li>• Components are loaded only when needed</li>
                            <li>• Custom loading states can be defined</li>
                            <li>• SSR can be controlled (enabled/disabled)</li>
                            <li>• Better performance through chunk splitting</li>
                        </ul>
                    </div>

                    {/* Code Example */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-white mb-3">Code Example:</h3>
                        <pre className="text-green-400 text-sm overflow-x-auto">
                            {`import dynamic from "next/dynamic";

const MyComponent = dynamic(() => import("./MyComponent"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
} 