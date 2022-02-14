import { signupUser, signInUser, redirectIfLoggedIn, getUser } from './fetch-utils.js';
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

const user = await getUser();

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (event)=>{
    event.preventDefault();
    
    const user = await signupUser(signUpEmail.value, signUpPassword.value);
});

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const user = await signInUser(signInEmail.value, signInPassword.value);
});

// Redirect to /other-page on successful auth

// Redirect to /other-page when page loads if user is authenticated
