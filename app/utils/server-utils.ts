// import "server-only" 
// the above package is to make a component to be used only on server side
// Understanding server and client components composition in Next.js, the following function is intended to run only on the server side. It can utilize server-side capabilities such as accessing environment variables, databases, and other secure operations.

// same thing with the client-only package that is for client side components

// use the use client directive deep in the heirarchy tree where client side features are needed,if you make a parent component a client component all its child components will also become client components and you will loose all the server side features.

// The third party packaged that use client side features cannot be displayed in a server component indeed we can add a "use client" directive at the top of the file to make it a client component but in that case we will loose all the server side capabilities and the sensitve data handling features of the server component.So we make a client component seperately and call it within the server component to achieve both client side features and server side features.

export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        environment variables,
        interact with database,
        process confidential information, etc.`,
    )
    return "Server Side Function Result";
};