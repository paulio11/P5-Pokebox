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

1. Organization and Tracking: Pokébox provides a centralized platform for users to effectively organize and track their Pokémon collection. It allows users to keep a comprehensive record of their Pokémon, including details like species, stats, types, and more. This can be particularly useful for avid collectors who want to maintain a detailed inventory of their Pokémon.
2. Easy Access and Convenience: By having a dedicated website like Pokébox, users can conveniently access their Pokémon collection from any device with an internet connection. This means you can easily manage and view your Pokémon data on-the-go, whether you're using a computer, smartphone, or tablet.
3. Community Engagement: Pokébox can foster a sense of community among Pokémon enthusiasts. Users can connect with like-minded individuals, share their collections, and adventures. It provides a platform for users to showcase their Pokémon achievements and engage in discussions related to the Pokémon world.
4. Reference and Information: Pokébox integrates with PokéAPI, ensuring that users have access to accurate and up-to-date Pokémon data. This can serve as a valuable reference tool for users. Having a reliable source of information can enhance their overall Pokémon experience.

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

Fortunately due to the length of this project I was able to produce all of the above features. There are many more possible features I could have added. See [unimplemented features](#unimplemented-features) below.

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

#### Images

#### Colour Scheme

#### Layout

## Features

### Components

### Pages

### Contexts

### Hooks

### Unimplemented Features

## Bugs and Fixes

## Technologies

### Main Languages Used

### Frameworks

### Libraries

### Software and Other

## Testing

## Deployment

## Credits

### Code

### Text

### Images

### Acknowledgements
