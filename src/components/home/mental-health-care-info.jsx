import ConditionalMentalHealthInfo from '../../components/home/conditional-mental-health-info';
import Input from '../ui/input';
import SelectCheckboxes from '../ui/select-checkboxes';

const MentalHealthCareInfo = () => {
  return (
    <fieldset className='fieldset'>
      <h2 className='legend'>Mental Health Care Info</h2>

      <section className='fieldset-section'>
        <div>
          <h3 className='label'>
            What brings you to Orenda Psychiatry at this time? Is there
            something specific, such as a particular event?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <Input
            hiddenLabel
            name='reason_for_visit'
            required={true}
            multiline
            rows={3}
            variant='outlined'
          />
        </div>

        <div>
          <h3 className='label'>
            Tell us more about the type of mental health care that you are
            seeking:&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <div className='grid gap-3'>
            <SelectCheckboxes
              name='mental_health_type'
              options={[
                'Psychiatric Services (Medication Management)',
                'Therapy',
                'Both',
                "I'm not sure",
              ]}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='label'>
            Have you seen a mental health professional before? &nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='grid gap-3'>
            <SelectCheckboxes
              name='seen_a_professional_before'
              options={[
                'Yes, for therapy only.',
                'Yes, a psychiatrist or psychiatric NP for medication management.',
                'I have experience with both therapy and psychotropic medication.',
                'No, this is my first encounter with a mental health professional.',
              ]}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='label'>
            Have you ever been diagnosed or experienced the following
            conditions?&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <div className='grid gap-3'>
            <SelectCheckboxes
              name='diagnosed_conditions'
              options={[
                'Depression',
                'Anxiety',
                'PTSD',
                'Panic disorder',
                'Social anxiety',
                'Psychosis',
                'Bipolar disorder',
                'Schizophrenia',
                'Anorexia',
                'Bulimia',
                'Eating disorder',
                'Substance Use Disorder',
                'Suicide attempt',
                'Self-harming behavior such as cutting',
                'Serotonin syndrome',
                'Exposure to violence',
                'None apply',
              ]}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='label'>
            Please check any of the following you have experienced in the past
            six months&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <div className='grid gap-3'>
            <SelectCheckboxes
              name='recently_experienced_conditions'
              options={[
                'Increased appetite',
                'Decreased appetite',
                'Trouble concentrating',
                'Difficulty sleeping',
                'Excessive sleep',
                'Low motivation',
                'Isolation from others',
                'Fatigue/low energy',
                'Low self-esteem',
                'Depressed mood',
                'Tearful or crying spells',
                'Anxiety',
                'Fear',
                'Hopelessness',
                'Panic',
                'Other',
                'None apply',
              ]}
              required={true}
            />
          </div>
        </div>

        <ConditionalMentalHealthInfo />
      </section>
    </fieldset>
  );
};
export default MentalHealthCareInfo;
