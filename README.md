# Crypto Stats API 🚀

This is a Node.js application that fetches cryptocurrency data and stores it in MongoDB. It provides a simple REST API to access cryptocurrency stats. 📈

## Table of Contents 📚

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
  - [Clone the Repository](#clone-the-repository)
  - [Environment Variables](#environment-variables)
  - [Install Dependencies](#install-dependencies)
  - [Run Locally](#run-locally)
- [API Routes](#api-routes)
- [Database Setup](#database-setup)
- [Deployment](#deployment)
  - [Deploy to Heroku](#deploy-to-heroku)
  - [Deploy to Vercel](#deploy-to-vercel)
  - [Deploy to AWS](#deploy-to-aws)
  - [Deploy to Google Cloud](#deploy-to-google-cloud)
  - [Deploy to DigitalOcean](#deploy-to-digitalocean)
- [License](#license)

## Description 📄

This Node.js app fetches cryptocurrency data (such as price, market cap, and 24h change) from an external API, validates the data, and stores it in a MongoDB database. The data can be retrieved via a simple REST API endpoint.

## Features 🔥

- Fetches real-time cryptocurrency data from external APIs.
- Stores fetched data in a MongoDB database.
- Provides an API to fetch saved cryptocurrency data.
- Cron job to periodically fetch data and save it to MongoDB.
- Error handling for missing or invalid data.

## Tech Stack ⚙️

- **Backend**: Node.js, Express
- **Database**: MongoDB (using MongoDB Atlas for cloud-hosted database)
- **Cron Jobs**: For periodic data fetching ⏰
- **API**: RESTful API 🌐
- **Environment Variables**: `.env` file for sensitive configurations 🔒

## Setup 🛠️

### Clone the Repository 📥

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/crypto-stats.git
cd crypto-stats
```

### Environment Variables ⚡

Create a `.env` file in the root of your project and add the following variables:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Replace `your_mongodb_connection_string` with your MongoDB URI from MongoDB Atlas or your local MongoDB instance.

### Install Dependencies 🧰

Install the required dependencies:

```bash
npm install
```

### Run Locally 🏠

To run the application locally, use the following command:

```bash
npm start
```

This will start the server on port `3000` by default. You can change the port by modifying the `.env` file.

## API Routes 📡

- **POST** `/api/crypto`
  - Fetches and stores cryptocurrency data (price, market cap, 24h change).
  - Example request:
    ```bash
    curl -X POST http://localhost:3000/api/crypto
    ```
- **GET** `/api/crypto`
  - Fetches all saved cryptocurrency data.
  - Example request:
    ```bash
    curl http://localhost:3000/api/crypto
    ```

## Database Setup 🗄️

1. **MongoDB Atlas**:

   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a free cluster.
   - Obtain the MongoDB connection URI and add it to the `.env` file.

2. **Local MongoDB**:
   - Install MongoDB locally and run it.
   - Update the `.env` file with the correct URI for local MongoDB (e.g., `mongodb://localhost:27017/crypto-stats`).

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
#
 --- 


# API Documentation for Crypto Stats

## Base URL
```
https://koinx-backend-d3z6.onrender.com
```

## Available Routes

### 1. `/api/deviation`
#### Method: `GET`
- **Description**: This endpoint retrieves the standard deviation of the prices for a specific cryptocurrency.
- **Query Parameters**:
  - `coin`: The name of the cryptocurrency (e.g., `bitcoin`, `ethereum`, `matic-network`).
  
#### Example Request
```http
GET https://koinx-backend-d3z6.onrender.com/api/deviation?coin=bitcoin
```

#### Response
```json
{
  "deviation": 234.56
}
```

#### Errors
- **404 Not Found**: If no data is found for the requested coin.
```json
{
  "message": "Data not found"
}
```

- **500 Internal Server Error**: If there is an error processing the request.
```json
{
  "error": "An error message"
}
```

### 2. `/api/coins`
#### Method: `GET`
- **Description**: This endpoint returns a list of coins available in the database.
  
#### Example Request
```http
GET https://koinx-backend-d3z6.onrender.com/api/coins
```

#### Response
```json
[
  {
    "coin": "bitcoin",
    "price": 50000,
    "marketCap": 1000000000000,
    "change24h": 2.5
  },
  {
    "coin": "ethereum",
    "price": 3500,
    "marketCap": 400000000000,
    "change24h": 1.2
  }
]
```

#### Errors
- **500 Internal Server Error**: If there is an error fetching the list of coins.
```json
{
  "error": "An error message"
}
```
