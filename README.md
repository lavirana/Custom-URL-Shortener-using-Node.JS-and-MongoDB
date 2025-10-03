# Custom URL Shortener (Node.js + MongoDB)

A simple, customizable URL shortening service built with Node.js, Express.js, and MongoDB.  
Generate short links, track visits, see analytics, and redirect users.

---

## 💡 Features

- Create short URLs from long ones  
- Store visit history (timestamps)  
- View analytics for each short link (total clicks + visit history)  
- Redirect users via short links  
- Clean project structure: routes, controllers, models  
- Easily extendable for more features (e.g. custom URLs, rate limiting)

---

## 🛠️ Tech Stack

| Component | Technology / Library |
|-----------|------------------------|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| ID Generation | nanoid |
| Rendering | EJS (optional for Analytics pages) |
| Environment Variables | dotenv |

---

## 📁 Project Structure

/
├── controllers/
│ └── url.js
├── models/
│ └── url.js
├── routes/
│ ├── staticRouter.js
│ └── url.js
├── views/
│ └── home.ejs
├── connect.js
├── index.js
├── .env
├── package.json
└── README.md


---

## ⚙️ Installation & Setup

1. **Clone the repository**  
   ```sh
   git clone https://github.com/yourusername/url-shortener-node.git
   cd url-shortener-node

## Install dependencies

npm install

## Set environment variables

Create a .env file at the root with:

PORT=8002
MONGODB_URI=mongodb://localhost:27017/urlShortener

## Setup database tables/collections

(If using MongoDB, collections will be created automatically when you save data.)

## Run the server

npm start


Or, for development with auto-reload:

npm run dev


## Open in browser

Go to http://localhost:8002 to see the app running.

## 🚀 Usage

Enter a long URL in the form, click “Generate”

You’ll receive a short link (e.g. http://localhost:8002/abc123)

Visit that link — it redirects to the original URL

Go to the home page / dashboard to see analytics (click count + visit timestamps)

## 🔐 How It Works (High-Level)

Routes define endpoints (e.g. /url, /) and point to controller methods

Controller methods handle core logic:

handleNewShortUrl reads the long URL, generates a short ID, stores it in DB

handleAnalytics retrieves analytics data for a given short ID

Model (url.js) defines the schema in MongoDB: shortId, redirectURL, visitHistory

Database stores every URL and logs visits (timestamps)

Redirection: when someone visits /:shortId, we look up the URL and redirect

## 🛡️ Limitations & Future Improvements

No custom alias feature (yet)

No rate-limiting/security checks

Visit history stored as raw timestamps — could be improved with metadata

Use Redis or cache to speed up lookups

Add user authentication and private URLs

Deploy to cloud platforms (Heroku, Vercel, AWS)

Add tests (unit / integration)

## ✅ Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.
If you add a new feature (e.g. custom short links, analytics charts, user accounts), please update this README.