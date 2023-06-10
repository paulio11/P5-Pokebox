# Testing

## Contents

1. [Validation]()
2. [Automated Testing]()
3. [Manual Testing]()
4. [Browser Testing]()
5. [Lighthouse Results]()
6. [User Stories]()

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

| Page                                                                           | Performance | Accessibility | Best Practices | SEO | Notes                             |
| ------------------------------------------------------------------------------ | ----------- | ------------- | -------------- | --- | --------------------------------- |
| [Home](https://project-5-pokebox.herokuapp.com/)                               | 99          | 100           | 100            | 100 | Image issues                      |
| [Pokémon list](https://project-5-pokebox.herokuapp.com/pokemon)                | 47          | 100           | ?              | 100 | Excessive DOM size                |
| [Pokémon information](https://project-5-pokebox.herokuapp.com/pokemon/pikachu) | 98          | 89            | 100            | 100 | Image issues, progress bar issues |
| [Trainer list](https://project-5-pokebox.herokuapp.com/trainers)               | 95          | 90            | 92             | 100 | Image issues, progress bar issues |
| [Trainer profile](https://project-5-pokebox.herokuapp.com/trainer/15)          | 89          | 98            | 83             | 100 | Image issues, progress bar issues |
| [Post list](https://project-5-pokebox.herokuapp.com/posts)                     | 89          | 100           | 83             | 100 | Image issues                      |
| [Post page](https://project-5-pokebox.herokuapp.com/post/37)                   | 94          | 100           | 92             | 100 | Image issues                      |
| [New post page](https://project-5-pokebox.herokuapp.com/newpost)               | 100         | 100           | 92             | 100 |                                   |
| [Edit post page](https://project-5-pokebox.herokuapp.com/newpost)              | 100         | 100           | 92             | 100 |                                   |
| [Settings](https://project-5-pokebox.herokuapp.com/settings)                   | 100         | 100           | 100            | 100 |                                   |
| [Log in](https://project-5-pokebox.herokuapp.com/login)                        | 100         | 100           | 92             | 100 | Console errors due to no user     |
| [Register](https://project-5-pokebox.herokuapp.com/register)                   | 100         | 100           | 92             | 100 | Console errors due to no user     |

Overall, I am extremely satisfied with the results achieved through my work on the Lighthouse analysis, especially considering the immense amount of data that needs to be fetched and displayed on certain pages. The accessibility scores across the board were outstanding, with the exception of ProgressBar components lacking aria-labels. Unfortunately, I encountered difficulties resolving this issue since the problematic element is an automatically generated child component.

Aside from one notable exception, the only performance-related concerns revolved around images not being assigned specific heights and widths. This was particularly evident in cases where the images needed to adapt to the size of their containers in order to ensure optimal responsiveness throughout the website. I must note that the login and register pages received lower marks due to console errors. It's important to highlight that these errors are expected because they occur when no user is logged in.

I encountered an issue with pages that display a user avatar, which unfortunately remained unresolved due to my inability to determine the underlying cause. It's important to note that this particular issue did not have a significant impact on the overall Best Practice scores, although it remained unresolved. Despite my efforts, I was unable to identify and implement a solution for this specific problem.

![pages with avatar issue](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/testing-avatar-issue.png)

The Pokémon list page is responsible for loading an enormous volume of data, resulting in warnings about excessive DOM size. Despite extensive testing across various devices and networks confirming the page's smooth loading performance, I acknowledge that implementing the react-infinite-scroll component could have alleviated this concern. However, I have provided a detailed explanation in my readme file outlining the reasons behind my decision not to utilize this component.

[Back to top 🔺](#testing)

## User Stories

All user stories were achieved during development and were subject to manual user testing. You can see a list of all user stories in my readme [here](https://github.com/paulio11/P5-Pokebox#epics-and-user-stories).

[Back to top 🔺](#testing)
