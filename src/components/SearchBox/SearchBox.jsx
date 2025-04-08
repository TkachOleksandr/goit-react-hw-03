import { Box, Label, Input } from './SearchBox.styled';

function SearchBox({ value, onChange }) {
  return (
    <Box>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Label>
    </Box>
  );
}

export default SearchBox;