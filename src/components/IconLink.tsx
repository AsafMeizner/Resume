import {FC, memo} from 'react'

type Props = {
    iconName: React.ReactNode,
    link: string,
    label: string
}

const IconLink:FC<Props> = memo(({iconName, link, label}: Props) => (
    <div>
        <a aria-label={label} className='-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400  sm:-m-3 sm:p-3' href={link}>{iconName}</a>
    </div>
))

export default IconLink