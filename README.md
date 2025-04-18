# CPL Sports T11

A modern sports event management platform built with React and Tailwind CSS.

## Features

- Multi-role authentication (Admin, Coach, Player)
- Event creation and management
- Event browsing and filtering
- Responsive design
- Modern UI with gradient effects

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arifakhtar51/CPL-sports.git
   cd CPL-sports/sportify-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The application will be available at `http://localhost:5173`

## Demo Login Credentials

### Admin Access
- Username: `admin`
- Password: `admin`

### Coach Access
- Username: `coach`
- Password: `coach`

### Player Access
- Username: `player`
- Password: `player`

### Registration
- Choose between Player or Coach role
- Fill in the registration form with your details
- ID and email are required

## Project Structure

```
sportify-react-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Login.jsx
│   │   ├── EventList.jsx
│   │   ├── EventCard.jsx
│   │   ├── HeroSection.jsx
│   │   ├── CreateEventForm.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json
```

## Technologies Used

- React
- React Router
- Tailwind CSS
- Vite
- Local Storage (for demo authentication)

## Future Improvements

- Firebase Authentication integration
- Real-time database for events
- User profile management
- Event registration system
- Payment integration
- Team management for coaches
- Player statistics tracking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
