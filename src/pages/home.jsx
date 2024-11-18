import { FormProvider, useForm } from 'react-hook-form';
import PatientsDetails from '../components/patients-details';

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
        <h1 className='text-center font-heading font-bold ~text-xl/4xl'>
          Orenda Complete Intake Form
        </h1>

        {/* Address Info */}
        <address className='mt-12 space-y-3 text-sm'>
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
        <p className='mt-6 text-center font-medium'>
          Please fill this out with current information towards your appointment
        </p>

        {/* Form */}
        <section className='mt-12'>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <PatientsDetails />
            </form>
          </FormProvider>
        </section>
      </div>
    </div>
  );
};
export default Home;
