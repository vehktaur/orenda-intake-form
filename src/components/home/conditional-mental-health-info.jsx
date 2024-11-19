import { useFormContext } from 'react-hook-form';
import RadioBoxes from '../ui/radio-boxes';
import { useMemo } from 'react';

const ConditionalMentalHealthInfo = () => {
  const { watch } = useFormContext();

  const showLastInput = useMemo(() => {
    const conditions = [
      watch('thoughts_and_behaviours_worsened_over_time') === 'Yes',
      watch('has_intrusive_thoughts') === 'Yes',
      watch('has_repetitive_behaviours') === 'Yes',
    ];

    return conditions.filter(Boolean).length >= 2;
  }, [
    watch('thoughts_and_behaviours_worsened_over_time'),
    watch('has_intrusive_thoughts'),
    watch('has_repetitive_behaviours'),
  ]);

  return (
    <fieldset className='fieldset'>
      <div className='~space-y-6/8'>
        <div>
          <h3 className='mb-3 font-medium'>
            I have frequent thoughts, urges, or images that I don’t want to
            have. (For example, intrusive thoughts, which are ideas or images
            that come to mind uninvited and unwanted)
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes name='has_intrusive_thoughts' options={['Yes', 'No']} />
          </div>
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            I do repetitive behaviors such as handwashing or cleaning, avoiding
            certain people or things, asking people for reassurance, repeatedly
            doing things in my mind to feel better or to prevent something bad
            from happening, such as reviewing past events.
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes
              name='has_repetitive_behaviours'
              options={['Yes', 'No']}
            />
          </div>
        </div>

        <div>
          <h3 className='mb-3 font-medium'>
            Over the last month, these obsessive thoughts and/or compulsive
            behaviors have resulted in: noticeable distress or interfered with
            my functioning at home, work, school, socially, in my relationships,
            or in any other significant manner, and/or consumed more than an
            hour of my time daily?
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes
              name='thoughts_and_behaviours_worsened_over_time'
              options={['Yes', 'No / N/A']}
            />
          </div>
        </div>

        {showLastInput && (
          <div>
            <h3 className='mb-3 font-medium'>
              If you answered 'yes' to two or more of these questions, you may
              benefit from specialized treatment for OCD. Orenda has a referral
              partnership with NOCD, a practice specializing in OCD therapy.
              Would you like Orenda to send a referral to NOCD on your behalf?
            </h3>
            <div className='grid grid-cols-2 gap-3'>
              <RadioBoxes name='refer_to_NOCD?' options={['Yes', 'No']} />
            </div>
          </div>
        )}

        <hr className='!my-12 border-[#666]' />

        <div>
          <h3 className='mb-3 font-medium'>
            Our psychiatric providers stay up to date with the evolving
            landscape of the field, incorporating the latest research and
            innovative treatments. Some of our providers offer at-home
            ketamine-assisted therapy for patients who suffer from
            treatment-resistant mental health issues and meet the necessary
            criteria. If you are interested in learning more about at-home
            ketamine therapy, please let us know here:
          </h3>
          <div className='grid grid-cols-2 gap-3'>
            <RadioBoxes
              name='has_interest_in_ketamine_therapy'
              options={[
                'Yes, I am interested in learning about ketamine therapy',
                "No, I'm not open to ketamine therapy",
              ]}
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};
export default ConditionalMentalHealthInfo;
