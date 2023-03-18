
// This command handle errors and exceptions using Middleware 

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


  
 // This command handle errors and exceptions using Using try-catch blocks 

 try {
    // code that may throw an error
  } catch (err) {
    console.error(err);
  }


   // This command handle errors and exceptions using Promises 

   async function someAsyncFunction() {
    try {
      // some asynchronous code that may throw an error
    } catch (err) {
      console.error(err);
    }
  }
  
  someAsyncFunction();

// This command handle errors and exceptions using third-party libraries like express-validator

const { body, validationResult } = require('express-validator');

app.post('/user', 
  body('username').notEmpty(),
  body('email').isEmail(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // insert code to create a new user
  }
);
  


