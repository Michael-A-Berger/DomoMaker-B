const controllers = require('./controllers');

const router = (app) => {
  // GET
  app.get('/login', controllers.Account.loginPage);
  app.get('/signup', controllers.Account.signupPage);
  app.get('/logout', controllers.Account.logout);
  app.get('/maker', controllers.Domo.makerPage);
  app.get('/', controllers.Account.loginPage);

  // POST
  app.post('/login', controllers.Account.login);
  app.post('/signup', controllers.Account.signup);
  app.post('/maker', controllers.Domo.make);
};

module.exports = router;
