# Chef Portfolio

## Table of Contents

- [Dummy Data](#dummy-data)      
- [Auth Routes](#auth-routes)
  * [Register](#register)    
  * [Login](#login)    
- [User Routes](#user-routes)
  * [Get Users](#get-users)
- [Posts Routes](#posts-routes)
  * [Create Post](#create-post)    
  * [Get Posts](#get-posts)    
  * [Get Posts By Id](#get-posts-1)    
  * [Update Post](#update-post)    
  * [Delete Post](#delete-post)

## API Documentation

```
API link:
https://chef-portfolio-2.herokuapp.com/
```

### Dummy Data

```
Users: [
  {
    "first_name": "testing",
    "last_name": "testing",
    "username": "chef",
    "password": "password"
    "email": "chef@email.com",
    "location": "Seattle, WA"
  }
]
```
```
Posts: [
  {
    "chef_name": "chef",
    "title": "Macaroni and Cheese",
    "photo": "https://images.pexels.com/photos/806357/pexels-photo-806357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "meal_type": "dinner",
    "ingredients": "8oz elbow macaroni, 2 cups shredded sharp cheddar cheese, 1/2 cup grated parmesan cheese, 3 cups milk, 1/4 cup butter, 2 1/2 tablespoons all-purpose flour, 2 tablespoons butter, 1/2 cup breadcrumbs, 1 pinch paprika",
    "instructions": "Cook macaroni according to the package directions. Drain., In a saucepan melt butter or margarine over medium heat. Stir in enough flour to make a roux. Add milk to roux slowly, stirring constantly. Stir in cheeses and cook over low heat until cheese is melted and the sauce is a little thick. Put macaroni in large casserole dish and pour sauce over macaroni. Stir well., Melt butter or margarine in a skillet over medium heat. Add breadcrumbs and brown. Spread over the macaroni and cheese to cover. Sprinkle with a little paprika., Bake at 350 degrees F (175 degrees C) for 30 minutes. Serve."
 }
]
```

# Auth Routes
| Table | Method |       Endpoint |                      Description |
| ----- | :----: | -------------: | -------------------------------: |
| users |  POST  | /api/auth/register |            Registers a new user. |
| users |  POST  | /api/auth/login    | Logs in already registered user. |

## Register

### Registers a new user.

_Method URL:_ `/api/auth/register`

_HTTP Method:_ **[POST]**

#### Request Body 
| Name         |  Type  | Required |     Description |
| ---------    | :----: | -------: | --------------: |
| `first_name` | String |      Yes |                 |
| `last_name`  | String |      Yes |                 |
| `username`   | String |      Yes | Must be unique. |
| `password`   | String |      Yes |                 |
| `email`      | String |      Yes |                 |
| `location`   | String |      Yes |                 |

#### Examples

```
{
  "first_name": "testing",
  "last_name": "testing",
  "username": "chef",
  "password": "password",
  "email": "chef@email.com",
  "location": "Seattle, WA"
}

```

#### Response

##### 201 (Created)

> If you successfully register a user, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing a username or password, the endpoint will return an HTTP response with a status code of `400`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Login

### Logs in an already registered user.

_Method URL:_ `/api/auth/login`

_HTTP Method:_ **[POST]**

#### Request Body

| Name       |  Type  |                                                Description |
| ---------- | :----: | ---------------------------------------------------------: |
| `username` | String |                           Must match username in database. |
| `password` | String | Must match password to corresponding username in database. |

#### Example

```
{
  "username": "chef",
  "password": "password"
}
```

#### Response


##### 200 (OK)

> If you successfully log in, the endpoint will return an HTTP response with a status code `200`.

##### 400 (Bad Request)

> If you are missing a username or a password, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If you provide invalid credentials, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# User Routes

## Get Users

### Gets a list of users.

_Method URL:_ `/api/users/`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If users are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If users are not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# Posts Routes

## Create Post

### Creates a post with a chef name, title, photo, meal type, ingredients and instructions.

_Method URL:_ `/posts`

_HTTP Method:_ **[POST]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name             |  Type   | Required | Description |
| ---------------- | :-----: | -------: | ----------: |
| `chef_name`      | String  |      Yes |             |
| `title`          | String  |      Yes |             |
| `photo`          | String  |      Yes |             |
| `meal_type`      | String  |      Yes |             |
| `ingredients`    | String  |      Yes |             |
| `instructions`   | String  |      Yes |             |

#### Example

```
{
    "chef_name": "chef",
    "title": "Macaroni and Cheese",
    "photo": "https://images.pexels.com/photos/806357/pexels-photo-806357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "meal_type": "dinner",
    "ingredients": "8oz elbow macaroni, 2 cups shredded sharp cheddar cheese, 1/2 cup grated parmesan cheese, 3 cups milk, 1/4 cup butter, 2 1/2 tablespoons all-purpose flour, 2 tablespoons butter, 1/2 cup breadcrumbs, 1 pinch paprika",
    "instructions": "Cook macaroni according to the package directions. Drain., In a saucepan melt butter or margarine over medium heat. Stir in enough flour to make a roux. Add milk to roux slowly, stirring constantly. Stir in cheeses and cook over low heat until cheese is melted and the sauce is a little thick. Put macaroni in large casserole dish and pour sauce over macaroni. Stir well., Melt butter or margarine in a skillet over medium heat. Add breadcrumbs and brown. Spread over the macaroni and cheese to cover. Sprinkle with a little paprika., Bake at 350 degrees F (175 degrees C) for 30 minutes. Serve."
 }
```

#### Response

##### 201 (Created)

> If post is created, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing any post information, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Posts

### Gets a list of posts.

_Method URL:_ `/posts`

_HTTP Method:_ **[GET]**

#### Headers

No headers needed. `/posts` is not a protected path.

#### Response

##### 200 (OK)

> If posts are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If posts are not found, the endpoint will return an HTTP response with a status code `404`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Posts

### Gets post by ID.

_Method URL:_ `/posts/:id`

_HTTP Method:_ **[GET]**

#### Headers

No headers needed. `/posts/:id` is not a protected path.

#### Response

##### 200 (OK)

> If post with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If post with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Update Post

### Updates post by ID.

_Method URL:_ `/posts/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name             |  Type   | Required | Description |
| ---------------- | :-----: | -------: | ----------: |
| `chef_name`      | String  |      Yes |             |
| `title`          | String  |      Yes |             |
| `photo`          | String  |      Yes |             |
| `meal_type`      | String  |      Yes |             |
| `ingredients`    | String  |      Yes |             |
| `instructions`   | String  |      Yes |             |

#### Example

```
{
    "chef_name": "chef",
    "title": "Macaroni and Cheese",
    "photo": "https://images.pexels.com/photos/806357/pexels-photo-806357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "meal_type": "dinner",
    "ingredients": "8oz elbow macaroni, 2 cups shredded sharp cheddar cheese, 1/2 cup grated parmesan cheese, 3 cups milk, 1/4 cup butter, 2 1/2 tablespoons all-purpose flour, 2 tablespoons butter, 1/2 cup breadcrumbs, 1 pinch paprika",
    "instructions": "Cook macaroni according to the package directions. Drain., In a saucepan melt butter or margarine over medium heat. Stir in enough flour to make a roux. Add milk to roux slowly, stirring constantly. Stir in cheeses and cook over low heat until cheese is melted and the sauce is a little thick. Put macaroni in large casserole dish and pour sauce over macaroni. Stir well., Melt butter or margarine in a skillet over medium heat. Add breadcrumbs and brown. Spread over the macaroni and cheese to cover. Sprinkle with a little paprika., Bake at 350 degrees F (175 degrees C) for 30 minutes. Serve."
 }
```

#### Response

##### 200 (OK)

> If post with specified ID is found and updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If post with specified ID is not found and updated, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Delete Post

### Deletes post by ID.

_Method URL:_ `/posts/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If post with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If post with specified ID is not found and deleted, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.
