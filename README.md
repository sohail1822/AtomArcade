
# AtomArcade

## Overview

AtomArcade is an innovative platform that empowers researchers and developers to visualize molecular structures, generate custom molecules using SMILES notation, and collaborate in real-time. Leveraging cutting-edge technologies, AtomArcade streamlines the molecular research process for faster insights and improved decision-making.

## Tech Stack

- **Frontend:** React.js, Next.js, TailwindCSS, TypeScript
- **Backend:** MongoDB, Mongoose
- **Libraries/Tools:** RDKit, ApexCharts, NextAuth.js
- **Real-time Communication:** Ably
- **API Services:** Resend
- **AI Model:** Nvidia Molmin for advanced molecule generation

## Key Features

- **Molecular Visualization:** Intuitive visualization and manipulation of molecular structures.
- **SMILES Notation:** Easily generate and customize molecules using SMILES notation.
- **AI-Powered Molecule Generation:** Utilize the Nvidia Molmin model for accurate molecular creation.
- **Cheminformatics Capabilities:** Implement advanced cheminformatics tools with RDKit.
- **Real-time Collaboration:** Engage with users through integrated chat functionality powered by Ably.
- **User Management:** Change credentials, reset passwords, and verify accounts via the Resend API.
- **Customizable Themes:** Toggle between light and dark modes for an enhanced user experience.

## Screenshots

### Dashboard Page
![Dashboard Screenshot](path/to/dashboard_screenshot.png)
*An overview of the dashboard, showcasing key functionalities and metrics.*

### Molecule Generation Page
![Molecule Generation Screenshot](path/to/molecule_generation_screenshot.png)
*Interface for generating custom molecules using SMILES notation.*

### Compound Search Page
![Compound Search Screenshot](path/to/compound_search_screenshot.png)
*Search for compounds easily with an intuitive search functionality.*

### Real-Time Chat Page
![Real-Time Chat Screenshot](path/to/chat_page_screenshot.png)
*Engage in real-time discussions with team members through integrated chat.*

### Account Settings Page
![Account Settings Screenshot](path/to/account_settings_screenshot.png)
*Manage your account settings, including password resets and theme preferences.*

*(Make sure to replace the paths with the actual paths to your screenshot images.)*

## Getting Started

### Prerequisites

Ensure you have Node.js and MongoDB installed on your machine.

### Clone the Repository

git clone  https://github.com/sohail1822/AtomArcade.git
cd atomarcade



### Run the Backend
 Navigate to the backend directory:
cd backend


### Install backend dependencies:
```bash
npm install
```
### Start the backend server:

```bash
node server.js
```
### Run the Frontend
Open a new terminal window and navigate back to the root directory:

```bash
cd ..
```
### Install frontend dependencies:

```bash
npm install
```
### Start the frontend application:

```bash
npm run dev
```

### Access the Application
Open your browser and navigate to http://localhost:3000 to access the frontend.

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure to follow the project's coding standards.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments

RDKit: For cheminformatics functionalities.

Nvidia Molmin: For advanced molecular generation.

Ably: For real-time communication capabilities.

Resend: For managing user authentication.

