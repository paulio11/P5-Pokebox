# Pokébox

![Pokébox on devices](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-title.png)

[Link to live website](https://project-5-pokebox.herokuapp.com/)

[Link to live Pokébox API](https://project-5-backend.herokuapp.com/)

[Link to Pokébox API repo](https://github.com/paulio11/P5-Pokebox-API)

## Contents

1. [Introduction](#introduction)
2. [Project Planning](#project-planning)
3. [User Experience](#user-experience)
4. [Features](#features)
5. [Bugs and Fixes](#bugs-and-fixes)
6. [Technologies](#technologies)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Credits](#credits)

## Introduction

Pokébox is a user-friendly website that allows Pokémon enthusiasts to easily keep track of their Pokémon collections. The website is built using the popular React framework, providing a smooth and intuitive front-end experience. All data is stored in a SQL database managed by a reliable Django Rest Framework backend. The site pulls accurate Pokémon information from [PokéAPI](https://pokeapi.co/), ensuring that users have access to the most up-to-date data for their collection.

Building a website like Pokébox offers several benefits for users:

- Organization and Tracking: Pokébox provides a centralized platform for users to effectively organize and track their Pokémon collection. It allows users to keep a comprehensive record of their Pokémon, including details like species, stats, types, and more. This can be particularly useful for avid collectors who want to maintain a detailed inventory of their Pokémon.
- Easy Access and Convenience: By having a dedicated website like Pokébox, users can conveniently access their Pokémon collection from any device with an internet connection. This means you can easily manage and view your Pokémon data on-the-go, whether you're using a computer, smartphone, or tablet.
- Community Engagement: Pokébox can foster a sense of community among Pokémon enthusiasts. Users can connect with like-minded individuals, share their collections, and adventures. It provides a platform for users to showcase their Pokémon achievements and engage in discussions related to the Pokémon world.
- Reference and Information: Pokébox integrates with PokéAPI, ensuring that users have access to accurate and up-to-date Pokémon data. This can serve as a valuable reference tool for users. Having a reliable source of information can enhance their overall Pokémon experience.

[Back to top 🔺](#pokébox)

## Project Planning

### GitHub Project

The GitHub project board feature was used to keep track of what I was working on and what still needed to be done. I created a user story for each feature, or an issue for each to do and bug, then moved them when necessary throughout the development of both front and back-end.

[Link to Project Board](https://github.com/users/paulio11/projects/4)

**Project Board:**

![Project board](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-projectboard.png)

### Epics and User Stories

There will be two types of users visiting Pokébox. A new or logged out user and registered users. User stories were logged as issues on GitHub to track them through the project (see [Project Issues](https://github.com/paulio11/P5-Pokebox/issues?q=is%3Aissue+is%3Aclosed)). They were subject to manual testing at the end of the project to determine if I was successful with my objectives.

#### Epic - New or logged out users

| User Story                                                                                                                        | Achieved? |
| --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| As a new user I can sign up so that I can have my own account and use the full feature set of the website                         | ✓         |
| As a logged out user I can sign in so that I can return to my account                                                             | ✓         |
| As a logged out or unregistered user I can still search Pokébox so that I can find other trainers and/or Pokémon I am looking for | ✓         |
| As a logged out user I can still read a user's diary and comments                                                                 | ✓         |

#### Epic - A registered or unregistered user can view Pokémon

| User Story                                                            | Achieved? |
| --------------------------------------------------------------------- | --------- |
| As a user I can view all the Pokémon so I can see what is available   | ✓         |
| As a user I can search for a Pokémon to find the one I am looking for | ✓         |
| As a user I can view specific Pokémon so I can see more information   | ✓         |

#### Epic - A registered can customise their profile

| User Story                                                                                     | Achieved? |
| ---------------------------------------------------------------------------------------------- | --------- |
| As a registered user I can edit my avatar so that it can represent me as a user                | ✓         |
| As a registered user I can set my favourite Pokémon so that I can show other users what I like | ✓         |
| As a registered user I can set the about text on my profile so I can describe myself to others | ✓         |

#### Epic - A registered user can collect Pokémon

| User Story                                                                                            | Achieved? |
| ----------------------------------------------------------------------------------------------------- | --------- |
| As a registered user I can add Pokémon to my collection so I can grow my collection                   | ✓         |
| As a registered user I can remove Pokémon to my collection so I can update my collection if necessary | ✓         |
| As a registered user I can display my Pokémon collection so it can be shared with other users         | ✓         |
| As a registered user I can see how many Pokémon I have so I can keep track of my collection           | ✓         |

#### Epic - A registered user can have and manage a diary

| User Story                                                                                         | Achieved? |
| -------------------------------------------------------------------------------------------------- | --------- |
| As a registered user I can post an entry to my diary to share something new                        | ✓         |
| As a registered user I can edit my posts so that I can change them if necessary                    | ✓         |
| As a registered user I can delete my psots so that I can remove them if necessary                  | ✓         |
| As a registered user I can add an image to my post so that I can share an image                    | ✓         |
| As a user I can view my own or another user's diary posts, so that I can see what they are sharing | ✓         |

#### Epic - A registered user can interact with other user's posts

| User Story                                                                                                    | Achieved? |
| ------------------------------------------------------------------------------------------------------------- | --------- |
| As a registered user I can like/unlike someone else's post so that I can show my support                      | ✓         |
| As a registered user I can comment on a post so that I can start or add to a conversation related to the post | ✓         |
| As a registered user I can edit my comments so that I can change what I said                                  | ✓         |
| As a registered user I can delete my comments so that I can remove them if I want                             | ✓         |

#### Epic - A registered user can keep their account secure

| User Story                                                                                       | Achieved? |
| ------------------------------------------------------------------------------------------------ | --------- |
| As a registered user I can log out so that my account remains secure and private when not in use | ✓         |
| As a registered user I can change my password so that my account can remain secure               | ✓         |

#### Epic - A registered or unregistered user can sort profiles and posts

| User Story                                                                                        | Achieved? |
| ------------------------------------------------------------------------------------------------- | --------- |
| As a user I can sort trainers by the size of their Pokémon collection so I can see who is best    | ✓         |
| As a user I can sort trainers by creation date so I can see who is new                            | ✓         |
| As a user I can sort trainers by name so I can find myself or others                              | ✓         |
| As a user I can sort diary entires by number of likes so I can find the most liked post           | ✓         |
| As a user I can sort diary entires by number of comments so I can find the most talked about post | ✓         |
| As a user I can sort diary entires by date so I can read what is new                              | ✓         |

### Timeboxing

Using MoSCoW prioritisation I categorised the features needed to meet the requirements of the user stories into the following categories:

#### Must Do

The final version of Pokébox must include the following:

- User sign up
- User log in, log out
- Search for Pokémon
- Manage Pokémon collection
- View Pokémon collection

This would produce the **minimal viable product**.

#### Should Do

A more fully feature product would contain these features:

- View Pokémon information
- Read, post, edit and delete diary entries
- View other user profiles and collections
- List other users
- Search for other users

#### Could Do

And if there is extra time, these features could be included:

- User profile customisation
- Commenting on posts
- Viewing, editing and deleting comments

An early version of Pokébox would contain the following - every **must do** feature, view Pokémon information and view other user profiles and collections from **should do**, and finally user profile customisation from **could do**.

Fortunately due to the length of this project I was able to produce all of the above features. There are many more possible features I could have added given more time. See [unimplemented features](#unimplemented-features) below.

[Back to top 🔺](#pokébox)

## User Experience

### Wireframes

[Balsamiq for Desktop](https://balsamiq.com/wireframes/) was used ahead of development to plan the basic skeleton of all pages. You can download my wireframes file [here](https://github.com/paulio11/P5-Pokebox/blob/main/documentation/pokebox-wireframes.bmpr).

<details>
    <summary><strong>Home page wireframe</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/wireframe-home.png">
</details>

<details>
    <summary><strong>Pokémon list page wireframe</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/wireframe-pokemonlist.png">
</details>

<details>
    <summary><strong>Pokémon information page wireframe</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/wireframe-pokemoninfo.png">
</details>

<details>
    <summary><strong>Trainer list page wireframe</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/wireframe-trainerlist.png">
</details>

<details>
    <summary><strong>Trainer profile page wireframe</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/wireframe-trainerinfo.png">
</details>

<details>
    <summary><strong>Diary entry page wireframe</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/wireframe-postpage.png">
</details>

### Design Choices

#### Typography

Fonts are imported from [Google Fonts](https://fonts.google.com/). The font used for all `h1` headings is [Lilita One](https://fonts.google.com/specimen/Lilita+One). Lilita One is a stylish and bold display font inspired by Art Deco lettering. When used for my titles, it creates a striking contrast with the rest of the text, adding visual interest and emphasis. The rest of the text all uses the same font **Segoe UI**. Below are two examples of the Lilita One in use.

**Home page header:**

![Home page header](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-titlefont1.png)

**Page heading:**

![Page heading](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-titlefont2.png)

#### Images

Besides the Pokémon sprites and art the only other images used on the website are those **added by users**. These include user avatars and images shared in posts. This keeps the focus where it should be on the Pokémon and the user content. A placeholder image is used in cases where an user has not yet uploaded an avatar. This image is also used as the brand logo and favicon.

![Brand logo and default avatar](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-logo.png)

#### Colour Scheme

Pokébox uses a restrained colour-scheme. The color scheme features a combination of dark and light colors, creating a sense of depth and contrast. The dark red serves as a bold focal point for elements such as links, buttons and headings, while the grays and accent colors add balance and versatility. The majority of colour comes from the images of the Pokémon and user content - again keeping the focus where it belongs.

![Colour scheme](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-colours.png)

#### Layout

The website incorporates various Bootstrap components for its design and functionality. When viewed on desktop, the layout follows a two-column structure. However, on smaller screens like mobile devices, the navigation condenses into a user-friendly dropdown menu, and the layout seamlessly transitions to a single-column view. To ensure responsiveness across different screen sizes, Bootstrap containers and columns are employed to handle the layout adjustments. Here are some examples:

<details>
    <summary><strong>Pokémon Information page desktop layout</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-layout-pokemon-desktop.png">
</details>

<details>
    <summary><strong>Pokémon Information page mobile layout</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-layout-pokemon-mobile.png">
</details>

<details>
    <summary><strong>Trainer profile page desktop layout</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-layout-trainer-desktop.png">
</details>

<details>
    <summary><strong>Trainer profile page mobile layout</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-layout-trainer-mobile.png">
</details>

<details>
    <summary><strong>Diary entry page desktop layout</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-layout-post-desktop.png">
</details>

<details>
    <summary><strong>Diary entry page mobile layout</strong></summary>
    <img src="https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-layout-post-mobile.png">
</details>

[Back to top 🔺](#pokébox)

## Features

### API Integration

Pokébox utilizes two powerful APIs to enhance its functionality. The first API is [PokéAPI](https://pokeapi.co/), an exceptional free and open-source RESTful API. PokéAPI offers developers seamless access to an extensive range of data associated with the beloved Pokémon video game series. Through this API, developers can easily retrieve comprehensive information about Pokémon, including details about their species, abilities, moves, types, and much more.

The second API employed by Pokébox is a custom-built back-end API, developed using Django Rest Framework. To explore further details about this API, please visit its dedicated [repository](https://github.com/paulio11/P5-Pokebox-API).

To talk to these APIs, I use [Axios](https://axios-http.com/docs/intro), a JavaScript library that allows making HTTP requests from web browsers. With Axios, I can interact with APIs by sending various types of requests, such as GET, POST, PUT, DELETE, and more.

[AxiosDefaults.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/api/AxiosDefaults.js) contains the necessary options to interact with two APIs. It defines three Axios instances with specific configurations:

1. `pokeApi` instance:
   - `baseURL` is set as the main PokeAPI endpoint, which is the base URL used for all relative requests.
   - The `Cache-Control` header is set to `no-cache` to resolve frequent data-fetching issues. By setting no-cache, failed requests are retried, ensuring fresh data is obtained when the page is reloaded.
2. `axiosReq` and `axiosRes` instances:
   - Both instances use the same `baseURL`, that of my back-end API, as the base URL for their requests.
   - The `Content-Type` header is set to `multipart/form-data`, indicating that POST requests use multipart form data.
   - `withCredentials` is set to `true`, allowing requests to include credentials like cookies, ensuring proper handling of authenticated requests.

### Components

Leveraging React in the development of Pokébox enabled me to harness the power of components, which presented numerous benefits such as:

- They can be reused across different parts of the application, saving time and effort.
- Components allow for a hierarchical and organized structure, simplifying the management and expansion of the codebase.
- Components promote clean and modular code, making it easier to understand, update, and maintain the application.
- Specific components can be updated without requiring a full page reload through React's virtual DOM, resulting in faster and more responsive user interfaces.

The following are some of my components that appear across multiple pages.

#### [Ball.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/Ball.js)

This component is used on both the _Trainer List_ and _Trainer Profile_ pages. It takes the prop `size` (of the user's Pokémon collection) and returns a different image based on that size. Trainer's with a larger collection of Pokémon have their collection represented by a better Pokéball.

![Small collection](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-ball-pokeball.png)

![Medium collection](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-ball-greatball.png)

![Big collection](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-ball-ultraball.png)

![Complete collection](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-ball-masterball.png)

#### [CustomModal.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/CustomModal.js)

Used in different situations, the modal feature improves user experience in specific areas. It is employed for the help modal on the _Pokémon List_ page, user avatar editing, and confirmation prompts for post and comment deletion.

- It uses the `useState` hook to manage the modal's visibility state.
- It defines functions to handle showing and closing the modal.
- The component renders a button that triggers the modal display.
- The modal component includes a header with a close button and a title.
- It also has a body section that renders it's child elements.

![CustomModal component](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-modal.png)

#### [Error404.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/Error404.js)

This component replaces the whole page if the user tries to navigate to a diary entry, trainer or Pokémon that does not exist. It is returned if the `noResults` state is true. It will also be rendered if the user visits a route that does not exist.

```
if (noResults) {
    return <Error404 pokemon query={id} />;
}
```

- The contents depend on the presence of certain properties. If `pokemon` is truthy, it includes the text "Pokémon". If `trainer` is truthy, it includes the text "trainer with ID:". If `post` is truthy, it includes the text "diary entry with ID:". If `page` is truthy, it includes the text "page you were looking for". The `query` is displayed within a `<strong>` element if it exists. The error message concludes with the text "could not be found."
- The button when clicked, triggers the `onClick` event handler, which navigates back in the browser history using the `navigate()` function.

![Error404 component](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-error404.png)

#### [Footer.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/Footer.js)

The _Footer_ component provides a simple `div` with a contrasting background colour. It is called at the bottom of the main `App.js` file so it appears on every page. Using the follow CSS rule ensures the footer is always rendered at the bottom of the browser window, `Page` contains the main bootstrap `<Container>` and the footer component:

```
.Page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

#### [LoadingText.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/LoadingText.js)

This provides a bootstrap `<Spinner>` component with the text "Loading...", center aligned and styled to match the rest of the website. Displayed while the `loaded` state is false, it gracefully transitions to the fetched data from the Pokébox API or PokéAPI. It also serves as a loader within the `<InfiniteScroll />` component.

![LoadingText component](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-loader.gif)

#### [NavBar.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/NavBar.js)

The _NavBar_ component is a crucial element in the application's UI as it renders a navigation bar that dynamically adapts based on the user's authentication status. By placing it above the main container in the `App.js` file, it ensures the navigation bar appears consistently at the top of every page, providing easy access to essential links and options for seamless navigation throughout the application.

- It retrieves the current user and a function to set the current user from `CurrentUserContext.js`.
- The function `handleLogOut()` that is triggered when the user clicks on the "Log out" link. It sends a log out request to the Pokébox API endpoint using the axios and then sets the current user to null.
- The component also defines two variables: `loggedOutItems` and `loggedInItems`. These variables store JSX code for the navigation links and options displayed when the user is logged out and logged in, respectively. The links include "Log in" and "Register" when logged out, and "Logged in as [username]", "Settings", and "Log out" when logged in.
- Mainly it returns a `<Navbar>` component from the React Bootstrap library. It includes the website logo, name, a toggle button for the responsive menu, and two sets of navigation links (one on the left and one on the right) that change based on the user's authentication status. The active link is highlighted using a CSS class.

**Expanded Navigation:**

![Expanded navigation](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-navbar-full.png)

**Collapsed Navigation:**

![Collapsed navigation](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-navbar-small.png)

#### [Pokemon.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/Pokemon.js)

The component plays a crucial role in three sections of the application: the Pokémon list, the user's collection, and the favorite Pokémon display. Within these areas, it efficiently renders vital information for each Pokémon, including the sprite, ID, and name. Moreover, users can conveniently add or remove a Pokémon from their collection by simply right-clicking on this component while on the Pokémon List page.

- It manages the `collected` state using the useState hook, initially set to false. Then utilizes the `useEffect` hook to update the collected based on the user's Pokémon collection.
- It defines a `handleRightClick()` function to handle the right-click event, preventing the default behavior and instead it updates the user's Pokémon collection.
- The component handles styling based on whether the Pokémon's ID exists in the user's Pokémon collection array. This approach reflects the collected status of the Pokemon to the user, enhancing the visual representation of their collection.
- Clicking the component navigates the user to the relevant Pokémon Information page.

**The Pokémon component used on the list page, reflecting collected status:**

![Pokémon component on list page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-pokemonlist.png)

**The Pokémon component used on the trainer page, representing the trainer's favourite Pokémon and collection:**

![Pokémon component on trainer page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-pokemoncollection.png)

#### [PostCommentFooter.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/PostCommentFooter.js)

This component is utilized at the bottom of every post and comment, as well as on the _New Diary Entry_ page. When employed at the bottom of a post or comment, it shows the username and avatar of the owner, linking to their profile. On the new diary entry page, it showcases the username and avatar of the currently logged-in user (obtained from the current user serializer), providing a preview of how their entire post will appear.

![PostCommentFooter component](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-commentfooter.png)

#### [ToTopButton.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/components/ToTopButton.js)

ToTopButton creates a button that becomes visible as the user scrolls down, and when clicked, it smoothly scrolls the page to the top. The button's visibility is controlled using the `useState` hook and updated based on the scroll position with the `handleScroll` function. The `useEffect` hook is used to add or remove a scroll event listener. The component returns a button labeled "Top". It is used in the main `App.js` file to ensure it appears on every page.

![Scroll to top button in action](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-topbutton.gif)

### Pages

The pages Pokébox use are sorted into the following directories/categories, each directory contains its own unique components:

- Authentication and Account pages
- Trainer Diary pages
- Pokémon pages
- Trainer Profile pages

#### [Home Page](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/HomePage.js)

The home page employs a clean and straightforward design that effectively highlights the three main uses of Pokébox. Each element serves as a link, seamlessly directing users to the relevant page. The Pokémon section features a randomly chosen image, selected using the `generateRandomNumber()` function. This function generates a random number between 1 and 1010, representing the total number of Pokémon, and uses it to display a random Pokémon image. This element adds an element of surprise to the otherwise static home page.

![Home page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-home.png)

#### [Login](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/auth/LogIn.js) and [Registration](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/auth/Register.js)

Login.js is responsible for rendering a login form and handling the submission of login credentials to Pokébox API.

- It creates two state variables: `logInData` and `errors`. LogInData is an object that holds the username and password entered by the user in the login form. Errors is an object that will store any errors returned from the server during the login process.
- The `handleSubmit()` function, it makes an HTTP POST request to the log in endpoint with the logInData object as the request payload. If the request is successful, it takes the data from the response, and calls the `setCurrentUser()` function to set the current user. It then navigates to the user's profile page.
- If the request returns an error it is displayed as a bootstrap `<Alert>` to the user.

![Log in page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-login.png)

In mostly the same way as Login.js, Register.js manages user registration. Capturing their username and passwords, sending the form data to the API endpoint for registration, and displaying any validation errors. It also provides navigation to the login page upon successful sign up.

![Register page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-register.png)

#### [Account Settings](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/account/Settings.js)

The _Settings_ component represents an account settings page where the current user can update their username and password. It utilizes state management, form handling, and API requests to communicate with the back-end.

- Two functions, `handleUpdateUsername()` and `handleUpdatePassword()`, are defined to handle the form submissions for updating the username and password, respectively.
- HTTP requests are made using an Axios instance to the back-end. If successful the user is notified.
- If an error occurs, the response data (containing validation errors) is stored in the `errors` state and displayed to the user where appropriate.

![Settings page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-settings.png)

#### [Pokémon List](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/pokemon/PokemonList.js)

#### [Pokémon Infomation](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/pokemon/PokemonDexPage.js)

The _PokemonDexPage_ component fetches and displays information about a specific Pokémon based on the provided `id` parameter from the URL. It also interacts with user data, the user's Pokémon collection and favorite Pokémon, and allows the user to add/remove Pokémon from their collection and set a favorite Pokémon. Buttons below the information allow the user to navigate to the previous and next Pokémon. The following Pokémon and species data is fetched and displayed from PokéAPI:

- The Pokémon's official artwork.
- Genus text describing the type of Pokémon.
  - The text displayed is from the first object in the genus array where the language value is "en".
  - `sData.genera.find((entry) => entry.language.name === "en")?.genus`
- The Pokémon's type.
  - Since there can be more than one type per Pokémon the `types` objects are is mapped over.
  - Specific styles are applied based on the type name to reflect the type.
- Pokémon statistics mapped over then displayed as bootstrap `<ProgressBar />`
- The Pokémon's flavour text (their Pokédex entry from the games).
  - The text provided by PokéAPI is direct from the old games and theirfor are formatted to fit those lower console screen widths. This meant there were odd symbols and line breaks in the text.
  - Text was cleared up using the JavaScript `replace()` function.
  - Not all Pokémon have this flavour text data so in cases where it is not present the text "This Pokémon is still a mystery" is shown instead.

```
{sData.flavor_text_entries
    .find((entry) => entry.language.name === "en")
    ?.flavor_text.replace(/\n|\f/g, " ") ||
    "This Pokémon is still a mystery!"}
```

![Pokémon information page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-pokemoninfo.png)

#### [Trainer List](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/trainers/TrainerList.js)

Similar to the _Pokémon List_ page, the _TrainerList_ component generates a page that displays a comprehensive list of the website's users. It presents profile information for each user, offering the ability to sort and organize them by their username, creation date, and the size of their Pokémon collection. Additionally, users can search for specific trainers using their usernames. Every trainer is portrayed through the use of the [Trainer](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/trainers/Trainer.js) component.

- The `fetchData()` function fetches the list of profiles, or a specific profile based on the presence of a search query.
- The object returned is mapped over and the data is passed to the Trainer component as props.
- If a search query returns a 404 error a message is displayed to the user instead.
- The `handleSortChange()` function handles changes in the _Sort By_ and _Order By_ input fields. The values are used in the `fetchData()` function, changing the API endpoint to fetch the desired results.

![Trainer list page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-trainerlist.png)

#### [Trainer Profile](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/trainers/TrainerProfilePage.js)

The _TrainerProfilePage_ component is responsible for rendering a trainer's profile page, including their avatar, personal information, favorite Pokemon, trainer diary, and Pokemon collection.

- The function `getFavData()` calls the function `FetchPokemonData` with the profile's favourite Pokémon as an arguement. This data is then passed to the `Pokemon` component as props along with the variable `trainerPage` which the component uses to style the output.
- The `handleClick()` function is triggered when the bar representing the user's Pokémon collection is clicked. Once clicked it also calls the function `FetchPokemonData` but with the profile's Pokémon (collection) array as the argument.
- If the user viewing the profile is the profile's `owner` an edit button appears to allow editing of the `about` text and `avatar`.
  - Editing the avatar uses the [AvatarModal](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/trainers/AvatarModal.js) component.
  - Editing the about text uses the [AboutEditForm](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/trainers/AboutEditForm.js) component. When called it is rendered in place of the about text.
- There is an extensive use of the bootstrap `<Tooltip>` component. Highlighting the profile edit button and the collection display.
- The profile's Pokémon collection is hidden at first, contained inside a bootstrap `<Accordian>` component.
- The [TrainerDiary](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/TrainerDiary.js) component is used under the profile. This displays diary posts associated with the profile. See below.

**A user editing their profile:**

![Editing the profile page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-profileedit.png)

![Trainer profile page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-trainerprofile.png)

#### [All Posts](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/AllPosts.js), [Trainer Diary](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/TrainerDiary.js) and [Post](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/Post.js)

_Post_ is a component that takes data as props from either the data on _AllPosts_, _PostPage_ or _TrainerDiary_. Each post instance represents a diary entry fetched from Pokébox API.

- It displays all information from the post model.
- If the logged in user is the owner of the post an edit button is shown.
- `handleLike()` is a function that likes the post by sending a POST request to the API endpoint, updating the posts state with the incremented like count and the assigned like ID if successful, and does nothing if the current user is the post owner or there is no current user.
- `handleUnlike()` is the opposite function that unlikes a post by sending a DELETE request to API endpoint, updating the posts state with the decremented like count and setting the like ID to null if successful.

_AllPosts_ displays a list of diary entries.

- The `fetchPosts()` function fetches posts from Pokébox API.
- The posts it fetches can be sorted by like count, comment count and creation date.
- They can also be filtered by posts liked by the user or posts with an image.
- The `handleSortChange()` function handles changes in the _Sort By_, _Order By_, _Posts with image_, _Posts I liked_ input fields. The values are used in the `fetchPosts()` function, changing the API endpoint to fetch the desired results.

_TrainerDiary_ is similar to _AllPosts_ but the posts fetched are filtered by `owner`.

- The endpoint `posts/?owner__profile=${id}` is used instead.
- This component is used on the _Trainer Profile_ page.

![All diary entries](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-postlist.png)

#### [Post Page](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/PostPage.js) and [Comment](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/Comment.js)

The _PostPage_ component displays a diary entry and it's comments. Each comment is an instance of the _Comment_ component.

- If a user is logged in, the [CommentForm](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/CommentForm.js) component is rendered to allow the user to add a comment. Otherwise, a message prompting the user to log in is displayed.
- When a user posts a new comment, the comment list is seamlessly updated in real-time without requiring a page reload. This smooth update is made possible by providing the `setComments` state as a prop to the _CommentForm_ component. Another great benefit of React.
- If the logged in user is the owner of a comment instance the edit comment button is shown.
- When clicked the comment text is replaced with the [CommentEditForm](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/CommentEditForm.js) component.

![Post page](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-post.png)

#### [Post Edit Form](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/PostEditForm.js) and [Post Form](https://github.com/paulio11/P5-Pokebox/blob/main/src/pages/diary/PostForm.js)

The _PostForm_ component renders the diary entry form with the current time, input fields for the body and image, and buttons to handle image selection and form submission. It also displays any validation errors if they exist.

- If no user is logged in, it renders an alert message indicating the requirement to log in and provides buttons for navigation and login.
- The design and presentation of the form mirrors the visual structure of the resulting post object it generates.
- To achieve this it includes the previously mentioned _PostCommentFooter_ component displaying the current user's avatar and username.
- The `getCurrentTime()` function displays the current time.

The _PostEditForm_ component allows users to modify their diary entries. By fetching the existing entry data, it enables users to make changes through the rendered form. This component takes care of the entire process, including handling form submission and deletion, with the added functionality of a modal to confirm deletion. If a user attempts to edit a post they don't own, the component communicates their lack of permission, ensuring a secure editing experience.

![Post form](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-newpost.png)

![Post edit form](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/readme-page-editpost.png)

### Contexts

### Hooks

usenav, useeff, useref etc

### Utility Functions

### Other

inf scroll

### Unimplemented Features

[Back to top 🔺](#pokébox)

## Bugs and Fixes

[Back to top 🔺](#pokébox)

## Technologies

[Back to top 🔺](#pokébox)

### Main Languages Used

### Frameworks

### Libraries

### Software and Other

## Testing

[Back to top 🔺](#pokébox)

## Deployment

[Back to top 🔺](#pokébox)

## Credits

### Code

### Text

### Images

### Acknowledgements

[Back to top 🔺](#pokébox)
