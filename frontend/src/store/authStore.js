import { create } from "zustand"
import axios from "axios"
const Api_URL = "http://localhost:5000/api/auth"
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null })
    try {
      const response = await axios.post(`${Api_URL}/signup`, {
        email,
        name,
        password,
      })
      set({ user: response.data.user, isAuthenticated: true, isLoading: false })
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      })
      throw error
    }
  },
}))
