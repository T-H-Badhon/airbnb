import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from"bcrypt";

import prisma from '../../../app/libs/prismaDB';
import NextAuth from "next-auth";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Ensure credentials is defined and has the expected structure
                if (!credentials) {
                    throw new Error('Invalid credentials') // Or handle error as appropriate
                }

                const { email, password } = credentials;

                // Example: Fetch user from your database
                const user = await prisma.user.findUnique({
                    where: { email },
                });

                // Implement your password verification logic here (e.g., bcrypt.compare)
                if (!user && !user.hashedPassword) { // Use a secure password check
                    throw new Error('Invalid credentials')
                    // return { id: user.id, email: user.email }; // Return user object
                }
                // return null; // Return null if user not found or password is incorrect

                const isCorrectPassword = await bcrypt.compare(
                    password,
                    user.hashedPassword
                )
                if(!isCorrectPassword){
                    throw new Error('Invalid credentials')
                }
                return user;
            },
        }),
    ],
    pages:{
        signIn:'/',
    },
    debug:process.env.NODE_ENV === 'development',
    session:{
        strategy:'jwt'
    },
    secret:process.env.NEXTAUTH_SECRET,
    // Other NextAuth options can be added here
};

export default NextAuth(authOptions);
