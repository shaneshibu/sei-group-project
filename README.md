# sei-group-project  
Shane  
Cliff  
Dan  

## API Documentation  

###  /api/register  
#### Example Request  
POST http://localhost:3999/api/register  

#### Parameters  
**username** - Type: String - Required  
**email** - Type: String - Required  
**password** - Type: String - Required  
**passwordConfirmation** - Type: String - Required  
**locationHome** - Type: String - Required  

#### Example Payload  
```  
{
  "username": "Daniela"
  "email": "daniela@email.com"
  "password": "pass"
  "passwordConfirmation": "pass"
  "locationHome": "London"
}
```  

#### Example Response  
```  
201 Created  
{
  "message": "Welcome aboard Daniela...now your journey begins."
}
```
###  /api/login  
#### Example Request  
POST http://localhost:3999/api/login  

#### Parameters  
**email** - Type: String - Required  
**password** - Type: String - Required  

#### Example Payload  
```  
{
  "email": "daniela@email.com"
  "password": "pass"
}
```  

#### Example Response  
```  
200 OK
{
  "message": "Hey Daniela, welcome back.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZDI0OGIwYjIzODVjYTQxMTYxYzFiZTciLCJpYXQiOjE1NjI2NzYwMjcsImV4cCI6MTU2MzM2NzIyN30.LxOm9sGkBHiHdWTIW9PuVy-jwjvoBq_htOPS-oixMIM"
}
```
