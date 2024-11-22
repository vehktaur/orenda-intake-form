import Tooltip from '@mui/material/Tooltip';
import IMask from '../ui/imask';
import Input from '../ui/input';
import Radios from '../ui/radios';
import Select from '../ui/select';
import { usStates } from '../../lib/definitions';

const PatientsDetails = () => {
  return (
    <fieldset className='fieldset'>
      <h2 className='legend'>Patient's Details</h2>

      <section className='fieldset-section'>
        <h3 className='fieldset-section-heading'>Personal Information</h3>
        <div className='!mt-4 grid gap-y-6 gap-x-8 sm:grid-cols-2'>
          <Input label='First Name' name='first_name' required={true} />
          <Input label='Last Name' name='last_name' required={true} />
        </div>

        <IMask
          label='Telephone Number'
          name='phone_number'
          mask='(999) 999-9999'
          type='tel'
          required={true}
        />

        <Input
          label='Email Address'
          name='email'
          type='email'
          required={true}
        />

        <Input
          label='Date of Birth (dd/mm/yr)'
          name='date_of_birth'
          required={true}
          type='date'
          sx={{
            bgcolor: '#fff',
          }}
        />
      </section>

      <section className='fieldset-section'>
        <h3 className='fieldset-section-heading'>Address</h3>

        <div className='!mt-4 grid ~gap-4/6'>
          <Input label='Address 1' name='address_1' required={true} />
          <Input
            label='Address 2'
            name='address_2'
            placeholder='Apartment, suite, unit, building, floor, etc (optional)'
          />
          <div className='grid gap-y-5 ~gap-x-8/16 sm:grid-cols-2'>
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
              options={usStates}
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
      </section>

      <section className='fieldset-section'>
        <h3 className='fieldset-section-heading'>More Information</h3>

        <div>
          <h4 className='label'>
            How did you get to hear about Orenda Psychiatry?&nbsp;
            <span className='text-red-500'>*</span>
          </h4>
          <div className='grid sm:grid-cols-2 gap-3'>
            <Radios
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

        <div>
          <h4 className='label'>
            Is this appointment for a minor child?&nbsp;
            <span className='text-red-500'>*</span>
          </h4>
          <div className='flex items-center ~gap-5/7'>
            <Radios
              name='minor_child_appointment'
              options={['Yes', 'No']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h4 className='label flex items-center'>
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
          </h4>
          <div className='flex items-center ~gap-5/7'>
            <Radios
              name='sex_at_birth'
              options={['Male', 'Female']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h4 className='label'>Gender (Optional):</h4>
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
      </section>
    </fieldset>
  );
};
export default PatientsDetails;
