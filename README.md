# Chef Portfolio

## Table of Contents

- [Dummy Data](#dummy-data)      
- [Auth Routes](#auth-routes)
  * [Register](#register)    
  * [Login](#login)    
- [User Routes](#user-routes)
  * [Get Users](#get-users)

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