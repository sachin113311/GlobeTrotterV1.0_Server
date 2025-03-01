# Globetrotter Backend

## Project Setup

1. Clone the repository:
    ```
    git clone https://github.com/yourusername/globetrotter-backend.git
    ```

2. Navigate to the project directory:
    ```
    cd globetrotter-backend
    ```

3. Install dependencies:
    ```
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the required variables.

5. Run the development server:
    ```
    node server.js
    ```

## Tech Choices

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Jest**: Testing framework for JavaScript to write and run tests.
- **ESLint**: Linter for identifying and fixing problems in JavaScript code.
- **Prettier**: Code formatter to ensure consistent code style.

## Additional Scripts

- **Start the server**:
  ```
  node server.js
  ```

- **Run tests**:
  ```
  npm test
  ```

- **Lint the code**:
  ```
  npm run lint
  ```

- **Format the code**:
  ```
  npm run format
  ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
