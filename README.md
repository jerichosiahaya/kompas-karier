# Kompas Karier Website 📝

> This is only a dummy website, purposely made it for candidate assignment on Kompas Internship recruitment 2021/2022

### Plugin
- Router

### Dependencies
- Vue Bootstrap
- Axios

I use bootstrap to build the user interface along with the grid layout. Some of the elements are customized using custom css (especially for the responsive part). The data (of jobs) displayed on the site aren't hardcoded but gathered from database through API that I simply made using Hasura GraphQL. Axios is being used to make the HTTP request.

### API
Despite it didn't mention, whether the website should displayed hardcoded data or not. I eventually make a simple API so the website can actually make an HTTP request using Axios. I use Hasura GraphQL to build the API, since I don't have much time to make the proper one using another framework. There are 3 endpoints that I simply use:

| ENDPOINT                     | METHOD |
| ---------------------------- | ------ |
| `api/rest/jobs`              | `GET`  |
| `api/rest/jobs/:id`          | `GET`  |
| `api/rest/jobs/title/:title` | `GET`  |


------------


[![](https://github.com/jerichosiahaya/kompas-karier/blob/main/public/assets/ui.gif)](https://github.com/jerichosiahaya/kompas-karier/blob/main/public/assets/ui.gif)


#### Some of the features that I don't get to finish
- **Filter by**, By lack of time and lack of finding the documentation, I couldn't get to make the filter by works. User only can search the job by position using the search box. Maybe if I have more time, I can make it works.
- **Apply manual**, I want to make another page so user can fill the data within the input group then submit. The data would be inserted into database through API. 

----

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
