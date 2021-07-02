
const roomId = document.getElementById("room-id")

const Alert = document.querySelector(".alert")

const addAlert = () => {
  Alert.classList.remove("hide")
  Alert.classList.add("show")
}

const removeAlert = () => {
  Alert.classList.remove("show")
  Alert.classList.add("hide")
  
}

const copyId = (event) => {  
  navigator.clipboard.writeText(roomId.getAttribute("data-id"))
  addAlert()
  setTimeout(removeAlert, 2000)

}  

roomId.addEventListener("click", (event) => copyId(event))

export default Alert()



