"use client";
import { useState, Suspense, lazy } from "react";

// Lazy load components - they will only be loaded when needed
const LazyComponent = lazy(() => import("@/components/LazyComponent"));
const AnotherLazyComponent = lazy(() => import("@/components/AnotherLazyComponent"));

export default function LazyLoadingPage() {
    const [showComponent, setShowComponent] = useState(false);
    const [showAnother, setShowAnother] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    Lazy Loading Demo
                </h1>

                <div className="space-y-6">
                    {/* First Lazy Component */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Component 1</h2>
                        <button
                            onClick={() => setShowComponent(!showComponent)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            {showComponent ? "Hide" : "Show"} Lazy Component
                        </button>

                        {showComponent && (
                            <Suspense fallback={
                                <div className="mt-4 p-4 bg-gray-200 rounded animate-pulse">
                                    Loading Component...
                                </div>
                            }>
                                <LazyComponent />
                            </Suspense>
                        )}
                    </div>

                    {/* Second Lazy Component */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Component 2</h2>
                        <button
                            onClick={() => setShowAnother(!showAnother)}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        >
                            {showAnother ? "Hide" : "Show"} Another Lazy Component
                        </button>

                        {showAnother && (
                            <Suspense fallback={
                                <div className="mt-4 p-4 bg-gray-200 rounded animate-pulse">
                                    Loading Another Component...
                                </div>
                            }>
                                <AnotherLazyComponent />
                            </Suspense>
                        )}
                    </div>

                    {/* Explanation */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">
                            How Lazy Loading Works:
                        </h3>
                        <ul className="text-blue-700 space-y-1">
                            <li>• Components are only loaded when they're actually needed</li>
                            <li>• Reduces initial bundle size and improves page load time</li>
                            <li>• Uses React.lazy() and Suspense for smooth loading</li>
                            <li>• Fallback UI is shown while component loads</li>
                            <li> In Reactjs we use Lazy, Suspense and in Nextjs we use Dynamic</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 