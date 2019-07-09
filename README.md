# sei-group-project  
Shane  
Cliff  
Dan  

## API Documentation  

###  /api/register  
#### POST Register
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
###  /api/login  
#### POST Login  
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

###  /api/users/:id
#### GET Show User
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
