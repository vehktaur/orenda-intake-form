import FileInput from '../ui/file-input';
import IMask from '../ui/imask';
import Input from '../ui/input';
import Radios from '../ui/radios';

const InsuranceAndPayment = () => {
  return (
    <fieldset className='fieldset ~text-sm/base'>
      <h2 className='legend'>Insurance & Payment Info</h2>

      <section className='fieldset-section'>
        <div>
          <h3 className='label'>
            Insurance Carrier &nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='grid gap-3'>
            <Radios
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
      </section>
      <section className='fieldset-section'>
        <Input label='Member ID' name='member_ID' required={true} />
        <div>
          <h3 className='label'>
            Please upload a picture of your insurance card&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <p className='text-sm'>
            If you do not have insurance please upload a screenshot of this or
            some other file as you must upload something to proceed.
          </p>
        </div>
        <div className='grid ~gap-4/6'>
          <FileInput
            label='Front'
            name='insurance_card_front'
            required={true}
          />
          <FileInput label='Back' name='insurance_card_back' required={true} />
        </div>
      </section>
      <section className='fieldset-section'>
        <h3 className='fieldset-section-heading'>Credit Card Details</h3>
        <p className='font-medium'>
          Your copay/deductible is due at the time of your appointment. We
          require you to keep a credit card on file. You may use a health
          savings card if you have one. If you have any questions please contact
          us at <a href='tel:+13477077735'>(347) 707-7735</a>.
        </p>

        <Input
          label='Credit Card Number'
          name='credit_card_number'
          required={true}
        />
        <IMask
          label='Credit Card Expiration (mm/yy)'
          name='credit_card_expiration'
          mask='99/99'
          required={true}
        />
        <Input
          label='CVC / Security Code'
          name='cvc_security_code'
          required={true}
        />
        <Input
          label='Billing Zip Code'
          name='billing_zip_code'
          required={true}
        />
        <p className='!mt-16 font-semibold'>
          Please CALL or TEXT (347) 707-7735 to communicate with an Orenda
          Psychiatry team member. We DO NOT use email or communicate via HEADWAY
          messaging system for schedule changes, medication questions or any
          matter that needs immediate assistance. Save our main line in your
          phone as Orenda Psychiatry. For more information visit our website{' '}
          <a target='_blank' href='https://www.orendapsych.com/'>
            https://www.orendapsych.com/
          </a>
        </p>
      </section>
    </fieldset>
  );
};
export default InsuranceAndPayment;
