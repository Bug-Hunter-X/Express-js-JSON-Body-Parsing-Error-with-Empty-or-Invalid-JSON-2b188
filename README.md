# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.  The bug occurs when the request body is either empty or contains invalid JSON data, causing unexpected behavior.

## Bug Description

The Express.js server fails to gracefully handle empty or malformed JSON requests.  In the case of an empty body, `req.body` will be an empty object.  If the body contains invalid JSON, the server might throw an error or produce unexpected results.

## Solution

The solution involves adding middleware to handle potential errors during JSON parsing. This middleware should validate the incoming JSON, handle errors gracefully and provide informative responses to clients.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to start the server.
4. Send a POST request to `/data` with an empty or invalid JSON body using a tool like Postman or curl. Observe the server's response and console logs.

## Solution

See `bugSolution.js` for the corrected code incorporating error handling during JSON body parsing.