```markdown
# CI/CD Demo Application

A simple Node.js application with CI/CD pipeline implementation using GitHub Actions and Docker.

## Features

- Express.js web application
- Automated testing with Jest
- Docker containerization
- CI/CD with GitHub Actions
- Automatic deployment

## Local Development

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Run tests:
   ```
   npm test
   ```

## Docker

Build and run with Docker:

```bash
docker build -t cicd-demo-app .
docker run -p 3000:3000 cicd-demo-app
```

Or use Docker Compose:

```bash
docker-compose up
```

## CI/CD Pipeline

This project demonstrates a complete CI/CD pipeline:

1. **Continuous Integration**: Automated testing on every pull request and push to main branch
2. **Continuous Delivery**: Automated Docker image building and testing
3. **Continuous Deployment**: Automated deployment to production when merging to main

## License

MIT
```