import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("client/index.ejs");
});

app.get("/admin-login", (req, res) => {
  res.render("login/login.ejs");
});

app.get("/forget", (req, res) => {
  res.render("login/forgetpassword.ejs");
});


app.post("/post-login", (req, res) => {
  res.redirect("/dashboard");
});

app.get('/about', (req, res) => {
  res.render('client/about.ejs');
});

app.get('/events', (req, res) => {
  res.render('client/events.ejs');
});

app.get('/contacts', (req, res) => {
  res.render('client/contacts.ejs');
});

app.get('/addmissions', (req, res) => {
  res.render('client/addmissions.ejs');
});

app.get('/career', (req, res) => {
  res.render('client/career.ejs');
});

app.get('/youth', (req, res) => {
  res.render('client/youth.ejs');
});

app.get('/professional', (req, res) => {
  res.render('client/professional.ejs');
});

app.get('/physical', (req, res) => {
  res.render('client/physical.ejs');
});

app.get('/read', (req, res) => {
  res.render('client/read.ejs');
});
app.get('/Cforms', (req, res) => {
  res.render('client/Cforms.ejs');
});




app.post("/forgot-pass", (req, res) => {
  res.redirect("/admin-login");
});

app.get("/dashboard", (req, res) => {
  res.render("admin/dashboard.ejs");
});

app.get("/category", (req, res) => {
  res.render("admin/category.ejs");
});

app.get("/add_blog", (req, res) => {
  res.render("admin/addBlog.ejs");
});

app.get("/view_blog", (req, res) => {
  res.render("admin/viewblog.ejs");
});

app.get("/add_user", (req, res) => {
  res.render("admin/addUser.ejs");
});

app.get("/user_profile", (req, res) => {
  res.render("admin/userProfile.ejs");
});

app.get("/view_user", (req, res) => {
  res.render("admin/viewUser.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});