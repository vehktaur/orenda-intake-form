import { useFormContext } from 'react-hook-form';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { LuPlus } from 'react-icons/lu';
import { TbTrashXFilled } from 'react-icons/tb';

const FileInput = ({ name, disabled, required, errorMsg, validations }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const file = watch(name)?.[0];

  return (
    <div>
      <div className='relative'>
        <label
          htmlFor={name}
          className='flex items-center gap-2 rounded-md border border-dashed border-gray-800 px-4 py-4 text-[#333]'
        >
          {file ? (
            <IoCheckmarkCircleOutline className='size-5 flex-shrink-0 text-green-500' />
          ) : (
            <LuPlus className='flex-shrink-0' />
          )}{' '}
          <p className='truncate ~xs/md:~w-40/80'>
            {file?.name || 'Select a file'}
          </p>
        </label>

        {file && (
          <button
            type='button'
            onClick={() => setValue(name, '')}
            className='absolute inset-y-0 right-6 content-center'
          >
            <TbTrashXFilled className='size-5' />
          </button>
        )}
      </div>

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
