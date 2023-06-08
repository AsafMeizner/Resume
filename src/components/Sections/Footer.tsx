import {ChevronUpIcon} from '@heroicons/react/outline';
import {FC, memo, useMemo} from 'react';
import {FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaStackOverflow} from 'react-icons/fa';

import {SectionId} from '../../data/data';
import IconLink from '../IconLink';

const Footer: FC = memo(() => {

  const githubIcon = useMemo(() => (<FaGithub size={30} />), [])
  const stackoverflowIcon = useMemo(() => (<FaStackOverflow size={30} />), [])
  const linkedinIcon = useMemo(() => (<FaLinkedin size={30} />), [])
  const instagramIcon = useMemo(() => (<FaInstagram size={30} />), [])
  const spotifyIcon = useMemo(() => (<FaSpotify size={30} />), [])

  return (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        <IconLink iconName={githubIcon} label='Github' link='https://github.com/AsafMeizner' />
        <IconLink iconName={stackoverflowIcon} label='StackOverFlow' link='https://stackoverflow.com/users/15829321/asaf-meizner' />
        <IconLink iconName={linkedinIcon} label='Linkedin' link='https://www.linkedin.com/in/asaf-meizner-670536244/' />
        <IconLink iconName={instagramIcon} label='Instagram' link='https://www.instagram.com/asafmeizner/' />
        <IconLink iconName={spotifyIcon} label='Spotify' link='https://open.spotify.com/user/lp4y2ybtx0cyj94qe3r7ssrxh?si=d1f13b99538d44f6' />
      </div>
      <span className="text-sm text-neutral-700">Asaf Meizner Resume</span>
    </div>
  </div>
  )
});

Footer.displayName = 'Footer';
export default Footer;
