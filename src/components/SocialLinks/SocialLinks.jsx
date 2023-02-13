import React from 'react'
import { socialLinks } from '../../data'

export const SocialLinks = () => {
  return (
    <div className='hidden min-[1120px]:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {socialLinks.map(link => (
          <li 
            key={link.id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${link.style}`}
          >
          <a 
            href={link.href} 
            className="flex justify-between items-center w-full text-white"
            alt="aside links"
            download={link.download}
            rel="noreferrer"
            target="_blank"
          >
            {link.child}
          </a>
        </li>
        ))}
      </ul>
    </div>
  )
}