import { FormProvider, useForm } from 'react-hook-form';
import PatientsDetails from '../components/home/patients-details';
import MentalHealthCareInfo from '../components/home/mental-health-care-info';
import ConditionalMentalHealthInfo from '../components/home/conditional-mental-health-info';
import MedicationInfo from '../components/home/medication-info';
import MentalIllnessHistory from '../components/home/mental-illness-history';
import LifestyleAndHealth from '../components/home/lifestyle-and-health';
import InsuranceAndPayment from '../components/home/insurance_and_payment';

const Home = () => {
  const methods = useForm();

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='padding-inline py-16'>
      <div className='mx-auto max-w-3xl'>
        {/* Heading */}
        <h1 className='text-center font-heading font-bold ~text-2xl/4xl'>
          Orenda Complete Intake Form
        </h1>

        {/* Address Info */}
        <address className='space-y-3 text-center font-medium font-heading text-xs not-italic ~my-10/12'>
          <p>Orenda Psychiatry</p>
          <p>80 5th Ave. New York, NY 10011 Suite #903-10</p>
          <p>75 Arlington Street, Ste 500 Boston, MA 02116.</p>{' '}
          <p>
            Mailing Address: <br /> 347 Fifth Ave Suite 1402-235 New York, NY
            10016
          </p>
          <p>(347) 707-7735</p>
        </address>

        {/* Instruction */}
        <p className='text-center font-medium ~text-sm/base'>
          Please fill this out with current information towards your appointment
        </p>

        {/* Form */}
        <section className='mt-12 ~text-sm/base'>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='~space-y-8/12'>
                <PatientsDetails />

                <MentalHealthCareInfo />

                <ConditionalMentalHealthInfo />

                <MedicationInfo />

                <MentalIllnessHistory />

                <LifestyleAndHealth />

                <InsuranceAndPayment />
              </div>

              <div className='py-5 ~px-2/5'>
                <div className='flex items-center gap-4 ~text-sm/base'>
                  <input
                    className='~size-4/6'
                    id='terms_and_conditions'
                    type='checkbox'
                    value='agreed-to-terms'
                    {...register('terms_and_conditions', {
                      required: 'This field is required',
                    })}
                  />
                  <label htmlFor='terms_and_conditions'>
                    I confirm that I have read and agreed to Orenda's Terms of
                    Use, Privacy Policy, and Practice Guidelines.&nbsp;
                    <span className='text-red-500'>*</span>
                  </label>
                </div>
              </div>

              <button
                disabled={!isValid}
                className='mx-auto mt-10 block w-full max-w-80 rounded-full border border-black px-4 py-2 transition-colors duration-300 ~text-sm/base hover:bg-[#666] hover:text-white disabled:pointer-events-none disabled:touch-none disabled:border-gray-400 disabled:text-gray-500'
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
