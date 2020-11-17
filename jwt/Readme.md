# Your task is to build a simple stateless microservice in Node Js, with three major functionalities -
> Authentication
> JSON patching
> Image Thumbnail Generation

> Technology use ==> NodeJs \
> Npm Packages ==> body-parser, cors, express, jsonpatch, jsonwebtoken, request, sharp, @babel/core ,@babel/preset-env,
    "@babel/register


# Application have 3 end point
> To Authenticate the user \
**(POST)** > https://attainu-code.herokuapp.com/api/auth/login \
**(Body)** > {"email":"abc@gmail.com","password":"12345678"} \
**(Repsponse)** > 
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2MDM5OTg1MzQsImV4cCI6MTYwNDA4NDkzNH0.WqfRqhcWVjkxPRH6nTmAsQ9WKJ__r1BDTqWJRF4rtCw"
}
Token is valid for one hour after each login

![Authenticate](https://i.ibb.co/1TQnmzB/Screenshot-2020-10-30-at-1-01-14-AM.png)

> JSON patching \
**(GET)**  > https://attainu-code.herokuapp.com/api/auth/jsonpatch \
**(Header)** > ['x-access-token':'token generated in first call'] \
**(Response)** > {
    "baz": "boo",
    "foo": "bar"
} 

![Patching](https://i.ibb.co/9tT1P1f/Screenshot-2020-10-30-at-1-04-17-AM.png)


> Image Thumbnail Generation \
**(GET)** >https://attainu-code.herokuapp.com/api/auth/imageConvert \
**(Pass Query params)** ?url=https://cdn.idsitnetwork.net/wp-content/uploads/sites/27/2019/01/flower-shop-fields-of-romance-148245.jpg \
**(Header)** > ['x-access-token':'token generated in first call'] \
**(response)** > Paste Url in browser to download image "https://attainu-code.herokuapp.com/api/auth/imageOutput" 

![Image Thumbnail Generation](https://i.ibb.co/Fbk3D6W/Screenshot-2020-10-30-at-1-05-50-AM.png)


> Check Image output \
**(GET)** > https://attainu-code.herokuapp.com/api/auth/imageOutput \
**(Response)** > Converted Image \
![Image Output](https://i.ibb.co/qN7PHvV/Screenshot-2020-10-30-at-1-06-33-AM.png)