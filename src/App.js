import React, { useState } from "react"
import "./App.css"

function App() {
  const [backgroundImage, setBackgroundImage] = useState("")

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      setBackgroundImage(event.target.result)
    }

    reader.readAsDataURL(file)
  }

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
  }

  return (
    <div style={backgroundStyle}>
      <div className="header-box">
        <h1>Add background!</h1>
      </div>
      <div className="upload">
        <input type="file" onChange={handleImageChange} />
      </div>
    </div>
  )
}

export default App

// import React, { useState } from "react"

// function App() {
//   const [imageUrl, setImageUrl] = useState("")

//   const handleChange = (e) => {
//     const file = e.target.files[0]
//     const reader = new FileReader()

//     reader.onloadend = () => {
//       setImageUrl(reader.result)
//     }

//     if (file) {
//       reader.readAsDataURL(file)
//     }
//   }

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${imageUrl})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <input type="file" onChange={handleChange} />
//     </div>
//   )
// }

// export default App
