// Dummy data for testing
const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'moderator', active: true },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'moderator', active: false },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin', active: true },
  { id: 4, name: 'John Doe', email: 'john@example.com', role: 'moderator', active: true },
  { id: 5, name: 'Jane Smith', email: 'jane@example.com', role: 'moderator', active: false },
  { id: 6, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin', active: true },
  { id: 7, name: 'John Doe', email: 'john@example.com', role: 'moderator', active: true },
  { id: 8, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', active: false },
  { id: 9, name: 'Alice Johnson', email: 'alice@example.com', role: 'moderator', active: true },
  { id: 10, name: 'John Doe', email: 'john@example.com', role: 'moderator', active: true },
  { id: 11, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', active: false },
  { id: 12, name: 'Alice Johnson', email: 'alice@example.com', role: 'moderator', active: true },
  { id: 13, name: 'John Doe', email: 'john@example.com', role: 'moderator', active: true },
  { id: 14, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', active: true },
  { id: 15, name: 'Alice Johnson', email: 'alice@example.com', role: 'moderator', active: true },
  { id: 16, name: 'John Doe', email: 'john@example.com', role: 'moderator', active: true },
  { id: 17, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', active: false },
  { id: 18, name: 'Alice Johnson', email: 'alice@example.com', role: 'moderator', active: true },
  { id: 19, name: 'John Doe', email: 'john@example.com', role: 'moderator', active: true },
  { id: 20, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', active: false },
  { id: 21, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin', active: false },
];

// Mocked API calls
export const getUsers = async () => {
  // Simulate an API response with dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyUsers);
    }, 1000); // Simulating network delay
  });
};

export const deleteUser = async (id) => {
  // Simulate deleting a user by filtering out the deleted user from the dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = dummyUsers.findIndex(user => user.id === id);
      if (index !== -1) {
        dummyUsers.splice(index, 1); // Remove the user from the dummy data
      }
      resolve(); // No return value needed for delete
    }, 1000);
  });
};

export const createUser = async (userData) => {
  // Simulate creating a user by adding to the dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = { id: dummyUsers.length + 1, ...userData };
      dummyUsers.push(newUser);
      resolve(newUser); // Return the newly created user
    }, 1000);
  });
};

export const updateUser = async (id, userData) => {
  // Simulate updating a user in the dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = dummyUsers.findIndex(user => user.id === id);
      if (index !== -1) {
        dummyUsers[index] = { ...dummyUsers[index], ...userData };
      }
      resolve(dummyUsers[index]); // Return the updated user
    }, 1000);
  });
};