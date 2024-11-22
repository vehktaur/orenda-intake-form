import { FormProvider, useForm } from 'react-hook-form';
import PatientsDetails from '../components/home/patients-details';
import MentalHealthCareInfo from '../components/home/mental-health-care-info';
import MedicationInfo from '../components/home/medication-info';
import MentalIllnessHistory from '../components/home/mental-illness-history';
import LifestyleAndHealth from '../components/home/lifestyle-and-health';
import InsuranceAndPayment from '../components/home/insurance_and_payment';
import { Link } from 'react-router-dom';

const Home = () => {
  const methods = useForm();

  const { handleSubmit, register, watch } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  const acceptedTerms = watch('terms_and_conditions')



  return (
    <div className='padding-inline py-16'>
      <div className='mx-auto max-w-[59.4rem]'>
        {/* Heading */}
        <h1 className='text-center font-heading font-bold ~text-3xl/[2.625rem]'>
          Orenda Intake Form
        </h1>

        {/* Address Info */}
        <address className='mb-12 mt-6 space-y-3 text-center font-heading text-xs font-medium not-italic'>
          <p>Orenda Psychiatry</p>
          <p>80 5th Ave. New York, NY 10011 Suite #903-10</p>
          <p>75 Arlington Street, Ste 500 Boston, MA 02116.</p>{' '}
          <p>
            Mailing Address: <br /> 347 Fifth Ave Suite 1402-235 New York, NY
            10016
          </p>
          <p>
            {' '}
            Call: <a href='tel:+13477077735'>(347) 707-7735</a>
          </p>
        </address>

        {/* Instruction */}
        <p className='text-center font-semibold ~text-sm/base'>
          Please fill this out with current information towards your appointment
        </p>

        {/* Form */}
        <section className='mt-12 ~text-sm/base'>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='~space-y-8/12'>
                <PatientsDetails />

                <MentalHealthCareInfo />

                <MedicationInfo />

                <MentalIllnessHistory />

                <LifestyleAndHealth />

                <InsuranceAndPayment />
              </div>

              <div className='~mt-6/8 ~px-2/12'>
                <div className='flex items-center gap-4 ~text-sm/base'>
                  <input
                    className='~size-4/5'
                    id='terms_and_conditions'
                    type='checkbox'
                    value='agreed-to-terms'
                    {...register('terms_and_conditions', {
                      required: 'This field is required',
                    })}
                  />
                  <label htmlFor='terms_and_conditions'>
                    I confirm that I have read and agreed to Orenda's{' '}
                    <Link
                      className='font-medium underline-offset-2 hover:underline'
                      to='/policy'
                    >
                      Terms of Use, and Practice Policy
                    </Link>
                    .&nbsp;
                    <span className='text-red-500'>*</span>
                  </label>
                </div>
              </div>

              <button
                disabled={!acceptedTerms}
                className='mx-auto block w-full max-w-80 rounded-full border border-black px-4 py-2 transition-colors duration-300 ~text-sm/base ~mt-10/12 hover:bg-[#666] hover:text-white disabled:pointer-events-none disabled:touch-none disabled:border-gray-400 disabled:text-gray-500'
              >
                Submit Form
              </button>
            </form>
          </FormProvider>
        </section>
      </div>
    </div>
  );
};
export default Home;
