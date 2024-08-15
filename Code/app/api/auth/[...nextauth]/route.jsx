import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "custom-backend",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const response = await fetch(
          process.env.BACKEND_API + "/Auth/AuthTokenLogin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName: username, password }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          const user = {
            ...data,
            token: data.token,
            userProfile: data.profileUser,
            expires: Math.floor(Date.now() / 1000) + 60,
          };
          console.log("user", user);
          return user;
        } else {
          throw new Error(data.message || "Authentication failed");
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (
        account &&
        user &&
        user.expires &&
        user.expires > Math.floor(Date.now() / 1000)
      ) {
        return {
          ...token,
          ...user,
          accessToken: user.token,
          // refreshToken: user.refreshToken,
          // userProfile: user,
          token: user.token,
          expires: user.expires,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      // session.user.refreshToken = token.refreshToken;
      // session.user.accessTokenExpires = token.accessTokenExpires;
      session.user.userId = token.userId;
      session.user.userName = token.userName;
      session.user.token = token.token;
      session.user.expires = token.expires;
      session.user.roles = token.role;

      return session;
    },
    // redirect: async (url, baseUrl) => {
    //   return url.startsWith(baseUrl)
    // ? Promise.resolve(url)
    //     : Promise.resolve(baseUrl);
    // },
  },
});

export const GET = nextAuthHandler;
export const POST = nextAuthHandler;
