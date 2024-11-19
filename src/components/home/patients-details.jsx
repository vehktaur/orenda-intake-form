import Tooltip from '@mui/material/Tooltip';
import IMask from '../ui/imask';
import Input from '../ui/input';
import RadioBoxes from '../ui/radio-boxes';
import Radios from '../ui/radios';
import Select from '../ui/select';

const PatientsDetails = () => {
  return (
    <fieldset className='fieldset'>
      <legend className='legend'>Patient's Details</legend>

      <div className='~space-y-6/8'>
        <div className='grid gap-x-8 sm:grid-cols-2'>
          <Input label='First Name' name='first_name' required={true} />
          <Input label='Last Name' name='last_name' required={true} />
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            How did you get to hear about Orenda Psychiatry?&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes
              name='referral_source'
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
        </div>

        <Input
          label='Date of Birth (mm/dd/yyy)'
          name='date_of_birth'
          required={true}
        />

        <div>
          <h3 className='mb-3 font-medium'>
            Is this appointment for a minor child?&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <div className='grid grid-cols-2 items-stretch gap-3'>
            <RadioBoxes
              name='minor_child_appointment'
              options={['Yes', 'No']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Sex assigned at birth:&nbsp;<span className='text-red-500'>*</span>
            <Tooltip
              title='This information is necessary for medical reasons related to psychiatric medications and treatment planning. This information will remain confidential.'
              placement='top'
            >
              <button
                type='button'
                className='ml-2 size-5 rounded-full bg-gray-400 text-[0.75em] leading-none text-white'
              >
                ?
              </button>
            </Tooltip>
          </h3>
          <div className='grid gap-3'>
            <Radios
              name='sex_at_birth'
              options={['Male', 'Female']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='mb-3 font-medium'>Gender (optional):</h3>
          <div className='grid gap-3'>
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
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Address&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <div className='grid ~gap-4/6'>
            <Input
              label='Street Address'
              name='street_address'
              required={true}
            />
            <Input
              label='Address - Line 2'
              name='street-address_2'
              placeholder='Apartment, suite, unit, building, floor, etc (optional)'
            />
            <div className='grid gap-x-5 gap-y-5 sm:grid-cols-3'>
              <Input
                label='City'
                name='city'
                required={true}
                errorMsg='City is required'
                size='small'
              />
              <Select
                label='State'
                name='state'
                options={['State']}
                required={true}
                size='small'
              />
              <Input
                label='Zip Code'
                name='zip_code'
                type='number'
                required={true}
                errorMsg='State is required'
                size='small'
              />
            </div>
          </div>
        </div>

        <Input
          label='Email Address'
          name='email'
          type='email'
          required={true}
        />

        <IMask
          label='Telephone Number'
          name='phone_number'
          type='tel'
          required={true}
        />
      </div>
    </fieldset>
  );
};
export default PatientsDetails;
