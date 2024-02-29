import {
  body,
  validationResult,
} from 'express-validator';

const validateRequestJobApply = async (
  req,
  res,
  next
) => {
  //console.log(req.body);
  // 1. Setup rules for validation.
  const rules = [
    body('name')
      .notEmpty()
      .withMessage('Name is required'),
    body('email')
      .isEmail()
      .withMessage(
        'Please enter a valid email address'
      ),
      body('contract')
      .notEmpty().withMessage('Contract number is required')
      .isNumeric().withMessage('Contract number must be numeric')
      .isLength({ min: 10, max: 10 }).withMessage('Contract number must be 10 digits'),
  ];

  // 2. run those rules.
  await Promise.all(
    rules.map((rule) => rule.run(req))
  );

  // 3. check if there are any errors after running the rules.
  var validationErrors = validationResult(req);
  //console.log(validationErrors);
  // 4. if errors, return the error message
  if (!validationErrors.isEmpty()) {
    return res.render('home', {
        errorMessage: 'Validation error:',
        errors: validationErrors.array(),
        formData: req.body
    });
  }
  next();
};

export default validateRequestJobApply;
