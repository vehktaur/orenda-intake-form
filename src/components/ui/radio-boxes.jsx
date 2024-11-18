import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

const RadioBoxes = ({
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
        <div>
          <label
            className={clsx(
              'block h-full cursor-pointer content-center rounded border border-gray-500 text-center text-sm font-semibold ~px-2/4 ~py-2/4 has-[:checked]:bg-violet-200 has-[:checked]:ring-1 has-[:checked]:ring-purple-300',
              className,
            )}
          >
            {option}
            <input
              className='peer'
              hidden
              type='radio'
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
          </label>
        </div>
      ))}
    </>
  );
};
export default RadioBoxes;
