import FileInput from '../ui/file-input';
import Input from '../ui/input';
import RadioBoxes from '../ui/radio-boxes';

const InsuranceAndPayment = () => {
  return (
    <fieldset className='fieldset'>
      <legend className='legend'>Insurance & Payment Info</legend>

      <div className='~space-y-6/8'>
        <div>
          <h3 className='mb-3 font-medium'>
            Insurance Carrier &nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes
              name='insurance_carrier'
              options={[
                'Aetna',
                'United Healthcare',
                'Oxford',
                'Oscar',
                'Cigna',
                'Anthem BCBS',
                'Empire',
                'Compsych',
                'Tricare',
                'Multiplan',
                'Other',
              ]}
              required={true}
            />
          </div>
        </div>

        <Input label='Member ID' name='member_ID' required={true} />

        <div className='max-w-md'>
          <h3 className='mb-3 font-medium'>
            Please upload a picture of your insurance card (FRONT).&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <p>
            <small>
              If you do not have insurance please upload a screenshot of this or
              some other file as you must upload something to proceed.
            </small>
          </p>
          <FileInput name='insurance_card_front' required={true} />
        </div>

        <div className='max-w-md'>
          <h3 className='mb-3 font-medium'>
            Please upload a picture of your insurance card (BACK)&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <p>
            <small>
              If you do not have insurance please upload a screenshot of this or
              some other file as you must upload something to proceed.
            </small>
          </p>
          <FileInput name='insurance_card_back' required={true} />
        </div>

        <Input
          label='Credit Card Number'
          name='credit_card_number'
          required={true}
        />

        <Input
          label='Credit Card Expiration (mm/yy)'
          name='credit_card_expiration'
          required={true}
        />

        <Input
          label='CVC / Security Code'
          name='cvc_security_code'
          required={true}
        />

        <Input label='Billing Zip Code' name='billing_zip_code' required={true} />
      </div>
    </fieldset>
  );
};
export default InsuranceAndPayment;
