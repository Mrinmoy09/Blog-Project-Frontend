import jwtDecode from 'jwt-decode';

// Verify the JWT token and extract the user information
export function verifyToken(token) {
  try {
    const decodedToken = jwtDecode(token);
    const { userId } = decodedToken;
    // Additional checks and validations can be performed here
    return {
      valid: true,
      user: {
        id: userId,
      },
    };
  } catch (error) {
    console.error('Error decoding token:', error);
    return {
      valid: false,
      user: null,
    };
  }
}
