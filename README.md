# Kyrios

Kyrios is a web application that provides user authentication features, including user login and registration. The application has a sleek design with a particle effect background, enhancing the user experience.

## Features

- **User Login**: Users can log in using their email and password. Input validation is performed, and appropriate error messages are displayed for invalid input.
- **User Registration**: New users can register by providing their email, password, and confirming their password. Input validation ensures that the email is valid, and the password meets certain security criteria.
- **Particle Effect**: The application features a captivating particle effect background, creating a dynamic and engaging user interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Particles.js**: A lightweight JavaScript library for creating particles.

## Setup and Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
4. Open `http://localhost:3000` in your browser to view the application.

## Issues and Resolutions

During the development of Kyrios, an issue was encountered where the 'Register' button on the 'Login' screen (and vice versa) was not working when interacted with via mouse clicks, although it worked with keyboard interaction. This issue was resolved by adjusting the `z-index` of the particle effect container, setting it to a negative value, ensuring that it did not overlay the buttons and interfere with mouse interactions.

## Contributing

Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.

## License

This project is open source and available under the [MIT License](LICENSE).
