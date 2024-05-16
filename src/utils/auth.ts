import NextAuth, { Account, Profile } from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./connectToDB";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { ErrorMsgs } from "./errorEnums";
import { authConfig } from "./auth.config";


const login = async (credentials: any)=>{

    try {
        connectToDB();
        const {username, password} = credentials;
        const user = await User.findOne({email: username});

        if(!user){
            return new Error(ErrorMsgs.INVALID_LOGIN_CREDS);
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return new Error(ErrorMsgs.INVALID_LOGIN_CREDS);
        }
        return user;

    } catch (error) {
        return new Error(ErrorMsgs.INVALID_LOGIN_CREDS);
    }
}

export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({ 
    ...authConfig,
    providers: [ 
        GitHub({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID||'',
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET||'',
        }),
        CredentialsProvider({
            async authorize(credentials: any){
                try {
                    let user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn(params:{user: any, account: Account | null, profile?: Profile | undefined}) {
            if(params.account?.provider=='github'){
                connectToDB();
                try {
                    const user:any = await User.findOne({email: params.user?.email});

                    if(!user){
                        const newUser = new User({
                            username: params.profile?.login,
                            email: params.profile?.email,
                            img: params.profile?.avatar_url
                        });

                        await newUser.save();
                    }

                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks
    } 

})
