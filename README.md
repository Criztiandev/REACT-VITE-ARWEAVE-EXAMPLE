# React Vite Arweave Example

This repository showcases a simple example of using React with Vite and Arweave for decentralized storage.

## Technology Stack

- **React Vite**: A fast and modern frontend framework.
- **React Router Dom**: For managing routing within the application.
- **Arwallet Kit**: For wallet integration.
- **Permamaweb/aoconnect**: To connect to Arweave.
- **ShadcnUI**: A UI component library for building interfaces.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **React Query**: For efficient data fetching and state management.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Criztiandev/REACT-VITE-ARWEAVE-EXAMPLE.git
   ```

2. Navigte to the project directory:

   ```bash
   cd REACT-VITE-ARWEAVE-EXAMPLE
   ```

3. Create an environment file named `.env.local` or `.env.production`, and copy and paste the following lines, filling in the process ID:

   ```bash
   VITE_DEV_ENVIRONMENT = development
   VITE_PROCESS_ID = 
   ```
4. Install the dependencies:

   ```bash
   npm install
   ```

## Deployment

To get started with this project, follow these steps:

1. Build the app:

   ```bash
   npm run build

   ```

2. Create an account on ArDrive and upload the build folder.
3. Inside the uploaded folder, create a manifest.json file that defines your app's structure and assets.
4. Ensure your wallet is funded with AR tokens to cover deployment costs.

[References]: https://www.youtube.com/watch?v=Va5B4SE8Zu8&t=201s

## Additional Notes
- The Arweave wallet currently lacks TypeScript support, so you may need to use // @ts-ignore in your code where necessary.
- Manage your wallet.json file securely as it contains sensitive information related to your Arweave wallet.
- For successful deployment, ensure all required dependencies are installed and configured correctly.

## Live Deployment
You can view a live demo of the deployment application at [Live Demo](https://ar-io.net/EExkXScS8qUUgM6svwD_m4drW1fFNGaSsb1pdlfAU8o)