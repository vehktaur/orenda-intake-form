import IMask from '@/components/ui/imask';
import Input from '@/components/ui/input';

const CreditCardDetails = () => {
  const updateCC = (e) => {
    const { value } = e.target;

    if (isNaN(value) || value.length > 19) {
      return true;
    }
  };
  const updateCVV = (e) => {
    const { value } = e.target;

    if (isNaN(value) || value.length > 4) {
      return true;
    }
  };

  const updateZip = (e) => {
    const { value } = e.target;

    if (isNaN(value) || value.length > 5) {
      return true;
    }
  };

  return (
    <section className='fieldset-section'>
      <h3 className='fieldset-section-heading mt-4'>Credit Card Details</h3>
      <p className='~text-sm/base'>
        Your copay/deductible is due at the time of your appointment. We require
        you to keep a credit card on file. You may use a health savings card if
        you have one. If you have any questions please contact us at{' '}
        <a href='tel:+13477077735'>(347) 707-7735</a>.
      </p>

      <Input
        label='Credit Card Number'
        name='credit_card_number'
        onChange={updateCC}
      />
      <IMask
        label='Credit Card Expiration (mm/yy)'
        name='credit_card_expiration'
        mask='99/99'
      />
      <Input label='CVV / Security Code' name='cvv' onChange={updateCVV} />
      <Input
        label='Billing Zip Code'
        name='billing_zip_code'
        onChange={updateZip}
      />
    </section>
  );
};
export default CreditCardDetails;
