require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                header {
                    background-color: #333;
                    color: #fff;
                    padding: 10px 0;
                    text-align: center;
                }
                nav {
                    display: flex;
                    justify-content: center;
                    background-color: #444;
                    padding: 10px 0;
                }
                nav a {
                    color: #fff;
                    text-decoration: none;
                    margin: 0 15px;
                    padding: 5px 10px;
                }
                nav a:hover {
                    background-color: #555;
                }
                main {
                    padding: 20px;
                    text-align: center;
                }
                footer {
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                    padding: 10px 0;
                    position: fixed;
                    width: 100%;
                    bottom: 0;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to My Website</h1>
            </header>
            <nav>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/github">GitHub</a>
            </nav>
            <main>
                <h2>About Us</h2>
                <p>This is the home page of my website. Here you can find information about what we do and how we can help you.</p>
            </main>
            <footer>
                <p>&copy; 2024 My Website</p>
            </footer>
        </body>
        </html>
    `);
});


app.get('/login', (req, res) => {
    res.send(`
        <form action="/github" method="GET">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});


app.get('/github',(req,res) => {
    res.send('<a href="https://github.com/nasirmalek"><button>Github</button')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})