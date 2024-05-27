import { 
  Checkbox,
  FormControlLabel,
} from "@mui/material"

export default function LabelledCheckbox ({ name, checked, handleChange }) {

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