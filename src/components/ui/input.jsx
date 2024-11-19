import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const Input = ({
  name,
  type,
  id,
  disabled,
  required,
  variant,
  errorMsg,
  placeholder,
  pattern,
  minLength,
  validations,
  ...inputProps
}) => {
  return (
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
          type={type || 'text'}
          helperText={error ? error.message : null}
          id={id || name}
          error={!!error}
          variant={variant || 'standard'}
          fullWidth
          placeholder={placeholder}
          {...inputProps}
        />
      )}
    />
  );
};
export default Input;
