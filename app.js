const express = require('express');
const app = express();
const port = 8080;

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Define the homepage route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps Pipeline Test</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    color: #007bff;
                }
                .container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    display: inline-block;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #555;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to My DevOps App</h1>
                <p>This is a DIFFICULT STEPS BUT EASY WAY to test the CI/CD pipeline deployment.</p>
                <p>Enjoy your automated deployments! 🚀</p>
                <div class="footer">Deployed using AWS CodeBuild & Code Pipeline</div>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
