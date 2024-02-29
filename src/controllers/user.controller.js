// Import the user model
import UserModel from '../models/user.model.js';

// Controller for user-related tasks
export default class UserController {

  // Render the home page
  getHome(req,res){
    res.render('home', {userEmail: req.session.userEmail});
  }

  // Render the registration form
  getRegister(req, res) {
    res.render('register');
  }

  // Render the login form
  getLogin(req, res) {
    res.render('login', { errorMessage: null });
  }

  // Handle user registration
  postRegister(req, res) {
    const { name, email, password } = req.body;
    // Add the user to the database
    UserModel.add(name, email, password);
    res.render('login', { errorMessage: null });
  }

  // Handle user login
  postLogin(req, res) {
    const { email, password } = req.body;
    // Check if the user credentials are valid
    const user = UserModel.isValidUser(email, password);
    if (!user) {
      // If credentials are invalid, show an error message
      return res.render('login', {
        errorMessage: 'Invalid Credentials',
      });
    }
    // Set the user's email in the session
    req.session.userEmail = email;
    res.render('home', {
      userEmail: req.session.userEmail,
    });
  }

  // Handle user logout
  logout(req, res) {
    // Destroy the session on logout
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        // Redirect to the login page after logout
        res.redirect('/login');
      }
    });
    // Clear the lastVisit cookie
    res.clearCookie('lastVisit');
  }
}
