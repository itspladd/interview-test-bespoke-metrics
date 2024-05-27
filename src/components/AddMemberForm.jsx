import { 
  Box,
  FormGroup,
  TextField,
  FormLabel,
  Button
} from "@mui/material"

import { addMember } from "../api"
import useMemberState from "../hooks/useMemberState"

import LabelledCheckbox from "./LabelledCheckbox"

export default function AddMemberForm({ setMembers }) {

  const {
    member,
    onNameChange,
    onAgeChange,
    onRatingChange,
    onActivityChange
  } = useMemberState({})

  const { name, age, rating, activities } = member
  // Generic controlled checkbox component with label


  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, age, rating, activities } = member

    // Get truthy activity keys and uppercase the name
    const selectedActivities = Object.keys(activities).filter(key => !!activities[key])

    addMember({ name, age, rating, activities: selectedActivities }, setMembers)
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