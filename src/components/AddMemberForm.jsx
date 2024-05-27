import { useState } from "react"
import axios from "axios";
import { 
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  FormLabel,
  Button
} from "@mui/material"

const addMember = async memberData => {
  try {
    const res = await axios.post('http://localhost:4444/members', memberData);

  } catch(err) {
    console.log('ERROR', err)
  }
}

export default function AddMemberForm({}) {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [rating, setRating] = useState("")
  const [activities, setActivities] = useState({
    Biking: false,
    Running: false,
    Hiking: false
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
        id = {name}
      />
    )

    return (
      <FormControlLabel
        label = {name}
        control={CheckboxComponent}
      />
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Get truthy activity keys and uppercase the name
    const selectedActivities = Object.keys(activities).filter(key => !!activities[key])

    addMember({ name, age, rating, selectedActivities })
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
        { Object.keys(activities).map(name => (
          <LabelledCheckbox
            name={name}
            checked={activities[name]}
            handleChange={onActivityChange}

          />
        ))}
      </FormGroup>
      <Button type="submit" onClick={handleSubmit}>Add new member</Button>
    </Box>
  )
}