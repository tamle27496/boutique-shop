export default function getUser() {
  const users = JSON.parse(localStorage.getItem("userArr"));
  return users;
}
