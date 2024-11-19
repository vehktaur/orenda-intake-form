import { useFormContext } from 'react-hook-form';
import { LuPlus } from 'react-icons/lu';

const FileInput = ({ name, disabled, required, errorMsg, validations }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={name}
        className='flex items-center gap-2 rounded-md border border-dashed border-gray-800 px-4 py-4 text-[#333]'
      >
        <LuPlus /> Select a file
      </label>

      {errors?.[name]?.message && (
        <p className='mt-2 text-sm text-red-500'>{errors?.[name].message}</p>
      )}

      <small className='text-gray-500'>
        Acceptable file formats: .doc, .docx, .pdf, .pptx, .jpg, .jpeg, .png,
        .xlsx, .txt and .gif • 20MB max
      </small>

      {/* Hidden File Input */}
      <input
        hidden
        id={name}
        type='file'
        {...register(name, {
          disabled: disabled,
          required: {
            value: required,
            message: errorMsg || 'This field is required',
          },
          validate: validations,
        })}
      />
    </div>
  );
};
export default FileInput;
