import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Resume from '../assets/Artem-Hrechuk-CV.pdf';

export const socialLinks = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/artem-hrechuk/',
    style: 'rounded-tr-md'
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/official-artem',
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:hrechuk.artem@gmail.com'
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: Resume,
    style: 'rounded-br-md',
    download: true,
  },
]