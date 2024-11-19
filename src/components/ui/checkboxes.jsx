import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

const Checkboxes = ({
  name,
  options,
  className,
  disabled,
  required,
  errorMsg,
  pattern,
  minLength,
  validations,
}) => {
  const { register } = useFormContext();

  return (
    <>
      {options.map((option) => (
        <div className={clsx('flex items-center gap-2 text-sm', className)}>
          <input
            id={option}
            className='peer'
            type='checkbox'
            value={option}
            {...register(name, {
              disabled: disabled,
              required: {
                value: required,
                message: errorMsg || 'This field is required',
              },
              pattern,
              minLength,
              validate: validations,
            })}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
};
export default Checkboxes;
