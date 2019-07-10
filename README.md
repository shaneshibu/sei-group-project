# sei-group-project  
Shane  
Cliff  
Dan  

## **API Documentation**  

###  **/api/register**  
#### POST - Register
##### Example Request  
POST http://localhost:3999/api/register  

##### Parameters  
**username** - Type: String - Required  
**email** - Type: String - Required  
**password** - Type: String - Required  
**passwordConfirmation** - Type: String - Required  
**locationHome** - Type: String - Required  

##### Example Payload  
```  
{
  "username": "Daniela"
  "email": "daniela@email.com"
  "password": "pass"
  "passwordConfirmation": "pass"
  "locationHome": "London"
}
```  
##### Example Response  
```  
201 Created  
{
  "message": "Welcome aboard Daniela...now your journey begins."
}
```
###  **/api/login**  
#### POST - Login  
##### Example Request  
POST http://localhost:3999/api/login  

##### Parameters  
**email** - Type: String - Required  
**password** - Type: String - Required  

##### Example Payload  
```  
{
  "email": "daniela@email.com"
  "password": "pass"
}
```  
##### Example Response  
```  
200 OK
{
  "message": "Hey Daniela, welcome back.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZDI0OGIwYjIzODVjYTQxMTYxYzFiZTciLCJpYXQiOjE1NjI2NzYwMjcsImV4cCI6MTU2MzM2NzIyN30.LxOm9sGkBHiHdWTIW9PuVy-jwjvoBq_htOPS-oixMIM"
}
```
### **/api/users**  
#### GET - Users Index  
##### Example Request  
GET http://localhost:3999/api/users/

##### Example Response  
```  
200 OK
[
  {
    "_id": "5d24c42c4ec4f8557d0eb415",
    "username": "dani",
    "email": "dani@email.com",
    "locationHome": "London",
    "__v": 0
  },
  {
    "_id": "5d24c42c4ec4f8557d0eb416",
    "username": "seba",
    "email": "seba@email.com",
    "locationHome": "Paris",
    "__v": 0
  },
  {
    "_id": "5d24c42c4ec4f8557d0eb418",
    "username": "cliff",
    "email": "cliff@email.com",
    "locationHome": "Berlin",
    "__v": 0
  },
  {
    "_id": "5d24c42c4ec4f8557d0eb417",
    "username": "shane",
    "email": "shane@email.com",
    "locationHome": "Brussels",
    "__v": 0
  }
]
```

###  **/api/users/:id**
#### GET - Show User
##### Example Request  
GET http://localhost:3999/api/users/5d247d6b4202603cf1d86f2d

##### Example Response  
```  
{
    "_id": "5d247d6b4202603cf1d86f2d",
    "username": "Daniela",
    "email": "daniela@email.com",
    "locationHome": "London",
    "__v": 0
  }
```
#### PUT - Edit User
##### Example Request  
PUT http://localhost:3999/api/users/5d247d6b4202603cf1d86f2d

##### Parameters  
**username** - Type: String - Optional  
**email** - Type: String - Optional  
**password** - Type: String - Optional  
**passwordConfirmation** - Type: String - Optional (Required if password is changed)   
**locationHome** - Type: String - Optional  

##### Example Payload  
```  
{
  "email": "daniela.2@email.com"
}
```  
##### Example Response  
```  
202 Accepted  
{
    "_id": "5d247d6b4202603cf1d86f2d",
    "username": "Daniela",
    "email": "daniela.2@email.com",
    "locationHome": "London",
    "__v": 0
  }
```
#### DELETE - Delete User
##### Example Request  
DELETE http://localhost:3999/api/users/5d247d6b4202603cf1d86f2d

##### Example Response  
```  
204 No Content
```

### **/api/trips**  
#### GET - Trips Index
##### Example Request  
GET http://localhost:3999/api/trips/

##### Example Response  
```  
200 OK
[
  {
    "places": [
      "5d24c42d4ec4f8557d0eb419",
      "5d24c42d4ec4f8557d0eb41d",
      "5d24c42d4ec4f8557d0eb421"
    ],
    "_id": "5d24c42d4ec4f8557d0eb449",
    "title": "Brussels trip",
    "user_id": "5d24c42c4ec4f8557d0eb415",
    "__v": 0
  },
  {
    "places": [
      "5d24c42d4ec4f8557d0eb425",
      "5d24c42d4ec4f8557d0eb429",
      "5d24c42d4ec4f8557d0eb42d"
    ],
    "_id": "5d24c42d4ec4f8557d0eb44a",
    "title": "Paris trip",
    "user_id": "5d24c42c4ec4f8557d0eb416",
    "__v": 0
  },
  {
    "places": [
      "5d24c42d4ec4f8557d0eb43d",
      "5d24c42d4ec4f8557d0eb441",
      "5d24c42d4ec4f8557d0eb445"
    ],
    "_id": "5d24c42d4ec4f8557d0eb44c",
    "title": "Tokyo trip",
    "user_id": "5d24c42c4ec4f8557d0eb418",
    "__v": 0
  }
]
```

### **/users/:id/trips**  
#### GET - User Trips Index
##### Example Request  
GET http://localhost:3999/api/users/5d24c42c4ec4f8557d0eb416/trips

##### Example Response  
```  
200 OK
[
  {
    "places": [
      "5d24c42d4ec4f8557d0eb425",
      "5d24c42d4ec4f8557d0eb429",
      "5d24c42d4ec4f8557d0eb42d"
    ],
    "_id": "5d24c42d4ec4f8557d0eb44a",
    "title": "Paris trip",
    "user_id": "5d24c42c4ec4f8557d0eb416",
    "__v": 0
  }
]
```

### **/api/places**  
#### GET - Places Index - ***(From our api)***  
**** **Testing Purposes Only - Not to be deployed** ****
##### Example Request  
GET http://localhost:3999/api/places/

##### Example Response  
```  
200 OK
[
  {
    "images": [],
    "_id": "5d24c42d4ec4f8557d0eb419",
    "triposoId": "W__3517898",
    "comments": [
      {
        "_id": "5d24c42d4ec4f8557d0eb41c",
        "text": "Comment 1",
        "user": "5d24c42c4ec4f8557d0eb416",
        "createdAt": "2019-07-09T16:43:25.163Z",
        "updatedAt": "2019-07-09T16:43:25.163Z"
      },
      {
        "_id": "5d24c42d4ec4f8557d0eb41b",
        "text": "Comment 2",
        "user": "5d24c42c4ec4f8557d0eb417",
        "createdAt": "2019-07-09T16:43:25.164Z",
        "updatedAt": "2019-07-09T16:43:25.164Z"
      },
      {
        "_id": "5d24c42d4ec4f8557d0eb41a",
        "text": "Comment 3",
        "user": "5d24c42c4ec4f8557d0eb418",
        "createdAt": "2019-07-09T16:43:25.164Z",
        "updatedAt": "2019-07-09T16:43:25.164Z"
      }
    ],
    "ratings": [],
    "__v": 0
  },
  {
    "images": [],
    "_id": "5d24c42d4ec4f8557d0eb429",
    "triposoId": "N__829526180",
    "comments": [
      {
        "_id": "5d24c42d4ec4f8557d0eb42c",
        "text": "Comment 4",
        "user": "5d24c42c4ec4f8557d0eb415",
        "createdAt": "2019-07-09T16:43:25.165Z",
        "updatedAt": "2019-07-09T16:43:25.165Z"
      },
      {
        "_id": "5d24c42d4ec4f8557d0eb42b",
        "text": "Comment 5",
        "user": "5d24c42c4ec4f8557d0eb417",
        "createdAt": "2019-07-09T16:43:25.165Z",
        "updatedAt": "2019-07-09T16:43:25.165Z"
      },
      {
        "_id": "5d24c42d4ec4f8557d0eb42a",
        "text": "Comment 6",
        "user": "5d24c42c4ec4f8557d0eb418",
        "createdAt": "2019-07-09T16:43:25.165Z",
        "updatedAt": "2019-07-09T16:43:25.165Z"
      }
    ],
    "ratings": [],
    "__v": 0
  }
]
```
###  **/api/places/:id**
#### GET - Show Place
##### Example Request  
GET http://localhost:3999/api/places/W__3517898

##### Example Response  
```  
{
  "images": [],
  "_id": "5d24c42d4ec4f8557d0eb419",
  "triposoId": "W__3517898",
  "comments": [
    {
      "_id": "5d24c42d4ec4f8557d0eb41c",
      "text": "Comment 1",
      "user": "5d24c42c4ec4f8557d0eb416",
      "createdAt": "2019-07-09T16:43:25.163Z",
      "updatedAt": "2019-07-09T16:43:25.163Z"
    },
    {
      "_id": "5d24c42d4ec4f8557d0eb41b",
      "text": "Comment 2",
      "user": "5d24c42c4ec4f8557d0eb417",
      "createdAt": "2019-07-09T16:43:25.164Z",
      "updatedAt": "2019-07-09T16:43:25.164Z"
    },
    {
      "_id": "5d24c42d4ec4f8557d0eb41a",
      "text": "Comment 3",
      "user": "5d24c42c4ec4f8557d0eb418",
      "createdAt": "2019-07-09T16:43:25.164Z",
      "updatedAt": "2019-07-09T16:43:25.164Z"
    }
  ],
  "ratings": [],
  "__v": 0
}
```
