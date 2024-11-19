import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from '@mui/material';
import { Controller } from 'react-hook-form';

const Select = ({
  label,
  name,
  id,
  options,
  disabled,
  required,
  variant,
  errorMsg,
  placeholder,
  pattern,
  minLength,
  validations,
  ...selectProps
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
              helperText={error ? error.message : ''}
              id={id || name}
              label={label}
              error={!!error}
              variant={variant || 'standard'}
              fullWidth
              placeholder={placeholder}
              {...selectProps}
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
