import Checkboxes from '../ui/checkboxes';
import IMask from '../ui/imask';
import Input from '../ui/input';
import RadioBoxes from '../ui/radio-boxes';

const LifestyleAndHealth = () => {
  return (
    <fieldset className='fieldset'>
      <legend className='legend'>Lifestyle & Health</legend>

      <div className='~space-y-6/8'>
        <div>
          <h3 className='mb-3 font-medium'>
            If you are in a relationship, please describe the nature of the
            relationship and months or years together.&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <Input
            hiddenLabel
            name='relationship_status'
            required={true}
            multiline
            rows={2}
            variant='outlined'
          />
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Describe your current living situation. Do you live alone, with
            others. With family, etc...&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <Input
            hiddenLabel
            name='current_living_situation'
            required={true}
            multiline
            rows={2}
            variant='outlined'
          />
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            What is your level of education? Highest grade/degree and type of
            degree.&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <Input
            hiddenLabel
            name='level_of_education'
            required={true}
            multiline
            rows={2}
            variant='outlined'
          />
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            What is your current occupation? What do you do? How long have you
            been doing it?&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <Input
            hiddenLabel
            name='occupation_status'
            required={true}
            multiline
            rows={2}
            variant='outlined'
          />
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Personal medical history; please check all that apply.&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='grid gap-3'>
            <Checkboxes
              name='personal_medical_history'
              options={[
                'None apply',
                'Kidney problems',
                'Liver problems',
                'Seizure disorder or epilepsy',
                'History of family history of QT prolongation',
                'Glaucoma',
                'Asthma',
                'Diabetes',
                'High blood pressure',
                'High cholesterol',
                'Heart disease',
                'HIV',
                'Cancer or history of cancer',
                'Thyroid or hormone condition',
                'Migraine headaches',
                'Headaches',
                'Head trauma/loss of consciousness/Traumatic brain injury',
                'Other',
              ]}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Do you have any hearing impairments that would affect your
            participation in sessions or require accommodations?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes
              name='hearing_impairments?'
              options={[
                'No, I do not have any hearing impairments.',
                'Yes, I have a hearing impairment that does require accommodations.',
              ]}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Are you pregnant or breastfeeding?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes
              name='pregnant_or_breastfeeding?'
              options={['Yes', 'No']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Have you had a physical in the last two years?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes
              name='recent_physical?'
              options={[
                'Yes, all results were normal',
                'Yes, and there were abnormal results',
                'No',
              ]}
              required={true}
            />
          </div>
        </div>

        <Input
          label='What is your current weight?'
          name='current_weight'
          required={true}
        />

        <Input
          label='What is your height?'
          name='current_height'
          required={true}
        />

        <div>
          <h3 className='mb-3 font-medium'>
            What else would you like for your provider to know??
          </h3>
          <Input
            hiddenLabel
            name='extra_info_for_provider'
            multiline
            rows={2}
            variant='outlined'
          />
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Who would you like us to contact in the event of an emergency? What
            is this person's relationship to you?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <Input
            hiddenLabel
            name='emergency_contact'
            required={true}
            variant='outlined'
          />
        </div>

        <IMask
          label='Emergency Contact Phone Number'
          name='emergency_contact_number'
          type='tel'
          required={true}
        />
      </div>
    </fieldset>
  );
};
export default LifestyleAndHealth;
