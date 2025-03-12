const BASE_URL = "https://random-data-api.com/api/users/random_user"

export const fetchUsers = async (size = 1) => {
  try {
    const response = await fetch(`${BASE_URL}?size=${size}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return Array.isArray(data) ? data : [data]
  } catch (error) {
    console.error("Error fetching users:", error)
    throw error
  }
}

