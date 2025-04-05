import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Terms from './terms-of-use';
import PracticePolicy from './practice-policy';
import { ArrowDown, XIcon } from 'lucide-react';
import { useRef } from 'react';

const PolicyDialog = ({ children, ...props }) => {
  const content = useRef();

  const scrollToEnd = () => {
    const dialogContent = content.current;
    if (dialogContent) {
      dialogContent.scrollTo({
        top: dialogContent.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AlertDialog {...props}>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
        <AlertDialogContent ref={content} className='~px-5/10 ~pt-4/8 ~pb-8/12'>
          <AlertDialogCancel className='ml-auto size-8 rounded-full p-0 [&_svg]:size-5 mb-4 sm:mb-0'>
            <XIcon className='size-8' />
          </AlertDialogCancel>
          <AlertDialogHeader>
            <AlertDialogTitle className='~mb-0/6 text-center font-heading font-bold ~text-2xl/4xl'>
              Terms of Use & Practice Policy
            </AlertDialogTitle>
            <AlertDialogDescription className='~mb-0/6 text-center'>
              Welcome to Orenda Psychiatry. Your agreement to the following
              terms and conditions is required for you/your child to receive
              professional services from us.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div>
            <Terms />

            <PracticePolicy />
          </div>

          <AlertDialogFooter className='mt-10'>
            <AlertDialogCancel>Go to Submit</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {props.open && (
        <div className='pointer-events-auto fixed bottom-10 right-1/2 z-[51] flex w-[calc(100%-2rem)] max-w-3xl translate-x-1/2 items-center justify-end pe-4'>
          <button
            onClick={scrollToEnd}
            type='button'
            className='animate-bounce cursor-pointer'
          >
            <ArrowDown className='size-8' />
          </button>
        </div>
      )}
    </>
  );
};

export default PolicyDialog;
