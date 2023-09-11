# API Documentation

## Introduction

This API provides basic CRUD (Create, Read, Update, Delete) operations for managing "persons." It is built using Node.js, Express, and Mongoose, and connects to a MongoDB database. The API allows you to create, retrieve, update, and delete person records.

## API Base URL
The base URL for this API is `/api` .


## Standard Request Formats

### Create a Person (POST `/api`)

- Request Body Format:
  ```json
  {
    "name": "PersonName"
  }
  ```

### Get a Person (GET `/api/:personId`)

- No request body is required.

### Update a Person (PUT `/api/:personId`)

- Request Body Format:
  ```json
  {
    "name": "UpdatedPersonName"
  }
  ```

### Delete a Person (DELETE `/api/:personId`)

- No request body is required.

## Standard Response Formats

### Success Response

- Status Code: 200 (OK)
- JSON Response Body:
  ```json
  {
    "message": "SuccessMessage",
    "data": {
      "_id": "UniqueID",
      "name": "PersonName"
    }
  }
  ```

### Error Response

- Status Code: 422 (Unprocessable Entity) - Validation failed.
- JSON Response Body:
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

## Sample Usage

### Create a Person

**Request:**

```json
POST /api
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

```json
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

```json
PUT /api/:personId
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

```json
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

## Known Limitations and Assumptions

- The API assumes that the `name` field is unique for each person.
- Error handling is limited to validation errors, not database-specific errors.
- The API does not support pagination for listing persons.

## Setup and Deployment

To set up and deploy the API, follow these steps:

1. Clone this repository and navigate to the project directory.
2. Create a `.env` file and set the following environment variables:
   - `MONGO_USER`: MongoDB username
   - `MONGO_PASSWORD`: MongoDB password
   - `MONGO_DEFAULT_DB`: MongoDB default database name
3. Install the required dependencies using `npm install`.
4. Start the API server using `npm run dev`.
5. The API will be accessible at the specified port (default is 3000).

For production deployment, consider using a production-ready web server and database setup. 
Check out [this guide](https://render.com/docs/deploy-node-express-app) for more information.

---

This document provides comprehensive information about the API, including request/response formats, sample usage, limitations, and setup instructions. If you have any questions or encounter issues, please contact our support team.

Thank you for using our API!

---

Feel free to customize and expand this documentation further to suit your specific needs and requirements.