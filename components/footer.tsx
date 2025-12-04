// ...existing code...
import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex p-2 shadow-lg bg-white items-center justify-between border'>
        <p className='tracking-tight text-gray-500 pl-2'>Built with love by Yash Bhanuse</p>
        {/* changed: make icons container a horizontal flex row with gap */}
        <div className='flex items-center gap-4 pr-2'>
          <Link
            className="text-muted-foreground hover:text-foreground flex items-center"
            href="https://github.com/yashbhanuse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>

          <Link
            className="text-muted-foreground hover:text-foreground flex items-center"
            href="https://www.linkedin.com/in/yashbhanuse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>

          <Link
            className="text-muted-foreground hover:text-foreground flex items-center"
            href="mailto:youremail@example.com"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
    </div>
  )
}

export default Footer

// bg-[#f7f9fa]