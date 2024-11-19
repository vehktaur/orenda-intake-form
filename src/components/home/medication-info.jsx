import Input from '../ui/input';

const MedicationInfo = () => {
  return (
    <fieldset className='fieldset'>
      <legend className='legend'>Medication Info</legend>

      <div className='~space-y-6/8'>
        <div>
          <h3 className='mb-3 font-medium'>
            Specify all medications and supplements you are presently taking and
            for what reason. If you do not take any medications just write
            "none" <span className='text-red-500'>*</span>
          </h3>
          <Input
            hiddenLabel
            name='current_medications_and_supplements'
            required={true}
            multiline
            rows={2}
            variant='outlined'
          />
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            If taking prescription medication, who is your prescribing MD?
            Please include type of MD, name and phone number.
          </h3>
          <Input
            hiddenLabel
            name='prescribing_MD'
            multiline
            rows={2}
            variant='outlined'
          />
        </div>

        <div>
          <h3 className='font-medium'>
            Please list any medication allergies.{' '}
            <span className='text-red-500'>*</span>
          </h3>
          <Input hiddenLabel name='reason_for_visit' required={true} />
        </div>

        <div>
          <h3 className='font-medium'>
            Do you drink alcohol? If so, please describe type, amount and
            frequency. <span className='text-red-500'>*</span>
          </h3>
          <Input hiddenLabel name='alcoholic?' required={true} />
        </div>

        <div>
          <h3 className='font-medium'>
            Do you use recreational drugs? If so, please describe type, amount
            and frequency. <span className='text-red-500'>*</span>
          </h3>
          <Input hiddenLabel name='drug_addict?' required={true} />
        </div>
      </div>
    </fieldset>
  );
};
export default MedicationInfo;
