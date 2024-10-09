import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Initialize dotenv to load environment variables
dotenv.config(); 

const isAuthenticated = async (req, res, next) => {
  try {
   
    const token = req.cookies.token;
    console.log("Token:", token);  
    
    if (!token) {
      return res.status(401).json({ message: "User not authenticated. No token provided." });
    }

  
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log("Decoded Token:", decoded); 

    
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token." });
    }

    
    req.id = decoded.userId; 

  
    next();

  } catch (error) {
  
    console.error("Authentication error:", error);

   
    return res.status(500).json({ message: "Internal server error during authentication." });
  }
};

export default isAuthenticated;
