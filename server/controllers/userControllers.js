exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("email,  password", email, password);
  try {
    return res.status(200).json({
      message: "Registration Succesfull",
    });
  } catch (err) {
    console.log("Error regestring  user:", err);
    return res.status(500).json({ error: "Error regestring user" });
  }
};
