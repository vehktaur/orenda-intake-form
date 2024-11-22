import Input from '../ui/input';
import Radios from '../ui/radios';

const MentalIllnessHistory = () => {
  return (
    <fieldset className='fieldset'>
      <h2 className='legend'>Mental Illness History</h2>

      <section className='fieldset-section'>
        <div>
          <h3 className='label'>
            Do you have current suicidal thoughts? If you have current suicidal
            thoughts, please immediately contact 9 1 1 or go to your nearest
            emergency room; or contact the National Suicide Prevention Hotline
            at: 1-800-273-8255.&nbsp;<span className='text-red-500'>*</span>
          </h3>
          <div className='flex items-center ~gap-5/7'>
            <Radios
              name='suicidal_thoughts?'
              options={['Yes', 'No']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='label'>
            Have you ever attempted suicide?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='flex items-center ~gap-5/7'>
            <Radios
              name='attempted_suicide??'
              options={['Yes', 'No']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='label'>
            Do you have thoughts or urges to harm others?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='flex items-center ~gap-5/7'>
            <Radios
              name='harmful_to_others?'
              options={['Yes', 'No']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='label'>
            Have you ever been hospitalized for a psychiatric issue?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='flex items-center ~gap-5/7'>
            <Radios
              name='previously_hospitalized?'
              options={['Yes', 'No']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='label'>
            Do you have any weapons or guns at home?&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <div className='flex items-center ~gap-5/7'>
            <Radios
              name='have_weapons_at_home?'
              options={['Yes', 'No']}
              required={true}
            />
          </div>
        </div>

        <div>
          <h3 className='label'>
            Is there a history of mental illness in your family? If so, please
            provide additional information.&nbsp;
            <span className='text-red-500'>*</span>
          </h3>
          <Input
            hiddenLabel
            name='family_history_of_mental_illness'
            required={true}
            multiline
            rows={2}
            variant='outlined'
          />
        </div>
      </section>
    </fieldset>
  );
};
export default MentalIllnessHistory;
