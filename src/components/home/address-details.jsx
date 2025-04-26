import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import { usStates } from '@/layouts/lib/definitions';
import IMask from '../ui/imask';

/* Address Section, Tel & Email */
const AddressDetails = () => {
  return (
    <section className='fieldset-section'>
      <div className='!mt-2 grid ~gap-2/3'>
        <Input label='Address 1' name='address_one' />
        <Input
          label='Address 2'
          name='address_two'
          placeholder='Apartment, suite, unit, building, floor, etc (optional)'
          required={false}
        />
        <div className='grid gap-y-5 ~gap-x-8/16 sm:grid-cols-3'>
          <Input
            label='City'
            name='city'
            errorMsg='City is required'
            size='small'
          />
          <Select label='State' name='state' options={usStates} size='small' />
          <IMask
            label='Zip Code'
            name='zip_code'
            errorMsg='State is required'
            size='small'
            mask={'99999'}
            maskChar=''
          />
        </div>
      </div>
    </section>
  );
};
export default AddressDetails;
