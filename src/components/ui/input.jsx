import { TextField } from '@mui/material';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

const Input = ({
  label,
  name,
  type,
  id,
  disabled,
  required,
  errorMsg,
  placeholder,
  pattern,
  minLength,
  validations,
}) => {
  const [inputType, toggleInputType] = useState(type || 'text');

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
          <TextField
            {...field}
            required={required}
            helperText={error ? error.message : null}
            id={id || name}
            label={label}
            error={!!error}
            variant='standard'
            fullWidth
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};
export default Input;
