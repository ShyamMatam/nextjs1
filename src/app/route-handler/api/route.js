export async function GET(request) {

    return new Response(JSON.stringify({
        message: "Hello from the API route!"
    }));
}

// Purpose:
// To create custom request handlers (API routes) for a given route using the Web Request and Response APIs. These are essentially backend endpoints within your Next.js application.
// When to use:
// When you need to handle server-side logic, interact with databases, process form submissions, or provide data to your frontend components.

//==> if we have SEPARATE BACKEND SERVER(EXPRESS + NODEJS) , THEN WE DO NOT USE ROUTE HANDLERS. WE USE API ROUTES(OF BACKEND APIS) IN PAGES ROUTER.

// route.js >> page.js (specificity)
// Route Handlers in Next.js, particularly within the App Router, enable the creation of custom request handlers for specific routes using the Web Request and Response APIs. They serve as a powerful alternative to traditional API Routes (found in the Pages Router) for building server-side logic and handling various HTTP methods.

//  // Key Features of Route Handlers:
// 1. **Custom Request Handling**: Route Handlers allow you to define how your
//    application responds to different HTTP methods (GET, POST, PUT, DELETE, etc.) for specific routes.
// 2. **Direct Access to Request and Response**: They provide direct access to the
//    `Request` and `Response` objects, enabling fine-grained control over request processing and response generation.
// 3. **Middleware Integration**: Route Handlers can be used in conjunction with
//    middleware, allowing you to apply common logic (like authentication or logging) across multiple routes
// 4. **Dynamic Routing**: They support dynamic routing, enabling you to handle
//    routes with parameters (e.g., `/api/users/[id]`) and access those
//    parameters directly from the request object.
// 5. **Built-in Support for JSON**: Route Handlers can easily handle JSON data,
//    making it straightforward to build APIs that consume and produce JSON.

// 6. **Error Handling**: You can implement custom error handling logic within
//    Route Handlers, allowing you to return appropriate HTTP status codes and error messages based on


    // // app/api/users/route.js
    // export async function GET(request) {
    //   // Handle GET request
    //   return new Response(JSON.stringify({ message: "Hello from GET!" }), { status: 200 });
    // }

    // export async function POST(request) {
    //   const data = await request.json();
    //   // Handle POST request with data
    //   return new Response(JSON.stringify({ received: data }), { status: 200 });
    // }