# Testing

## Contents

1. [Validation](#validation)
2. [Automated Testing](#automated-testing)
3. [Manual Testing](#manual-testing)
4. [Browser Testing](#browser-testing)
5. [Lighthouse Results](#lighthouse-results)
6. [User Stories](#user-stories)

## Validation

### CSS ([Jigsaw CSS Validation](https://jigsaw.w3.org/css-validator/))

### JavaScript ([JSHint](https://jshint.com/))

### HTML ([W3C Markup Validation](https://validator.w3.org/))

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

Manual testing proved to be more comprehensive. To ensure thoroughness, each test is accompanied by a screenshot or Video illustrating the test outcome or procedure. Testing efforts were focused on the following pages/components:

### [Home](https://project-5-pokebox.herokuapp.com/)

| Test                                            | Expected Result                                            | Result | Screenshot / Video                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| Hover effect works for the main 3 links         | Hovering over each element turns the greyscale overlay on. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-1.webm) |
| Pokémon element links to Pokémon list           | Clicking takes user to "/pokemon".                         | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-2.webm) |
| Trainers element links to Trainer list          | Clicking takes user to "/trainers".                        | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-3.webm) |
| Diaries element links to Diary Entries          | Clicking takes user to "/posts".                           | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-4.webm) |
| Random Pokémon shown on each visit to home page | Each reload of the home page shows a random Pokémon image. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-home-5.webm) |

### NavBar Component

| Test                                                                    | Expected Result                                                                                                        | Result | Screenshot / Video                                                                                                         |
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

| Test                                                 | Expected Result                                                                                                              | Result | Screenshot / Video                                                                                                       |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| Component renders correctly and go back button works | Visiting "/banana" shows 404 error page with correct error message, clicking go back sends me to the previous page I visited | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-error-1.webm) |

### [Register](https://project-5-pokebox.herokuapp.com/register)

| Test                                          | Expected Result                                                                                   | Result | Screenshot / Video                                                                                                              |
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

| Test                                        | Expected Result                                                                            | Result | Screenshot / Video                                                                                                           |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Username field validation                   | Not entering a username shows an alert message when clicking log in.                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-1.png) |
| Password field validation                   | Not entering a password shows an alert message when clicking log in.                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-2.png) |
| Loggin in with incorrect password           | Entering an incorrect password shows an alert message when clicking log in.                | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-3.png) |
| Logging in works                            | Loggin in works, user is redirected to their profile page, log in notification pops up.    | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-4.webm)     |
| Vistiing log in page when already logged in | Message and go back button shown, clicking go back sends me to the previous page I visited | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-login-5.webm)     |

### Log out

| Test          | Expected Result                                                            | Result | Screenshot / Video                                                                                                        |
| ------------- | -------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| Log out works | User is logged out, redirected to home page, log out notification pops up. | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-logout-1.webm) |

### [Pokémon List](https://project-5-pokebox.herokuapp.com/pokemon)

| Test                                       | Expected Result                                                                                                                        | Result | Screenshot / Video                                                                                                                 |
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

| Test                                | Expected Result                                                                                                                                                    | Result | Screenshot / Video                                                                                                                 |
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

| Test                          | Expected Result                                                                                   | Result | Screenshot / Video                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Data fetched                  | Loader is shown then the list of trainers is displayed.                                           | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-1.png) |
| Infinite scroll works         | Scrolling down the page loads more trainers using the react-infinite-scroll component.            | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-2.webm)     |
| Search                        | Typing "ash" in the search box show's me Ash's trainer card.                                      | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-3.png) |
| Search with no resuts         | Typing "notatrainer" in the search box shows me no results and a message.                         | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-4.png) |
| Sort by collection descending | List is sorted so the trainers with the largest Pokémon collection are at the top (default order) | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-1.png) |
| Sort by collection ascending  | List is sorted so the trainers with the smallest Pokémon collection are at the top.               | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-5.png) |
| Sort by username descending   | List is sorted so the trainers are show in reverse alphabetical order by username.                | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-6.png) |
| Sort by username ascending    | List is sorted so the trainers are show in alphabetical order by username.                        | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-7.png) |
| Sort by date descending       | List is sorted so the newest trainers are shown at the top.                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-8.png) |
| Sort by date ascending        | List is sorted so the oldest trainers are shown at the top.                                       | ✓      | [Screenshot](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-9.png) |
| Link to trainer profile       | Clicking a trainer card takes you to their profile.                                               | ✓      | [Video](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test-trainerlist-10.webm)    |

### [Trainer Profile](https://project-5-pokebox.herokuapp.com/trainer/19)

| Test                         | Expected Result                                                                                                                    | Result | Screenshot / Video                                                                                                                 |
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

| Test                                 | Result | Screenshot / Video                                                                                             |
| ------------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------- |
| Data fetched                         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Infinite scroll                      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Sort by date descending              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Sort by date ascending               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Sort by like count descending        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Sort by like count ascending         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Sort by comment count descending     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Sort by comment count ascending      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Liked filter shown if logged in      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| No like filter if logged out         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Show only liked entries filter       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Show only entries with images filter | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |

### Post Component

| Test                                  | Result | Screenshot / Video                                                                                             |
| ------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| All post information shown            | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Time links to correct post page       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Username links to the owner's profile | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Edit button shown if owner            | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Edit button not shown if not owner    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Can't like if owner                   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Like button                           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Like notification                     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Like count goes up                    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Unlike button                         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Unlike notification                   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Like count goes down                  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |

### [Diary Entry Page](https://project-5-pokebox.herokuapp.com/post/36)

| Test                            | Result | Screenshot / Video                                                                                             |
| ------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| Alert shown if logged out       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Comment form shown if logged in | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Comments loaded                 | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Comments infinite scroll        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Posting new comment             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| New comment notification        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Comment count goes up           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Unknown diary entry error       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |

### Comment Component

| Test                              | Result | Screenshot / Video                                                                                             |
| --------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| All comment information shown     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Username links to owner's profile | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Edit button shown if owner        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Edit form displays                | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Save changes button works         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Edited comment notification       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Delete comment button shows modal | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Click yes deletes comment         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Deleted comment notification      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Comment removed                   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Comment count goes down           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |

### [New Post Page](https://project-5-pokebox.herokuapp.com/newpost)

| Test                              | Result | Screenshot / Video                                                                                             |
| --------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| Alert shown if logged out         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Time and date shown               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Username shown with working link  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Body input validation             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Image upload                      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Post button works                 | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| New post notification             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Redirected to the new post's page | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |

### [Edit Post Page](https://project-5-pokebox.herokuapp.com/newpost)

| Test                                   | Result | Screenshot / Video                                                                                             |
| -------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| Unknown diary entry error              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Alert shown if logged out or not owner | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Correct post data loaded               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Delete button shows modal              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Clicking yes deletes post              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Deleted post notification              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Save changes button works              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Edited post notification               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Redirected to the post's page          | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |

### [Settings](https://project-5-pokebox.herokuapp.com/newpost)

| Test                           | Result | Screenshot / Video                                                                                             |
| ------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------- |
| Username field validation      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Change username works          | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Changed username notification  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Change reflected in nav bar    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Old password field validation  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| New password fields validation | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Change password works          | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |
| Change password notification   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/manualtesting/test.png) |

<!-- Something shown when logged out -->

### ToTopButton Component

| Test | Result | Screenshot / Video |
| ---- | ------ | ------------------ |

[Back to top 🔺](#testing)

## Browser Testing

| Browser             | Screenshot     |
| ------------------- | -------------- |
| Google Chrome       | [Screenshot]() |
| Edge                | [Screenshot]() |
| Safari              | [Screenshot]() |
| Mobile Safari (iOS) | [Screenshot]() |

<!-- Mention tracking issue thingy here.... -->

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
