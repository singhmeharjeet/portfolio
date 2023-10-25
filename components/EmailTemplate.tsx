import * as React from "react";

interface EmailTemplateProps {
	email: string;
	subject: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	email,
	subject,
	message,
}) => (
	<div>
		From: {email}
		<br />
		Subject: {subject}
		<br />
		Message: {message}
	</div>
);
