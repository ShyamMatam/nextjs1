'use client'

import React from 'react'
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';


// server component
// const ParamsSearchParams = ({ params, searchParams }) => {
//     const { id } = params;
//     const { lang = "en" } = searchParams || {};
//     return (
//         <div>
//             <h1>Reading Article in {lang}</h1>
//             <p>Article ID: {id}</p>
//             <Link href={`/params-search-params/${id}?lang=fr`} className='text-blue-500 hover:underline'>
//                 Change Language to French
//             </Link>
//             <Link href={`/params-search-params/${id}?lang=es`} className='text-blue-500 hover:underline'>
//                 Change Language to Spanish
//             </Link>
//             <Link href={`/params-search-params/${id}?lang=en`} className='text-blue-500 hover:underline'>
//                 Change Language to English
//             </Link>
//         </div>
//     );
// }

// export default ParamsSearchParams;

// client component


const ParamsSearchParams = () => {
     const params = useParams();
    const searchParams = useSearchParams();
    const id = params.id;
    const lang = searchParams.get('lang') || 'en';
    return (
        <div>
            <h1>Reading Article in {lang}</h1>
            <p>Article ID: {id}</p>
            <Link href={`/params-search-params/${id}?lang=fr`} className='text-blue-500 hover:underline'>
                Change Language to French
            </Link>
            <Link href={`/params-search-params/${id}?lang=es`} className='text-blue-500 hover:underline'>
                Change Language to Spanish
            </Link>
            <Link href={`/params-search-params/${id}?lang=en`} className='text-blue-500 hover:underline'>
                Change Language to English
            </Link>
        </div>
    );
}

export default ParamsSearchParams;


// page.js// This file is a client component that uses the useParams and useSearchParams hooks from Next.js
// to access the dynamic route parameters and search parameters.

// layout.js
// This file is a client component that uses the useParams and useSearchParams hooks from Next



// In Next.js, params and searchParams are used to access different types of URL parameters. params are used for dynamic route segments (like /products/[id]), while searchParams are used for query parameters (like /search?q=something). useParams and useSearchParams are React hooks for accessing these, respectively. In Server Components, searchParams are passed as a prop to the page component. 
// 1. params:
// Purpose: Accesses values from dynamic route segments. For example, in a route like pages/products/[id].js, params would contain the value of id from the URL.
// How to get it:
// Client Components: Use the useParams hook from next/navigation.
// Server Components: Access it as a prop passed to the page component: export default function Page({ params }: { params: { id: string } }) { ... }
// Example: 
// Code

//     // Client Component
//     import { useParams } from 'next/navigation';

//     function ProductPage() {
//       const params = useParams();
//       const id = params.id; // Access the 'id' parameter
//       return <p>Product ID: {id}</p>;
//     }
// Code

//     // Server Component
//     export default function Page({ params }: { params: { id: string } }) {
//       const { id } = params;
//       return <p>Product ID: {id}</p>;
//     }
// 2. searchParams:
// Purpose: Accesses query parameters from the URL (e.g., ?page=2&sort=name).
// How to get it:
// Client Components: Use the useSearchParams hook from next/navigation.
// Server Components: Access it as a prop: export default function Page({ searchParams }: { searchParams: { page: string, sort: string | undefined } }) { ... }
// How to use it:
// useSearchParams returns a URLSearchParams object, which has methods for getting, setting, and deleting search parameters.
// Server Components receive the searchParams prop, which is an object.
// Example: 
// Code

//     // Client Component
//     import { useSearchParams } from 'next/navigation';

//     function SearchResults() {
//       const searchParams = useSearchParams();
//       const query = searchParams.get('q'); // Get the 'q' parameter
//       return <p>Search query: {query}</p>;
//     }
// Code

//     // Server Component
//     export default function Page({ searchParams }: { searchParams: { page: string, sort: string | undefined } }) {
//       const { page, sort } = searchParams;
//       return (
//         <div>
//           <p>Page: {page}</p>
//           <p>Sort: {sort}</p>
//         </div>
//       );
//     }

// generatestaticparams.js
// This file is used to generate static parameters for dynamic routes in Next.js. It exports a function that returns an array of objects, each containing the parameters for a specific route. This is useful for pre-rendering pages with dynamic routes at build time.    
// Example:
// export async function generateStaticParams() {
//   const articles = await fetchArticles(); // Fetch articles from an API or database
//   return articles.map(article => ({
//     id: article.id.toString(), // Convert ID to string for dynamic route 
//     title: article.title
//   }));
// }
// This function fetches articles and returns an array of objects with the article ID and title, which can be used to generate static pages for each article at build time.
// This is useful for SEO and performance, as it allows Next.js to pre-render pages with