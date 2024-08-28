import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook , BsTwitter , BsInstagram , BsGithub } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5 '>
          <Link  to="/" className='self-center whitespace-nowrap text-lg
            sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white'>abhu's</span>
            Blog
          </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
            <Footer.Title  title='ABOUT' />
            <Footer.LinkGroup col>
              <Footer.Link
                 href='/about'
                 target='_blank'
                 rel='noopener noreferrer'
              >
                abhu's blog
              </Footer.Link>
              <Footer.Link
                 href='https://codeforces.com/profile/abhijith88'
                 target='_blank'
                 rel='noopener noreferrer'
              >
                codeforces
              </Footer.Link>
            </Footer.LinkGroup>
            </div>

            <div>
            <Footer.Title  title='FOLLOW US' />
            <Footer.LinkGroup col>
              <Footer.Link
                 href='https://www.linkedin.com/in/abhijith-sangarsu-58b92323b/'
                 target='_blank'
                 rel='noopener noreferrer'
              >
                Linkedin
              </Footer.Link>
              <Footer.Link
                 href='https://github.com/abhijith888'
                 target='_blank'
                 rel='noopener noreferrer'
              >
                Github
              </Footer.Link>
            </Footer.LinkGroup>
            </div>

            <div>
            <Footer.Title  title='LEGAL' />
            <Footer.LinkGroup col>
              <Footer.Link
                 href='#'
              >
                Privacy Policy
              </Footer.Link>
              <Footer.Link
                 href='#'
              >
                Terms and Conditions
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright 
            href='#'
            by="abhu's blog"
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon herf='#' icon={BsFacebook}/>
            <Footer.Icon herf='#' icon={BsInstagram}/>
            <Footer.Icon herf='#' icon={BsTwitter}/>
            <Footer.Icon herf='#' icon={BsGithub}/>
          </div>
        </div>
      </div>
    </Footer>
  );  
}