# My Fullstack Application

This project is a fullstack application built with a Java backend and a TypeScript frontend. 

## Project Structure

```
my-fullstack-app
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── App.java
│   │   │   └── resources
│   │   │       └── application.properties
│   ├── pom.xml
│   └── README.md
├── frontend
│   ├── src
│   │   ├── app.ts
│   │   └── components
│   │       └── App.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Backend

The backend is built using Java and Spring Boot. It serves as the API for the application.

- **Main Class**: `App.java` - Entry point of the application.
- **Configuration**: `application.properties` - Contains configuration settings.
- **Dependencies**: `pom.xml` - Maven configuration file.

For more details, refer to the `backend/README.md`.

## Frontend

The frontend is developed using TypeScript and React. It provides the user interface for the application.

- **Entry Point**: `app.ts` - Initializes the application and sets up routing.
- **Main Component**: `App.tsx` - The main React component.
- **Dependencies**: `package.json` - npm configuration file.
- **TypeScript Config**: `tsconfig.json` - TypeScript compiler options.

For more details, refer to the `frontend/README.md`.

## Getting Started

To get started with the application, follow the instructions in the respective backend and frontend README files for setup and running the application.