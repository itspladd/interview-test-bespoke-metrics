import { useState } from "react"

export default function AddMemberForm({}) {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [rating, setRating] = useState("")
  const [activities, setActivities] = useState({
    biking: false,
    running: false,
    hiking: false
  })

  const changeName = event => {
    setName(event.target.value)
  }

  const onAgeChange = event => {
    setAge(event.target.value)
  }

  const onRatingChange = event => {
    setRating(event.target.value)
  }

  const onActivityChange = event => {
    console.log(event.target.value)
  }


  return (
    <form>
      <label for=""></label>
      <input type="" name=""></input>
    </form>
  )
}