# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vite
- [React](https://reactjs.org/) - JS library
- React Router
- [Tailwindcss](https://styled-components.com/) - For styles

### What I learned

I was able to implement a protected route which could only be accessed when a valid email address has been provided by the user because I didn't want a situation whereby a user would basically search in the success url path("/success") and get access to the success page without passing in their email.

```js
<Route
  path="success"
  element={
    <ProtectedRoute>
      <SuccessPage />
    </ProtectedRoute>
  }
/>

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useEmailAuth();
  const navigate = useNavigate();
  
  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, navigate],
  );

  return isAuthenticated ? children : null;
}
```

### Continued development

Still trying to adapt to using tailwind and I'm thankful the tailwind documentation is easy to understand, definitely styling more projects with Tailwindcss😁💯.

### Useful resources

- Tailwindcss Doc

## Author

- Github - [Raphael Wisdom Chidera](https://github.com/Heisdera)
- Frontend Mentor - [@Heisdera](https://www.frontendmentor.io/profile/Heisdera)
- Twitter - [@Heisdera_Tech](https://twitter.com/Heisdera_Tech)

## Acknowledgments

A special thank you to myself for completing my first Single Page Application with React Router and Tailwindcss😇.
