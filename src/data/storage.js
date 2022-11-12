export const setStorage = (data) => {
  const storage = [
  localStorage.setItem("token", data.token),
  localStorage.setItem("id", data.id),
  localStorage.setItem("email", data.email),
  localStorage.setItem("role", data.role),
  localStorage.setItem("name", data.name),
  ]
  return storage
}