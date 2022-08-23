import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Sort() {
  return (
    <FormControl>
      <FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="other" control={<Radio />} label="None" defaultChecked />
        <FormControlLabel value="female" control={<Radio />} label="Lowest Price" />
        <FormControlLabel value="male" control={<Radio />} label="Highest Price" />
        <FormControlLabel value="other" control={<Radio />} label="A-Z" />
        <FormControlLabel value="other" control={<Radio />} label="Z-A" />

      </RadioGroup>
    </FormControl>
  );
}