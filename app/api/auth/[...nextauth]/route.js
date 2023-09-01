import NextAuth from "next-auth";
import { users } from '@/helpers/constants';
import CredentialsProvider from "next-auth/providers/credentials";
// import { GitHubProvider } from "next-auth/providers/github";

export const authOptions = {
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      name: 'creds',
      credentials: {
        email: {label : 'email', placeholder: 'Enter your email'},
        password: {label : 'password', placeholder: 'Enter your password'}
      },
      async authorize(credentials){
        if(!credentials || !credentials.email || !credentials.password)
          return null;
        const user = users.find((item) => item.email === credentials.email);
        if(user.password === credentials.password){
          return user;
        }
        return null;
      },
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }