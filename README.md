Code Tests:

Sample app should have the following features:
1. user should be able to create the post
2. user shoule be able to list the posts
4. user shoule be able to comment

For api use: jsonplaceholder.typicode.com

<b>Requrements</b>:

Disable cors in development;
1. at least 3 routes;
2. stateless component and hooks
3.Redux or Mobx for state management;
4.Es6 features
5.CSS module
6. Less or sass

## <u>Introduction</u>

#### <u>eslint and prettier</u>

- In order to use these two tools properly please install eslint and prettier in vscode
- In this project, eslint focuses on code quality not code format and prettier focuses on code format. Change your preferred settings in .prettierrc file

* This app is created by create-react-app and pre-configured with typescript,axios, react-router,redux (thunk), and styled-components; You just need to focus on your business logic. No more time wasted on configuring your create-react-app;

- just run the following command to start the program

```
yarn install
npm start
```

- if you want to add pages, just go to Navigation/rootNavigation.tsx to configure it and add pages under Pages folder

* To make a network request, just

```
import {instance} from "./config/config"
```
