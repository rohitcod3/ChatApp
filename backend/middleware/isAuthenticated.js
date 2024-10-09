import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Initialize dotenv to load environment variables
dotenv.config(); 

const isAuthenticated = async (req, res, next) => {
  try {
    // Retrieve the token from cookies
    const token = req.cookies.token;
    console.log("Token:", token);  // This should show the JWT token from cookies

    // If no token is provided, respond with an error
    if (!token) {
      return res.status(401).json({ message: "User not authenticated. No token provided." });
    }

    // Verify and decode the token using the secret key
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded Token:", decoded);  // This should show the decoded token data

    // If the token cannot be decoded or is invalid, respond with an error
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token." });
    }

    // Set the user ID from the decoded token into the request object for further use
    req.id = decoded.userId;  // Assuming your token contains a `userId` field

    // Proceed to the next middleware or route handler
    next();

  } catch (error) {
    // Log the error for debugging purposes
    console.error("Authentication error:", error);

    // Send an error response if something goes wrong in the verification process
    return res.status(500).json({ message: "Internal server error during authentication." });
  }
};

export default isAuthenticated;
