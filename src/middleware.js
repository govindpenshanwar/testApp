import { NextRequest, NextResponse } from "next/server";

export function middleware(request = NextRequest){
    const path = request.nextUrl.pathname;

    if(path.startsWith("/api")){
        NextResponse.next().headers.append("Access-Control-Allow-Origin" , "*");
    }
    const isPublic = path === "/login" || path === "/signUp";
    
    const token = request.cookies.get('token')?.value||"";

    if(isPublic && token){
        return NextResponse.redirect(new URL('/', request.nextUrl));
    };

    if(!isPublic && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl));
     };
}

export const config = {
    matcher : [
        '/',
        '/login',
        '/signUp',
        '/profile'
    ]
};


// import { NextRequest, NextResponse } from "next/server";


// export function middleware(request = NextRequest){
//     const path = request.nextUrl.pathname;

//     const isPublic = path === '/login' || path === 'signUp'

//     const token = request.cookies.get('token')?.value||"";

//     if(isPublic && token){
//         return NextResponse.redirect(new URL('/', request.nextUrl))
//     };

//     if(!isPublic && !token){
//         return NextResponse.redirect(new URL('/login' , request.nextUrl));
//     }

// }

// export const config = {
//     matcher : [
//         '/',
//         '/profile',
//         '/login',
//         '/signUp'
        
//     ]
// };