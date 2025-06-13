# TL;DR Proxy Server

The TL;DR Proxy Server is a lightweight Node.js server that securely connects the TL;DR Chrome Extension to the OpenAI API. It protects the API key and handles summarization requests sent from the extension.

**A demo of the chrome extension working is [here](https://youtu.be/21A77E1vTYg)**

This server is required to run the TL;DR Chrome Extension locally.

## To run locally:

1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory with the OPENAI_API_KEY
