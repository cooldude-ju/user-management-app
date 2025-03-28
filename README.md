# User Management App

This is a **User Management Application** built using **React.js**. The app allows users to:

- View a paginated list of users fetched from an API.
- Search for users on the **current page only**.
- Edit and update user details.
- Delete users.
- Authenticate using a token-based system.

## Features

- **Pagination**: Fetches and displays users page by page.
- **Client-side Search**: Searches users on the **current page only**, ensuring efficiency.
- **User Management**: Edit and delete users.
- **Authentication**: Protects routes and redirects unauthorized users.
- **Snackbar Notifications**: Displays success and error messages.
- **Modular Codebase**: Uses a structured approach with hooks and reusable components.

---

## Live Demo

Check out the live version of the app here: **[User Management App](https://user-management-app-blue.vercel.app)**

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/cooldude-ju/user-management-app.git
   cd user-management-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

   This will launch the frontend at **[http://localhost:3000/](http://localhost:3000/)**.

---



## Search Feature: Searching Only on the Current Page

### 🔍 Why Does Search Work Only on the Current Page?

- **Performance Optimization**: Searching all users across multiple pages would require fetching all users at once, which is inefficient.
- **Pagination Restriction**: The API fetches users **page by page**, meaning we don't have access to users from other pages unless we make multiple requests.
- **User Experience**: Keeping the search limited to the current page ensures that it filters the visible users efficiently without requiring extra API calls.

### 🔧 How It Works

- Users are fetched based on the **current page number**.
- When searching, the app **only filters the users on the current page**.
- The search field dynamically filters users based on their **name or email**.

---

## API Endpoints

This app currently uses **ReqRes API** as a placeholder for user data.

- **Fetch Users (Paginated)**:
  ```sh
  GET https://reqres.in/api/users?page={pageNumber}
  ```
- **Update User**:
  ```sh
  PUT https://reqres.in/api/users/{id}
  ```
- **Delete User**:
  ```sh
  DELETE https://reqres.in/api/users/{id}
  ```

---

## Assumptions & Considerations

- **Authentication**: The app assumes that users need a valid token to access the users list.
- **API Limitations**: Since we use `reqres.in`, changes like editing or deleting users do not persist.
- **Pagination Logic**: The API returns only a fixed number of users per page, so global search is not feasible unless all pages are fetched.
- **Search Efficiency**: Client-side search is optimal for small datasets (one page at a time).

---

## Future Enhancements

- **Global Search**: Implement full database search using backend filtering.
- **Sorting & Filtering**: Add sorting options (by name, email, etc.).
- **Enhanced UI**: Improve styling with Material UI themes.

---

## License

This project is licensed under the **MIT License**.

---

## Contact

For any issues or suggestions, feel free to create an issue or reach out!

🚀 **Happy Coding!** 🎉

