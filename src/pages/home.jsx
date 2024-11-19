import { FormProvider, useForm } from 'react-hook-form';
import PatientsDetails from '../components/home/patients-details';
import MentalHealthCareInfo from '../components/home/mental-health-care-info';
import ConditionalMentalHealthInfo from '../components/home/conditional-mental-health-info';
import MedicationInfo from '../components/home/medication-info';
import MentalIllnessHistory from '../components/home/mental-illness-history';
import LifestyleAndHealth from '../components/home/lifestyle-and-health';
import InsuranceAndCredit from '../components/home/insurance_and_credit';

const Home = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

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
        <address className='space-y-3 text-sm ~my-10/12'>
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

                <InsuranceAndCredit />
              </div>
            </form>
          </FormProvider>
        </section>
      </div>
    </div>
  );
};
export default Home;
