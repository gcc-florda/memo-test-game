'use server';

import { signIn } from '@/security/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

// ...

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function registerUser(
    prevState: string | undefined,
    formData: FormData) {
    console.log("HOLA")
    try {


        const newUserName = formData.get('name')?.toString();
        const newUserPassword = formData.get('password')?.toString();

        // Register User
        console.log(newUserName, newUserPassword);

        localStorage.setItem('user', JSON.stringify(newUserName));
        localStorage.setItem('password', JSON.stringify(newUserPassword));

        // await signIn('credentials', formData);

        revalidatePath('/') // Update cached posts
        redirect("/home") // Navigate to the new post page

        return newUserName

    }
    catch (e) {
        throw e;
    }
}