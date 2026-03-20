1. My Express API is not responding when I hit a POST request after setting up MongoDB with mongoose. I have separated db.js, routes, and models. How do I ensure the database connection is properly initialized before handling requests?

2. I am sending JSON data from Postman but req.body is coming empty or undefined in my Express route. I already added express.json() middleware. What could be causing this issue in a modular project setup?

3. In mongoose, when should I use find(), findOne(), and findById()? I am trying to fetch a single post using an ID from route params but getting unexpected results.

4. I have moved my MongoDB URI to a .env file using dotenv. It works locally but fails after deployment. How are environment variables handled in production (like Render), and what is the correct setup?