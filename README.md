# Stage 2 API

This is a RESTful API built with Node.js, Express, and MongoDB to perform CRUD operations on persons. This document provides an overview of the API, including how to set it up, available endpoints, and sample requests/responses.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Sample Requests and Responses](#sample-requests-and-responses)
- [Known Limitations](#known-limitations)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB database connection.
- Create a `.env` file and set the following environment variables:

```env
MONGO_USER=your_mongo_user
MONGO_PASSWORD=your_mongo_password
MONGO_DEFAULT_DB=your_default_db_name
PORT=3000
```

### Installation

To set up and run the API locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/AbdurrahmanSogbesan/hng-stage-2.git
   ```

2. Change to the project directory:

   ```bash
   cd hng-stage-2
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the API:

   ```bash
   npm run dev
   ```

The API will be accessible at `http://localhost:3000`.

## Usage

The API is designed to manage persons. You can create, retrieve, update, and delete persons using the provided endpoints.

## Endpoints

- Create a Person: `POST /api`
- Get a Person: `GET /api/:personId`
- Update a Person: `PUT /api/:personId`
- Delete a Person: `DELETE /api/:personId`

## Sample Requests and Responses

### Create a Person

**Request:**

```http
POST /api
Content-Type: application/json

{
  "name": "John Doe"
}
```

**Response (Success):**

```json
{
  "message": "Person created successfully.",
  "data": {
    "_id": "UniqueID",
    "name": "John Doe"
  }
}
```

**Response (Error - Validation Failed):**

```json
{
  "message": "Validation failed, input data is incorrect",
  "data": [
    {
      "msg": "InvalidNameErrorMessage",
      "param": "name",
      "location": "body"
    }
  ]
}
```

### Get a Person

**Request:**

```http
GET /api/:personId
```

**Response (Success):**

```json
{
  "message": "Person fetched successfully!",
  "data": {
    "_id": "UniqueID",
    "name": "John Doe"
  }
}
```

**Response (Error - Person Not Found):**

```json
{
  "message": "Person was not found"
}
```

### Update a Person

**Request:**

```http
PUT /api/:personId
Content-Type: application/json

{
  "name": "Updated John Doe"
}
```

**Response (Success):**

```json
{
  "message": "Person updated successfully!",
  "data": {
    "_id": "UniqueID",
    "name": "Updated John Doe"
  }
}
```

**Response (Error - Validation Failed):**

```json
{
  "message": "Validation failed, input data is incorrect",
  "data": [
    {
      "msg": "InvalidNameErrorMessage",
      "param": "name",
      "location": "body"
    }
  ]
}
```

### Delete a Person

**Request:**

```http
DELETE /api/:personId
```

**Response (Success):**

```json
{
  "message": "Person deleted successfully!"
}
```

**Response (Error - Person Not Found):**

```json
{
  "message": "Person was not found"
}
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.
