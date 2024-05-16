export const authConfig = {
    pages:{
        signIn:'/login'
    },
    providers: [],
    callbacks: {
        async jwt({token, user}:any){
            if(user){
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({session, token}:any){
            if(token){
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({auth, request}:any){
            const user = auth?.user;
            const forAdmin = request.nextUrl?.pathname?.startsWith('/admin');
            const forBlog = request.nextUrl?.pathname?.startsWith('/blog');
            const forLogin = request.nextUrl?.pathname?.startsWith('/login');


            if (forAdmin && !user?.isAdmin) {
                return false;
              }
        
        
              if (forBlog && !user) {
                return false;
              }

              if (forLogin && user) {
                return Response.redirect(new URL("/", request.nextUrl));
              }
        
              return true;
        }
    }
}