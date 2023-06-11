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

[Back to top 🔺](#testing)

## Manual Testing

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

| Page                                                                           | Performance | Accessibility | Best Practices | SEO | Notes                                  |
| ------------------------------------------------------------------------------ | ----------- | ------------- | -------------- | --- | -------------------------------------- |
| [Home](https://project-5-pokebox.herokuapp.com/)                               | 93          | 100           | 100            | 100 | Image issues                           |
| [Pokémon list](https://project-5-pokebox.herokuapp.com/pokemon)                | 90          | 100           | 100            | 100 |                                        |
| [Pokémon information](https://project-5-pokebox.herokuapp.com/pokemon/pikachu) | 98          | 100           | 100            | 100 | Image issues                           |
| [Trainer list](https://project-5-pokebox.herokuapp.com/trainers)               | 95          | 100           | 92             | 100 | Image issues                           |
| [Trainer profile](https://project-5-pokebox.herokuapp.com/trainer/15)          | 89          | 100           | 92             | 100 | Image issues                           |
| [Post list](https://project-5-pokebox.herokuapp.com/posts)                     | 92          | 100           | 92             | 100 | Image issues                           |
| [Post page](https://project-5-pokebox.herokuapp.com/post/37)                   | 94          | 100           | 92             | 100 | Image issues                           |
| [New post page](https://project-5-pokebox.herokuapp.com/newpost)               | 100         | 100           | 92             | 100 |                                        |
| [Edit post page](https://project-5-pokebox.herokuapp.com/newpost)              | 100         | 100           | 92             | 100 |                                        |
| [Settings](https://project-5-pokebox.herokuapp.com/settings)                   | 100         | 100           | 100            | 100 |                                        |
| [Log in](https://project-5-pokebox.herokuapp.com/login)                        | 100         | 100           | 92             | 100 | Expected console errors due to no user |
| [Register](https://project-5-pokebox.herokuapp.com/register)                   | 100         | 100           | 92             | 100 | Expected console errors due to no user |

- Overall, I am satisfied with the Lighthouse results, especially considering the immense amount of data that needs to be fetched and displayed on certain pages.
- The only performance-related concerns revolved around images not being assigned specific heights and widths. This is evident in cases where the images needed to adapt to the size of their containers in order to ensure optimal responsiveness throughout the website.
- The login and register pages received lower marks due to console errors. It's important to highlight that these errors are expected because they occur when no user is logged in.
- I encountered an issue with pages that display a user avatar, which unfortunately remained unresolved due to my inability to determine the underlying cause. It's important to note that this particular issue did not have a significant impact on the overall Best Practice scores, although it remained unresolved. Despite my efforts, I was unable to identify and implement a solution for this specific problem.

![pages with avatar issue](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing-avatar-issue.png)

[Back to top 🔺](#testing)

## User Stories

All user stories were achieved during development and were subject to manual user testing. You can see a list of all user stories in my readme [here](https://github.com/paulio11/P5-Pokebox#epics-and-user-stories).

[Back to top 🔺](#testing)
