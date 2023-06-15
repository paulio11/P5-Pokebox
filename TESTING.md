# Testing

## Contents

1. [Validation](#validation)
2. [Automated Testing](#automated-testing)
3. [Manual Testing](#manual-testing)
4. [Browser Testing](#browser-testing)
5. [Lighthouse Results](#lighthouse-results)
6. [User Stories](#user-stories)

## Validation

### HTML ([W3C Markup Validation](https://validator.w3.org/))

The only HTML file for this project, [index.html](https://github.com/paulio11/P5-Pokebox/blob/main/public/index.html), resides in the public directory. This essential file serves as the container for the React app. Although it may generate some errors when directly analyzed using the W3C Markup Validator due to the presence of variables in place of URLs, it's important to note that these variables, such as `"%PUBLIC_URL%"`, are dynamically replaced with actual URLs during the rendering and execution of the code.

To circumvent these validation errors, the source code was obtained by directly copying it from the compiled application within the web browser. This approach ensures that the final version of the HTML file successfully passes validation without any errors. For a visual representation of the validation results, you can refer to this [screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/validation-html.png).

### JavaScript ([ESLint](https://eslint.org/))

ESLint played a crucial role in maintaining the quality of my JavaScript code during the entire development process. By using ESLint, I was able to identify and address errors promptly, as they were displayed in the console while running the application. To ensure consistency and adherence to coding conventions, I utilized ESLint in conjunction with the Prettier plugin. This powerful combination allowed me to satisfy the linter's requirements, such as using double quotes and maintaining proper spacing around curly brackets.

Thanks to ESLint's continuous validation, I successfully eliminated all validation errors in the final product. You can observe in the accompanying gif that executing `npx eslint .` across all files returns zero errors. This demonstrates the effectiveness of ESLint in ensuring code quality. Additionally, when initiating `npm start` in the terminal, the application compiles successfully without any issues.

By leveraging ESLint and the integration with Prettier, I was able to streamline my development workflow, improve code consistency, and deliver a high-quality final product.

![ESLint in action](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/terminal.gif)

### CSS ([Jigsaw CSS Validation](https://jigsaw.w3.org/css-validator/))

| Filename                                                                                                                   | Result         | PDF Showing Results                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| [AllPosts.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/AllPosts.module.css)                     | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/allposts.pdf)           |
| [App.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/App.module.css)                               | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/app.pdf)                |
| [AuthForms.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/AuthForms.module.css)                   | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/authforms.pdf)          |
| [AvatarModal.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/AvatarModal.module.css)               | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/avatarmodal.pdf)        |
| [Comment.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/Comment.module.css)                       | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/comment.pdf)            |
| [CommentEditForm.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/CommentEditForm.module.css)       | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/commenteditform.pdf)    |
| [CommentForm.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/CommentForm.module.css)               | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/commentform.pdf)        |
| [Footer.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/Footer.module.css)                         | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/footer.pdf)             |
| [HomePage.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/HomePage.module.css)                     | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/homepage.pdf)           |
| [LoadingText.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/LoadingText.module.css)               | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/loadingtext.pdf)        |
| [NavBar.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/NavBar.module.css)                         | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/navbar.pdf)             |
| [Notification.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/Notification.module.css)             | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/notification.pdf)       |
| [Pokeball.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/Pokeball.module.css)                     | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/pokeball.pdf)           |
| [Pokemon.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/Pokemon.module.css)                       | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/pokemon.pdf)            |
| [PokemonDexPage.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/PokemonDexPage.module.css)         | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/pokemondexpage.pdf)     |
| [Post.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/Post.module.css)                             | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/post.pdf)               |
| [PostCommentFooter.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/PostCommentFooter.module.css)   | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/postcommentfooter.pdf)  |
| [PostForm.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/PostForm.module.css)                     | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/postform.pdf)           |
| [PostPage.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/PostPage.module.css)                     | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/postpage.pdf)           |
| [Settings.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/Settings.module.css)                     | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/settings.pdf)           |
| [ToTopButton.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/ToTopButton.module.css)               | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/totopbutton.pdf)        |
| [Trainer.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/Trainer.module.css)                       | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/trainer.pdf)            |
| [TrainerDiary.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/TrainerDiary.module.css)             | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/trainerdiary.pdf)       |
| [TrainerList.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/TrainerList.module.css)               | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/trainerlist.pdf)        |
| [TrainerProfilePage.module.css](https://github.com/paulio11/P5-Pokebox/blob/main/src/styles/TrainerProfilePage.module.css) | No Error Found | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/validation/trainerprofilepage.pdf) |

[Back to top 🔺](#testing)

## Automated Testing

The automated testing was conducted briefly and remains currently incomplete. However, it presents an opportunity for me to enhance my knowledge by delving deeper into this area - this was a learning experience. The testing encompassed the evaluation of the following components:

![Automated testing results](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing-automated-results.png)

### [Ball.test.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/__tests__/Ball.test.js)

| Test                               | Result |
| ---------------------------------- | ------ |
| Returns image                      | ✓      |
| Returns poké ball if size is 250   | ✓      |
| Returns great ball if size is 500  | ✓      |
| Returns ultra ball if size is 750  | ✓      |
| Returns masterball if size is 1010 | ✓      |

### [CustomModal.test.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/__tests__/CustomModal.test.js)

| Test                                         | Result |
| -------------------------------------------- | ------ |
| Button renders and modal is hidden           | ✓      |
| Modal elements render when button is clicked | ✓      |
| Modal hides when close button is clicked     | ✓      |

### [Footer.test.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/__tests__/Footer.test.js)

| Test           | Result |
| -------------- | ------ |
| Footer renders | ✓      |

### [NavBar.test.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/__tests__/NavBar.test.js)

| Test                                                         | Result |
| ------------------------------------------------------------ | ------ |
| Renders correct links when user is logged out                | ✓      |
| Renders correct links when user is logged in                 | ✓      |
| Renders "Log in" and "Register" again after clicking log out | ✓      |

[Back to top 🔺](#testing)

## Manual Testing

Manual testing proved to be more comprehensive. To ensure thoroughness, each test is accompanied by a screenshot or video (webm) illustrating the test outcome or procedure. Testing efforts were focused on the following pages/components:

### [Home](https://project-5-pokebox.herokuapp.com/)

| Test                                            | Expected Result                                            | Result |                                                                                                                         |
| ----------------------------------------------- | ---------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| Hover effect works for the main 3 links         | Hovering over each element turns the greyscale filter on.  | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-1.webm) |
| Pokémon element links to Pokémon list           | Clicking takes user to "/pokemon".                         | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-2.webm) |
| Trainers element links to Trainer list          | Clicking takes user to "/trainers".                        | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-3.webm) |
| Diaries element links to Diary Entries          | Clicking takes user to "/posts".                           | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-4.webm) |
| Random Pokémon shown on each visit to home page | Each reload of the home page shows a random Pokémon image. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-5.webm) |

### NavBar Component

| Test                                                                    | Expected Result                                                                                                        | Result |                                                                                                                            |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| Navbar swaps between mobile and desktop view                            | Full navbar shown at desktop widths, collapsed navbar shown at mobile widths.                                          | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-nav-1.webm)     |
| Hamburger button toggles display of navlinks                            | Clicking the icon shows navlinks, clicking again hides navlinks.                                                       | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-nav-2.webm)     |
| Navlinks hide when something is clicked                                 | Clicking any navlink or outside the navbar collapses it.                                                               | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-nav-3.webm)     |
| Home, Pokémon, Trainers, Diary Entries, Log in, and Register links work | Clicking links takes user to "/", "/pokemon", "/trainers", "/posts", "/login", and "/register".                        | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-nav-4.webm)     |
| Username, Log out and Settings links shows when a user is logged in     | When logged in I can see my username, and the Log out and Settings links.                                              | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-nav-5.png) |
| Log out link logs out user                                              | Clicking log out clears the current user, Log in and Register links are shown again, and log out notification pops up. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-nav-6.webm)     |
| Settings link works                                                     | Clicking takes user to "/settings".                                                                                    | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-nav-7.webm)     |
| Username link to logged in user's profile works                         | Logged in user's username shown in navbar, clicking it takes them to their profile page.                               | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-nav-8.webm)     |

### [Error 404](https://project-5-pokebox.herokuapp.com/banana)

| Test                                                 | Expected Result                                                                                                              | Result |                                                                                                                          |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| Component renders correctly and go back button works | Visiting "/banana" shows 404 error page with correct error message, clicking go back sends me to the previous page I visited | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-error-1.webm) |

### [Register](https://project-5-pokebox.herokuapp.com/register)

| Test                                          | Expected Result                                                                                   | Result |                                                                                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Username field is required                    | Not entering a username shows an alert message when clicking register.                            | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-1.png) |
| Trying a username with invalid characters     | Trying a username with a ? in shows an alert message when clicking register.                      | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-2.png) |
| Trying a username that is too long            | Trying a username over the allowed character limit shows an alert message when clicking register. | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-3.png) |
| Trying a username that already taken          | Trying a username already taken shows an alert message when clicking register.                    | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-9.png) |
| Password1 field is required                   | Not entering a password shows an alert message when clicking register.                            | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-4.png) |
| Trying a password that is too short           | Trying 1234 as my password show an alert message when clicking register.                          | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-5.png) |
| Password2 field is required                   | Not entering a password in the password2 field shows an alert message when clicking register.     | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-6.png) |
| Trying passwords that don't match             | Trying miss-matching passwords shows an alert message when clicking register.                     | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-7.png) |
| Registration works                            | Registration works, redirects user to log in page, and registration notification pops up.         | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-8.webm)     |
| Visiting register page when already logged in | Message and go back button shown, clicking go back sends me to the previous page I visited        | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-register-10.webm)    |

### [Log in](https://project-5-pokebox.herokuapp.com/login)

| Test                                        | Expected Result                                                                            | Result |                                                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Username field validation                   | Not entering a username shows an alert message when clicking log in.                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-1.png) |
| Password field validation                   | Not entering a password shows an alert message when clicking log in.                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-2.png) |
| Loggin in with incorrect password           | Entering an incorrect password shows an alert message when clicking log in.                | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-3.png) |
| Logging in works                            | Loggin in works, user is redirected to their profile page, log in notification pops up.    | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-4.webm)     |
| Vistiing log in page when already logged in | Message and go back button shown, clicking go back sends me to the previous page I visited | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-5.webm)     |

### Log out

| Test          | Expected Result                                                            | Result |                                                                                                                           |
| ------------- | -------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| Log out works | User is logged out, redirected to home page, log out notification pops up. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-logout-1.webm) |

### [Pokémon List](https://project-5-pokebox.herokuapp.com/pokemon)

| Test                                       | Expected Result                                                                                                                        | Result |                                                                                                                                    |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| List loads                                 | Loader shows, then a list of Pokémon rendered using the pokemon component.                                                             | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-1.png) |
| Infinite scroll works                      | Scrolling down the page loads more Pokémon using the react-infinite-scroll component.                                                  | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-2.webm)     |
| Pokémon collected status reflected to user | Pokémon I have collected are shown without the greyscale filter.                                                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-3.png) |
| No Pokémon collected as logged out user    | When not logged in all Pokémon have the greyscale filter.                                                                              | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-1.png) |
| Left click takes you to the Pokémon's page | Clicking on a Pokémon takes me to that Pokémon's information page.                                                                     | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-4.webm)     |
| Right click adds or removes                | Right clicking on a Pokémon adds or removes them from my collection, collection notification pops up, and greyscale filter is toggled. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-5.webm)     |
| Help modal                                 | Clicking the help button shows the modal with information, clicking the x closes the modal.                                            | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-6.webm)     |
| Search                                     | Typing mew into the search box shows Mew as the result, clearning the query returns me to the full list.                               | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-7.png) |
| Search with no results                     | Typing banana into the search box shows that there are no results.                                                                     | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemonlist-8.png) |

### [Pokémon Information](https://project-5-pokebox.herokuapp.com/pokemon/pikachu)

| Test                                | Expected Result                                                                                                                                                    | Result |                                                                                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Correct information                 | Visiting "/pokemon/1" shows the information for Bulbasaur.                                                                                                         | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemoninfo-2.png) |
| Previous and next buttons work      | Clicking the next increases the ID in the url and loads the next Pokémon, clicking the previous button decreases the ID in the url and loads the previous Pokémon. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemoninfo-1.webm)     |
| Previous button hidden on Pokémon 1 | On Bulbasaur's page there is no previous button.                                                                                                                   | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemoninfo-2.png) |
| Next button hidden on Pokémon 1010  | On Iron Leave's page there is no next button.                                                                                                                      | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemoninfo-3.png) |
| Add to collection button            | Clicking add to collection toggles the display of the button and the collected notification pops up.                                                               | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemoninfo-5.webm)     |
| Remove from collection button       | Clicking remove from collection toggles the display of the button and the removed from collection notification pops up.                                            | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemoninfo-4.webm)     |
| Favorite button                     | Clicking Set as Favorite toggles the display of the button and the new favorite notification pops up.                                                              | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemoninfo-6.webm)     |
| Unknown Pokémon error               | Visting "/pokemon/mewthree" shows the 404 error page with the correct message.                                                                                     | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-pokemoninfo-7.png) |

### [Trainer List](https://project-5-pokebox.herokuapp.com/trainers)

| Test                          | Expected Result                                                                                   | Result |                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Data fetched                  | Loader is shown then the list of trainers is displayed.                                           | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-1.png) |
| Infinite scroll works         | Scrolling down the page loads more trainers using the react-infinite-scroll component.            | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-2.webm)     |
| Search                        | Typing "oak" in the search box show's the results gary-oak AND professor-oak.                     | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-3.png) |
| Search with no resuts         | Typing "notatrainer" in the search box shows me no results and a message.                         | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-4.png) |
| Sort by collection descending | List is sorted so the trainers with the largest Pokémon collection are at the top (default order) | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-1.png) |
| Sort by collection ascending  | List is sorted so the trainers with the smallest Pokémon collection are at the top.               | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-5.png) |
| Sort by username descending   | List is sorted so the trainers are show in reverse alphabetical order by username.                | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-6.png) |
| Sort by username ascending    | List is sorted so the trainers are show in alphabetical order by username.                        | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-7.png) |
| Sort by date descending       | List is sorted so the newest trainers are shown at the top.                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-8.png) |
| Sort by date ascending        | List is sorted so the oldest trainers are shown at the top.                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-9.png) |
| Link to trainer profile       | Clicking a trainer card takes you to their profile.                                               | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-10.webm)    |

### [Trainer Profile](https://project-5-pokebox.herokuapp.com/trainer/19)

| Test                         | Expected Result                                                                                                                    | Result |                                                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Correct information shown    | Visting "/trainer/19" shows an loader then Ash's profile information.                                                              | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-1.png) |
| Clicking collection bar      | Clicking the collection bar reveals the user's Pokémon collection, scrolling down loads more Pokémon using react-infinite-scroll.  | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-2.webm)     |
| Alert shown if no collection | If a user has no collected Pokémon an alert shows with a message.                                                                  | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-3.png) |
| Diary posts load             | If a user has diary entries they are displayed, scrolling down loads more entries using react-infinite-scroll.                     | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-4.webm)     |
| Alert shown if no posts      | There is an alert with a message if there are no posts.                                                                            | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-5.png) |
| Edit button shown if owner   | When logged in and on your profile page the edit button should be there next to your description.                                  | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-6.png) |
| Can edit "about" if owner    | Clicking edit button toggles display of form, clicking save edits the description, profile updated notification pops up.           | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-7.webm)     |
| Can edit "avatar" if owner   | Hovering over avatar toggles overlay, clicking opens modal, can select file and save changes, avatar updated notification pops up. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-8.webm)     |
| Unknown profile error        | Visiting "/trainer/20000" shows the 404 error page with the correct message.                                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerinfo-9.png) |

### [Diary Entry List](https://project-5-pokebox.herokuapp.com/posts)

| Test                                 | Expected Result                                                                                                                   | Result |                                                                                                                                   |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Data fetched                         | Loader is shown then a list of the most recent diary entries are displayed, scrolling down loads more using react-infinite-scroll | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-1.webm)      |
| Sort by date descending              | Selecting date and descending shows the most recent posts at the top.                                                             | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-2.png)  |
| Sort by date ascending               | Selecting date and ascending shows the oldest posts at the top.                                                                   | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-3.png)  |
| Sort by like count descending        | Selecting like count and descending shows the most liked posts at the top.                                                        | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-4.png)  |
| Sort by like count ascending         | Selecting like count and ascending shows the least liked posts at the top.                                                        | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-5.png)  |
| Sort by comment count descending     | Selecting comment count and descending shows the posts with the most comments at the top.                                         | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-6.png)  |
| Sort by comment count ascending      | Selecting comment count and ascending shows the posts with the least comments at the top.                                         | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-7.png)  |
| Liked filter shown if logged in      | When logged in the "Show only entries I liked" filter is shown.                                                                   | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-8.png)  |
| No like filter if logged out         | If the user is logged out the "Show only entries I liked" filter should be hidden.                                                | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-9.png)  |
| Show only liked entries filter       | Ticking the "Show only entries I liked" checkbox shows only posts the logged in user liked.                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-10.png) |
| Show only entries with images filter | Ticking the "Show only entries with an image" checkbox shows only posts with an image.                                            | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-11.webm)     |
| Searching by text                    | Typing "pikachu" into the search field loads only posts containing the text pikachu.                                              | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-diarylist-12.png) |

### Post Component

| Test                                  | Expected Result                                                                                                                                             | Result |                                                                                                                              |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| All post information shown            | Post component renders post date, body, image, and owner correctly for each post.                                                                           | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-post-1.png)  |
| Time links to correct post page       | Clicking the red time in the post header takes you to that posts page.                                                                                      | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-post-2.webm)      |
| Username links to the owner's profile | Clicking the username or avatar in the post footer takes you to that user's profile.                                                                        | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-post-3.webm)      |
| Edit button shown if owner            | When I'm logged in and viewing one of my posts I can see the edit button.                                                                                   | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-post-4.png)  |
| Edit button not shown if not owner    | When I'm logged in or out and I'm viewing another's post I can't see the edit button.                                                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-post-5.png)  |
| Can't like if owner                   | When I'm logged in and viewing my own post I can't click the like button, the tooltip notifies me.                                                          | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-post-6.png)  |
| Like button                           | When I click the like button the tooltip changes, the post like count goes up, the heart turns pink, and the liked notification pops up.                    | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-post-7.webm) |
| Unlike button                         | When I click the unlike button the tooltip changes, the post like count goes down, the heart becomes just an outline, and the unliked notification pops up. | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-post-8.webm) |

### [Diary Entry Page](https://project-5-pokebox.herokuapp.com/post/36)

| Test                            | Expected Result                                                                                                         | Result |                                                                                                                                  |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Alert shown if logged out       | If I am logged out the comment form is hidden, and I see an alert message instead.                                      | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-postpage-1.png)  |
| Comment form shown if logged in | If I am logged in I can see the comment form.                                                                           | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-postpage-2.png)  |
| Comments loaded                 | A post's comments are shown and as I scroll down more load using react-infinite-scroll.                                 | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-postpage-3.webm)      |
| Posting new comment             | When I post a comment the comment appears, the post comment count goes up, and the posted comment notification pops up. | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-postpage-4.webm) |
| Unknown diary entry error       | Visiting "/post/9999" shows the 404 error page with the correct message.                                                | ✓      | [Screenshot ](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-postpage-5.png) |

### Comment Component

| Test                              | Expected Result                                                                                                                                                                                       | Result |                                                                                                                                |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| All comment information shown     | The comment component renders comment date, body, and owner correctly for each comment.                                                                                                               | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-comment-1.png) |
| Username links to owner's profile | Clicking the username in the footer of the comment takes me to that user's profile page.                                                                                                              | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-comment-2.webm)     |
| Edit button shown if owner        | When I'm logged in and viewing one of my comments I can see the edit button.                                                                                                                          | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-comment-3.png) |
| Edit form displays                | When I click the edit button the edit form appears, I can change the comment and save it, the edited comment notification pops up.                                                                    | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-comment-4.webm)     |
| Delete comment tests              | When I click the delete button, the delete modal appears, clicking yes deletes the comment, the comment is removed, the post's comment count goes down, and the deleted comment notification pops up. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-comment-5.webm)     |

### [New Post Page](https://project-5-pokebox.herokuapp.com/newpost)

| Test                      | Expected Result                                                                                                                                      | Result |                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Alert shown if logged out | If I am logged out and I visit "/newpost" I am shown an alert message with go back and log in buttons.                                               | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-newpost-1.png) |
| Mock post elements shown  | The current date and time are shown in the post form header, and clicking your username in the footer takes you to your profile.                     | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-newpost-2.webm)     |
| Body input validation     | The body input field is required, I can't post with it empty, an alert should be shown.                                                              | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-newpost-3.png) |
| Image upload              | I can select an image and it is displayed within the form.                                                                                           | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-newpost-4.webm)     |
| Submitting a post         | I can click the post diary entry button and my entry is posted, then I am redirected to that new post's page, and the new post notification pops up. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-newpost-5.webm)     |

### [Edit Post Page](https://project-5-pokebox.herokuapp.com/editpost/63)

| Test                                   | Expected Result                                                                                                                            | Result |                                                                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Unknown diary entry error              | Visiting "/editpost/9999" shows the 404 error page with the correct message.                                                               | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-editpost-1.png) |
| Alert shown if logged out or not owner | Entering the ID of a post I'm not the owner of in the address bar shows an alert.                                                          | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-editpost-2.png) |
| Correct post data loaded               | Visiting the edit page of a post I own loads and displays the correct data.                                                                | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-editpost-3.png) |
| Delete button                          | Clicking delete diary entry shows the modal, clicking yes deletes the post, redirected to profile page, deleted post notification pops up. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-editpost-4.webm)     |
| Save changes button                    | Clicking save changes updates the post, redirected to the post's page, edited post notification pops up.                                   | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-editpost-5.webm)     |

### [Settings](https://project-5-pokebox.herokuapp.com/settings)

| Test                             | Expected Result                                                                                                                                                                | Result |                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Username field required          | Leaving the username field empty and clicking change username shows that the field is required.                                                                                | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-1.png)  |
| Username not available           | Trying to change my username to someone elses shows an alert.                                                                                                                  | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-2.png)  |
| Username with invalid characters | Trying to include a ? in my username shows an alert.                                                                                                                           | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-3.png)  |
| Change username works            | Entering a valid user name and clicking change username will show the changed username notification and the change is instantly reflected in the nav bar.                      | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-4.webm)      |
| Old password incorrect           | Entering the wrong old password and clicking change password shows an alert.                                                                                                   | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-5.png)  |
| Old password field validation    | Attempting to change password without entering my old password shows an alert.                                                                                                 | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-6.png)  |
| New password field required      | Leaving the new password field empty and clicking change password shows that the field is required.                                                                            | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-7.png)  |
| Confirm password field required  | Leaving the confirm password field empty and clicking change password shows that the field is required.                                                                        | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-8.png)  |
| Passwords don't match            | Entering passwords that don't match into both fields and clicking change password shows an alert.                                                                              | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-9.png)  |
| Short password                   | Trying 1234 as my password show an alert message when clicking register.                                                                                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-10.png) |
| Change password works            | Correctly entering my old password and the same valid password in both fields then clicking okay changes my password, the changed password notification pops up.               | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-11.webm)     |
| Logged out settings page         | Visiting the settings page as a logged out user shows an alert, a go back button that takes me back to my previous page, and a log in button that takes me to the log in page. | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-settings-12.png) |

### ToTopButton Component

| Test                                       | Expected Result                                                                                                                                           | Result |                                                                                                                        |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| To Top button displays correctly and works | At first the button is hidden, scrolling down shows the button, clicking the button scrolls back to the top of the page, then the button is hidden again. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-top-1.webm) |

[Back to top 🔺](#testing)

## Browser Testing

| Browser             | Screenshot     |
| ------------------- | -------------- |
| Google Chrome       | [Screenshot]() |
| Edge                | [Screenshot]() |
| Safari              | [Screenshot]() |
| Mobile Safari (iOS) | [Screenshot]() |

[Back to top 🔺](#testing)

## Lighthouse Results

All possible pages were checked using Lighthouse in desktop mode. My main aim with Lighthouse is to get the Accessibility score as high as possible. Any unresolved issues were left as such because they are either out of my control (response times etc) or intensional. Results were not recorded as screenshots due to constant variations in score observed with repeat analyzing. These are the results I found at time of submission (your own results may vary based on page content at the time of testing):

| Page                                                                           | Performance | Accessibility | Best Practices | SEO |
| ------------------------------------------------------------------------------ | ----------- | ------------- | -------------- | --- |
| [Home](https://project-5-pokebox.herokuapp.com/)                               | 93          | 100           | 100            | 100 |
| [Pokémon list](https://project-5-pokebox.herokuapp.com/pokemon)                | 90          | 100           | 100            | 100 |
| [Pokémon information](https://project-5-pokebox.herokuapp.com/pokemon/pikachu) | 98          | 100           | 100            | 100 |
| [Trainer list](https://project-5-pokebox.herokuapp.com/trainers)               | 95          | 100           | 92             | 100 |
| [Trainer profile](https://project-5-pokebox.herokuapp.com/trainer/15)          | 89          | 100           | 92             | 100 |
| [Post list](https://project-5-pokebox.herokuapp.com/posts)                     | 92          | 100           | 92             | 100 |
| [Post page](https://project-5-pokebox.herokuapp.com/post/37)                   | 94          | 100           | 92             | 100 |
| [New post page](https://project-5-pokebox.herokuapp.com/newpost)               | 100         | 100           | 92             | 100 |
| [Edit post page](https://project-5-pokebox.herokuapp.com/newpost)              | 100         | 100           | 92             | 100 |
| [Settings](https://project-5-pokebox.herokuapp.com/settings)                   | 100         | 100           | 100            | 100 |
| [Log in](https://project-5-pokebox.herokuapp.com/login)                        | 100         | 100           | 92             | 100 |
| [Register](https://project-5-pokebox.herokuapp.com/register)                   | 100         | 100           | 92             | 100 |

- Overall, I am satisfied with the Lighthouse results, especially considering the immense amount of data that needs to be fetched and displayed on certain pages.
- The only performance-related concerns revolved around images not being assigned specific heights and widths. This is evident in cases where the images needed to adapt to the size of their containers in order to ensure optimal responsiveness throughout the website.
- The login and register pages received lower marks due to console errors. It's important to highlight that these errors are expected because they occur when no user is logged in.
- I encountered an issue with pages that display a user avatar, which unfortunately remained unresolved due to my inability to determine the underlying cause. It's important to note that this particular issue did not have a significant impact on the overall Best Practice scores, although it remained unresolved. Despite my efforts, I was unable to identify and implement a solution for this specific problem.

![pages with avatar issue](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing-avatar-issue.png)

[Back to top 🔺](#testing)

## User Stories

All user stories were achieved during development and were subject to manual user testing. You can see a list of all user stories in my readme [here](https://github.com/paulio11/P5-Pokebox#epics-and-user-stories).

[Back to top 🔺](#testing)
