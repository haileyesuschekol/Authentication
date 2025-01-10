const signup = async (req, res) => {
  res.send("sign up")
}

const login = async (req, res) => {
  res.send("login")
}

const logout = async (req, res) => {
  res.send("logout")
}

export { signup, login, logout }
