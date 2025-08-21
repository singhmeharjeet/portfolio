import { LucideLinkedin, GithubIcon, InstagramIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'

// @ts-ignore
import Resume from '@/public/resume.pdf'

type Props = {}

const Nav = (props: Props) => {
	return (
		<nav className="flex w-full items-center justify-between rounded px-4 py-2">
			<div className="flex gap-2">
				<Button variant="outline" size="icon" asChild>
					<Link href="https://www.linkedin.com/in/meharjeet-singh-7a870919b/">
						<LucideLinkedin className="w-6 h-6" />
						<span className="sr-only">Linkedin Link</span>
					</Link>
				</Button>
				<Button variant="outline" size="icon" asChild>
					<Link href="https://www.github.com/singhmeharjeet">
						<GithubIcon className="w-6 h-6" />
						<span className="sr-only">Github Link</span>
					</Link>
				</Button>
				<Button variant="outline" size="icon" asChild>
					<Link href="https://www.instagram.com/meharjeetsingh">
						<InstagramIcon className="w-6 h-6" />
						<span className="sr-only">Instagram Link</span>
					</Link>
				</Button>
			</div>
			<div className="flex gap-2">
				<ModeToggle />
				<Button className="font-bold" variant="outline" asChild>
					<Link href={Resume} target="_blank">
						Resume
					</Link>
				</Button>
			</div>
		</nav>
	)
}
export default Nav
