import { body, validationResult } from "express-validator";

const validateRequestJobPost = async (req, res, next) => {
  //console.log(req.body);
  // 1. Setup rules for validation.
  const rules = [
    body("jobCategory").notEmpty().withMessage("Job Category is required"),
    body("designation").notEmpty().withMessage("Designation is required"),
    body("location").notEmpty().withMessage("Location is required"),
    body("companyName").notEmpty().withMessage("Company Name is required"),
    body("salary").notEmpty().withMessage("Salary is required"),
    body("positions").notEmpty().withMessage("Positions is required"),
    body("skills").notEmpty().withMessage("Skills is required"),
    body("date").notEmpty().withMessage("Date is required"),
  ];

  // 2. run those rules.
  await Promise.all(rules.map((rule) => rule.run(req)));

  // 3. check if there are any errors after running the rules.
  var validationErrors = validationResult(req);
  //console.log(validationErrors);
  // 4. if errors, return the error message
  if (!validationErrors.isEmpty()) {
    return res.render("home", {
      errorMessage: "Validation error:",
      errors: validationErrors.array(),
      formData: req.body,
    });
  }
  next();
};

export default validateRequestJobPost;
