import {ChevronDownIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useMemo} from 'react';
import {FaGithub, FaInstagram,FaLinkedin, FaSpotify, FaStackOverflow} from 'react-icons/fa'

import {heroData, SectionId} from '../../data/data';
import IconLink from '../IconLink';
import Section from '../Layout/Section';


const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  const githubIcon = useMemo(() => (<FaGithub size={30} />), [])
  const stackoverflowIcon = useMemo(() => (<FaStackOverflow size={30} />), [])
  const linkedinIcon = useMemo(() => (<FaLinkedin size={30} />), [])
  const instagramIcon = useMemo(() => (<FaInstagram size={30} />), [])
  const spotifyIcon = useMemo(() => (<FaSpotify size={30} />), [])

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <IconLink iconName={githubIcon} label='Github' link='https://github.com/AsafMeizner' />
              <IconLink iconName={stackoverflowIcon} label='StackOverFlow' link='https://stackoverflow.com/users/15829321/asaf-meizner' />
              <IconLink iconName={linkedinIcon} label='Linkedin' link='https://www.linkedin.com/in/asaf-meizner-670536244/' />
              <IconLink iconName={instagramIcon} label='Instagram' link='https://www.instagram.com/asafmeizner/' />
              <IconLink iconName={spotifyIcon} label='Spotify' link='https://open.spotify.com/user/lp4y2ybtx0cyj94qe3r7ssrxh?si=d1f13b99538d44f6' />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-blue-400 ring-blue-400' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
