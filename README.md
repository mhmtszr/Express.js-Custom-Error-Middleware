# Express.js-Custom-Error-Middleware

With this error management architecture, you will have the chance to manage your backend server errors in a central middleware. Any errors received in the application will return the same structure according to the error code and error message entered.

## Setup

1- Download the code.

2- Install packages.
   ```
  npm install
  ```
  
3- If you don't have install nodemon.
   ```
  npm install -g nodemon
  ```
   
4- Run the application.
  ```
  npm run start:dev
  ```
5- Try example throwError endpoint.

## Examples

### Error Codes and Messages

![customError](https://github.com/mhmtszr/Express.js-Custom-Error-Middleware/blob/master/examples/customError.png?raw=true)

### Example-1: With reason
![reason](https://github.com/mhmtszr/Express.js-Custom-Error-Middleware/blob/master/examples/reason.png?raw=true)
![reasonResponse](https://github.com/mhmtszr/Express.js-Custom-Error-Middleware/blob/master/examples/reasonResponse.png?raw=true)

### Example-2: Without reason
![withoutReason](https://github.com/mhmtszr/Express.js-Custom-Error-Middleware/blob/master/examples/withoutReason.png?raw=true)
![withoutReasonResponse](https://github.com/mhmtszr/Express.js-Custom-Error-Middleware/blob/master/examples/withoutReasonResponse.png?raw=true)
