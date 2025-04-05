import { cn } from '@/lib/utils';
import { SignatureMaker } from '@docuseal/signature-maker-react';
import { Controller, useFormContext } from 'react-hook-form';

const Signature = ({
  name,
  disabled,
  required = true,
  errorMsg,
  className,
}) => {
  const { watch } = useFormContext();

  

  return (
    <Controller
      name={name}
      rules={{ disabled, required: { value: required, message: errorMsg } }}
      render={({ field, fieldState: { error } }) => (
        <SignatureMaker
          onChange={(signature) => {
            field.onChange(signature.blob);
          }}
          onClear={() => field.onChange(null)}
          withSubmit={false}
          withColorSelect={false}
          withUpload={false}
          withDrawn={false}
          textInputClass='px-4 py-2 outline outline-[1.65px] transition-all duration-300 rounded w-full max-w-sm mb-2 outline-zinc-400 focus:outline-zinc-700'
          canvasClass='w-full h-auto border rounded border-dashed'
          className={cn(className)}
        />
      )}
    />
  );
};
export default Signature;
