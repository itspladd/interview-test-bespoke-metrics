import { useState } from "react"

export default function useMemberState({
  initName,
  initAge,
  initRating,
  initActivities
}) {

  const ativities = {
    Biking: false,
    Running: false,
    Hiking: false
  }

  // Activities comes in as an array, transform it to the object expected by the state
  if (initActivities) {
    activities.forEach(activity => initActivities[activity] = true)
  }

  const [name, setName] = useState(initName || "")
  const [age, setAge] = useState(initAge || "")
  const [rating, setRating] = useState(initRating || "")
  const [activities, setActivities] = useState(ativities)

  const onNameChange = event => {
    setName(event.target.value)
  }

  const onAgeChange = event => {
    setAge(event.target.value)
  }

  const onRatingChange = event => {
    setRating(event.target.value)
  }

  const onActivityChange = event => {

    const prevValue = activities[event.target.id]

    setActivities(prev => {
      return {
        ...prev,
        [event.target.id]: !prevValue 
      }
    })
    console.log(event.target.value)
    console.log(event.target.id)
  }

  return {
    member: {
      name,
      age,
      rating,
      activities
    },
    onNameChange,
    onAgeChange,
    onRatingChange,
    onActivityChange
  }
}