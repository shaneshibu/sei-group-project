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
GET http://localhost:3999/api/users/:id

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
PUT http://localhost:3999/api/users/:id

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
DELETE http://localhost:3999/api/users/:id

##### Example Response  
```  
204 No Content
```
