import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {calendar, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Calander: FC = memo(() => {
  const {imageSrc, CalanderItems} = calendar;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Calander}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!imageSrc})}>
        {!!CalanderItems && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-30 w-30 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="calander-image" layout="fill" objectFit="cover" src={imageSrc} />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
});

Calander.displayName = 'About';
export default Calander;
