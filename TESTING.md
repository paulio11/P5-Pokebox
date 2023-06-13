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
| Buttom renders and modal is hidden           | ✓      |
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

Manual testing was more comprehensive. Testing was carried out on the following pages/components:

### [Home](https://project-5-pokebox.herokuapp.com/)

| Test                   | Result | Screenshot / GIF                                                                                    |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Hover effects on links | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Pokémon link           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Trainers link          | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Diaries link           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Random Pokémon shown   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Error 404](https://project-5-pokebox.herokuapp.com/banana)

| Test              | Result | Screenshot / GIF                                                                                    |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Component renders | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Go back button    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Register](https://project-5-pokebox.herokuapp.com/register)

| Test                       | Result | Screenshot / GIF                                                                                    |
| -------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Username field validation  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Password1 field validation | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Password2 field validation | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Registration               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Registration notification  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Redirected to log in page  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Log in](https://project-5-pokebox.herokuapp.com/login)

| Test                       | Result | Screenshot / GIF                                                                                    |
| -------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Username field validation  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Password field validation  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Log in                     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Log in notification        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Redirected to profile page | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### Log out

| Test                    | Result | Screenshot / GIF                                                                                    |
| ----------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Log out notification    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Redirected to home page | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Current user cleared    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Pokémon List](https://project-5-pokebox.herokuapp.com/pokemon)

| Test                                       | Result | Screenshot / GIF                                                                                    |
| ------------------------------------------ | ------ | --------------------------------------------------------------------------------------------------- |
| List loads                                 | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Infinite scroll                            | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Pokémon collected status reflected to user | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| No Pokémon collected as logged out user    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Left click takes you to the Pokémon's page | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Right click adds or removes                | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Updating collection shows notification     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Help modal                                 | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Search                                     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Search with no results                     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Pokémon component renders for each Pokémon | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Pokémon Information](https://project-5-pokebox.herokuapp.com/pokemon/pikachu)

| Test                          | Result | Screenshot / GIF                                                                                    |
| ----------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Correct information           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Previous button               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Next button                   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Add to collection button      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Added notification            | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Remove from collection button | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Removed notification          | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Favorite button               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Favorite notification         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Unknown Pokémon error         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Trainer List](https://project-5-pokebox.herokuapp.com/trainers)

| Test                                       | Result | Screenshot / GIF                                                                                    |
| ------------------------------------------ | ------ | --------------------------------------------------------------------------------------------------- |
| Data fetched                               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Infinite scroll                            | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Search                                     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Search with no resuts                      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by collection descending              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by collection ascending               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by username descending                | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by username ascending                 | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by date descending                    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by date ascending                     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Trainer component renders for each trainer | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Ball component                             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Link to trainer profile                    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Trainer Profile](https://project-5-pokebox.herokuapp.com/trainer/19)

| Test                         | Result | Screenshot / GIF                                                                                    |
| ---------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Correct information shown    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Clicking collection bar      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Collection loads             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Collection infinite scroll   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Alert shown if no collection | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Diary posts load             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Diary posts infinite scroll  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Alert shown if no posts      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Edit button shown if owner   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Can edit "about" if owner    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Avatar modal shown if owner  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Can edit "avatar" if owner   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Unknown profile error        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Diary Entry List](https://project-5-pokebox.herokuapp.com/posts)

| Test                                 | Result | Screenshot / GIF                                                                                    |
| ------------------------------------ | ------ | --------------------------------------------------------------------------------------------------- |
| Data fetched                         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Infinite scroll                      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by date descending              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by date ascending               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by like count descending        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by like count ascending         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by comment count descending     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Sort by comment count ascending      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Liked filter shown if logged in      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| No like filter if logged out         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Show only liked entries filter       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Show only entries with images filter | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### Post Component

| Test                                  | Result | Screenshot / GIF                                                                                    |
| ------------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| All post information shown            | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Time links to correct post page       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Username links to the owner's profile | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Edit button shown if owner            | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Edit button not shown if not owner    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Can't like if owner                   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Like button                           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Like notification                     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Like count goes up                    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Unlike button                         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Unlike notification                   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Like count goes down                  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Diary Entry Page](https://project-5-pokebox.herokuapp.com/post/36)

| Test                            | Result | Screenshot / GIF                                                                                    |
| ------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Alert shown if logged out       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Comment form shown if logged in | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Comments loaded                 | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Comments infinite scroll        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Posting new comment             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| New comment notification        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Comment count goes up           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Unknown diary entry error       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### Comment Component

| Test                              | Result | Screenshot / GIF                                                                                    |
| --------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| All comment information shown     | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Username links to owner's profile | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Edit button shown if owner        | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Edit form displays                | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Save changes button works         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Edited comment notification       | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Delete comment button shows modal | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Click yes deletes comment         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Deleted comment notification      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Comment removed                   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Comment count goes down           | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [New Post Page](https://project-5-pokebox.herokuapp.com/newpost)

| Test                              | Result | Screenshot / GIF                                                                                    |
| --------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Alert shown if logged out         | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Time and date shown               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Username shown with working link  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Body input validation             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Image upload                      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Post button works                 | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| New post notification             | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Redirected to the new post's page | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Edit Post Page](https://project-5-pokebox.herokuapp.com/newpost)

| Test                                   | Result | Screenshot / GIF                                                                                    |
| -------------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Unknown diary entry error              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Alert shown if logged out or not owner | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Correct post data loaded               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Delete button shows modal              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Clicking yes deletes post              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Deleted post notification              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Save changes button works              | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Edited post notification               | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Redirected to the post's page          | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

### [Settings](https://project-5-pokebox.herokuapp.com/newpost)

| Test                           | Result | Screenshot / GIF                                                                                    |
| ------------------------------ | ------ | --------------------------------------------------------------------------------------------------- |
| Username field validation      | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Change username works          | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Changed username notification  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Change reflected in nav bar    | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Old password field validation  | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| New password fields validation | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Change password works          | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |
| Change password notification   | ✓      | [Link](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing.png) |

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
