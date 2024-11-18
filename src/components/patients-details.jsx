import Input from './ui/input';
import RadioBoxes from './ui/radio-boxes';
import Radios from './ui/radios';
import Select from './ui/select';

const PatientsDetails = () => {
  return (
    <fieldset className='fieldset'>
      <h3 className='font-heading font-semibold ~text-lg/xl ~mb-4/6'>
        Patient's Details
      </h3>
      <div className='flex flex-col items-start justify-between gap-5 sm:flex-row'>
        <Input label='First Name' name='firstName' required={true} />
        <Input label='Last Name' name='lastName' required={true} />
      </div>

      <h4 className='mt-8'>
        How did you get to hear about Orenda Psychiatry?{' '}
        <span className='text-red-500'>*</span>
      </h4>
      <div className='mt-3 grid grid-cols-2 items-stretch gap-3'>
        <RadioBoxes
          name='referralSource'
          options={[
            'Google and other search engines',
            'Psychology today',
            'Zocdoc',
            'Referral from a colleague or physician',
            'Other',
          ]}
          required={true}
        />
      </div>

      <div className='mt-6'>
        <Input
          label='Date of Birth (mm/dd/yyy)'
          name='dateOfBirth'
          required={true}
        />
      </div>

      <h4 className='mt-8'>
        Is this appointment for a minor child?{' '}
        <span className='text-red-500'>*</span>
      </h4>
      <div className='mt-3 grid grid-cols-2 items-stretch gap-3'>
        <RadioBoxes
          name='minorChildAppointment'
          options={['Yes', 'No']}
          required={true}
        />
      </div>

      <h4 className='mt-8'>
        Sex assigned at birth: <span className='text-red-500'>*</span>
      </h4>
      <div className='mt-3 grid gap-3'>
        <Radios
          name='sexAtBirth'
          options={['Male', 'Female']}
          required={true}
        />
      </div>

      <h4 className='mt-8'>Gender (optional):</h4>
      <div className='mt-3 grid gap-3'>
        <Radios
          name='gender'
          options={[
            'Woman',
            'Man',
            'Cisgender',
            'Transgender',
            'Non-binary',
            'Genderqueer',
            'Genderfluid',
            'Agender',
            'Unsure',
            'Prefer not to answer',
            'Not Listed',
          ]}
        />
      </div>

      <h4 className='mt-8'>
        Address <span className='text-red-500'>*</span>
      </h4>
      <div className='grid gap-3'>
        <Input label='Street Address' name='streetAddress' required={true} />
        <Input
          label='Address - Line 2'
          name='streetAddress2'
          placeholder='Apartment, suite, unit, building, floor, etc (optional)'
        />
        <div className='flex flex-col items-start justify-between gap-5 sm:flex-row'>
          <Input label='City' name='city' required={true} />
          <Select
            label='State'
            name='state'
            options={['State']}
            required={true}
          />
          <Input label='Zip Code' name='zipCode' required={true} />
        </div>

        <Input
          label='Email Address'
          name='email'
          type='email'
          required={true}
        />

        <Input
          label='Telephone Number'
          name='phoneNumber'
          type='tel'
          required={true}
        />
      </div>
    </fieldset>
  );
};
export default PatientsDetails;
