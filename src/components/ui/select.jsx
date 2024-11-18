import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from '@mui/material';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';

const Select = ({
  label,
  name,
  id,
  options,
  disabled,
  required,
  errorMsg,
  placeholder,
  pattern,
  minLength,
  validations,
}) => {
  return (
    <div>
      <Controller
        name={name}
        rules={{
          disabled: disabled,
          required: {
            value: required,
            message: errorMsg || 'This field is required',
          },
          pattern,
          minLength,
          validate: validations,
        }}
        render={({ field, fieldState: { error } }) => (
          <FormControl fullWidth>
            <InputLabel id={id || name}>{options[0]}</InputLabel>
            <MUISelect
              {...field}
              required={required}
              helperText={error ? error.message : null}
              id={id || name}
              label={label}
              error={!!error}
              variant='standard'
              fullWidth
              placeholder={placeholder}
              slotProps={{
                root: (state) => ({
                  className: `w-full border-green-500'`
                }),
              }}
            >
              {options.map((option) => (
                <MenuItem value={option}>{option}</MenuItem>
              ))}
            </MUISelect>
          </FormControl>
        )}
      />
    </div>
  );
};
export default Select;
