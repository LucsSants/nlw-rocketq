const html = document.querySelector("html")
const checkBox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
  window
  .getComputedStyle(element)
  .getPropertyValue(style)

  
const initialColors = {
  background: getStyle(html,"--background"),
  overlay: getStyle(html,"--overlay"),
  white: getStyle(html,"--white"),
  black: getStyle(html,"--black"),
  lightBlue: getStyle (html,"--light-blue"),
  darkGrey: getStyle(html,"--dark-grey")
}

const darkMode = {
  background: "#333333",
  overlay: "#E0ECFF",
  white: "#393939",
  black: "#E0ECFF",
  lightBlue: "#2A3C57",
  darkGrey:"#EAECF2"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
  Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}
 
/*
checkBox.addEventListener("change", ({target}) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
*/


const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkBox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkBox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkBox.setAttribute('checked', "")
  changeColors(darkMode);
}

