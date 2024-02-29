// Middleware to set the last visit time
export const setLastVisit = (req, res, next) => {
  // 1. Check if the lastVisit cookie is set.
  if (req.cookies.lastVisit) {
    // If the cookie is set, add a local variable with the last visit time data.
    res.locals.lastVisit = new Date(
      req.cookies.lastVisit
    ).toLocaleString();
  }

  // 2. Set the lastVisit cookie to the current time with a max age of 2 days.
  res.cookie(
    'lastVisit',
    new Date().toISOString(),
    {
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days in milliseconds
    }
  );

  // 3. Proceed to the next middleware.
  next();
};
