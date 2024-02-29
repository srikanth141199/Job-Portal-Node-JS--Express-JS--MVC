// Middleware to check if user is authenticated
export const auth = (req, res, next) => {
  // If user is authenticated (user email is stored in session), proceed to the next middleware
  if (req.session.userEmail) {
    next();
  } else {
    // If user is not authenticated, redirect to the login page
    res.redirect('/login');
  }
};
