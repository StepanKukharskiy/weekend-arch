import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
    // If user is not authenticated, redirect to signin
    if (!locals.user) {
        throw redirect(303, '/signin');
    }

    return { user: locals.user };
}