# Deployment

To ensure the smooth operation of Pokébox, it is essential to set up and deploy the back-end API beforehand. To begin, follow the steps outlined [here](https://github.com/paulio11/P5-Pokebox-API/blob/main/DEPLOYMENT.md). Once the back-end is set up continue with these steps:

## Copying My Repository

Forking will create a copy of my original repository on your own GitHub account.

1. [Login](https://github.com/login) to GitHub.
2. Locate [this](https://github.com/paulio11/P5-Pokebox) GitHub repository.
3. Click the **Fork** button at the top right of the page.
4. You will now have a copy on your GitHub account.

## GitPod

If you want to edit any of the files I would suggest using Gitpod - a browser based IDE.

1. Install the [Gitpod](https://www.gitpod.io/docs/browser-extension/) browser extension.
2. Locate your copy of the repository.
3. Click the new green **GitPod** button above the file list.
4. [Login](https://gitpod.io/workspaces/) to Gitpod with your GitHub account.
5. Dependencies will automatically be installed thanks to [package.json](https://github.com/paulio11/P5-Pokebox/blob/main/package.json).
6. To run the server type `npm start` into the terminal.
7. Make sure to push any changes you make to GitHub.

## Setting Axios Defaults

1. Open up [AxiosDefaults.js](https://github.com/paulio11/P5-Pokebox/blob/main/src/api/AxiosDefaults.js) inside your GitPod workspace or edit it using the GitHub editor.
2. Change the `baseURL` value to match the URL of your deployed API endpoint.

![Editing Axios defaults](https://raw.githubusercontent.com/paulio11/P5-Pokebox/main/documentation/images/deployment-api.png)

## Heroku

Pokébox is currently deployed to Heroku. Follow these steps if you want to deploy your copy.

1. [Login](https://id.heroku.com/login) or [sign up]() to Heroku.
2. Once on your [Dashboard](https://dashboard.heroku.com/apps), click the **New** and **Create New App** buttons.
3. Enter a name for your app and your local region.
4. Click **Create App**.
5. Click **Deploy** from the menu.
6. Click **GitHub - Connect to GitHub**, and if prompted to login to GitHub.
7. In the **repo-name** box type the name of your fork from earlier.
8. Click **Search**.
9. Click **Connect** next to the correct repository.
10. Scroll to the bottom and click **Deploy Branch**.
11. Pay attention to the log and look out for any errors.
12. If it was successful your app will now be live.

Remember to make sure your deployed Heroku URL matches the value of the `CLIENT_ORIGIN` config variable you previously set up before deploying your back-end.
