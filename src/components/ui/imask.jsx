import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

const IMask = ({
  label,
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
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <InputMask
          mask='(999) 999-9999'
          onChange={onChange}
          value={value}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              required={required}
              type={type || 'text'}
              helperText={error ? error.message : null}
              id={id || name}
              label={label}
              error={!!error}
              variant={variant || 'standard'}
              fullWidth
              placeholder={placeholder}
            />
          )}
        </InputMask>
      )}
    />
  );
};
export default IMask;
