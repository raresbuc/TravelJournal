import React from "react"
import data from "./data"
import Card from "/src/components/Card"
import Navbar from "/src/components/Navbar"


export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        item = {item}   //{...item} and remove .item from card.jsx
      />
    )
  })

  return (
      <div className="container">
        <Navbar />

        {cards}
      </div>
  )
}