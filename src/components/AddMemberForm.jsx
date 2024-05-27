import { useState } from "react"
import { 
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  FormLabel
} from "@mui/material"

export default function AddMemberForm({}) {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [rating, setRating] = useState("")
  const [activities, setActivities] = useState({
    biking: false,
    running: false,
    hiking: false
  })

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

  // Generic controlled checkbox component with label
  const LabelledCheckbox = ({ name, checked, handleChange }) => {

    const CheckboxComponent = (
      <Checkbox
        checked = {checked}
        onChange = {handleChange}
        inputProps={{ 'aria-label': 'controlled'}}
        id = {name.toLowerCase()}
      />
    )

    return (
      <FormControlLabel
        label = {name}
        control={CheckboxComponent}
      />
    )
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <FormGroup>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={onNameChange}
        />
        <TextField
          type="number"
          id="age"
          label="Age"
          value={age}
          onChange={onAgeChange}
        />
        <TextField
          type="number"
          id="rating"
          label="Member Rating"
          value={rating}
          onChange={onRatingChange}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel component="legend">Activities</FormLabel>
        <LabelledCheckbox
          name="Biking"
          checked={activities.biking}
          handleChange={onActivityChange}
        />
        <LabelledCheckbox
          name="Hiking"
          checked={activities.hiking}
          handleChange={onActivityChange}
        />
        <LabelledCheckbox
          name="Running"
          checked={activities.running}
          handleChange={onActivityChange}
        />
      </FormGroup>
    </Box>
  )
}