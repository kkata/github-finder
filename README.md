[React Front To Back 2022](https://www.udemy.com/course/react-front-to-back-2022/)で作るアプリを TypeScript でやってみた。

- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [daisyUI](https://daisyui.com/)
- [GitHub Search API](https://docs.github.com/ja/rest/search#about-the-search-api)
- [GitHub Users API](https://docs.github.com/ja/rest/users/users#about-the-users-api)

## Development

[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

scope: `repo` `user`

`.env.development.local`

```.env
REACT_APP_GITHUB_URL="https://api.github.com"
REACT_APP_GITHUB_TOKEN=""
```
