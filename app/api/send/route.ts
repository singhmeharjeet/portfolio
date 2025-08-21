import { EmailTemplate } from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { ReactNode } from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
	const { email, subject, message } = await req.json()
	try {
		const data = await resend.emails.send({
			from: 'Portfolio Website <onboarding@resend.dev>',
			to: ['singhmeharjeet@gmail.com'],
			react: EmailTemplate({ email, subject, message }) as ReactNode,
			subject: 'New Message from Portfolio Website',
			text: 'Nothing',
		})

		return NextResponse.json(data)
	} catch (error) {
		return NextResponse.json({ error })
	}
}
