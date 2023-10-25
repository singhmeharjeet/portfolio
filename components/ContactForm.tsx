"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import z from "zod";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast, useToast } from "./ui/use-toast";

const contactFormSchema = z.object({
	email: z.string().email(),
	subject: z.string().max(100, { message: "Word Limit is 100" }).optional(),
	message: z
		.string()
		.min(1, { message: "Message is required" })
		.max(1000, { message: "Word Limit is 1000" }),
});
type Inputs = z.infer<typeof contactFormSchema>;

export function ContactForm() {
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const response = await fetch("/api/send", {
			method: "POST",
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "Something went wrong. Please try again later.",
			});
			return;
		}

		reset();
		toast({
			title: "Message sent!",
			description: "I'll get back to you as soon as possible.",
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
			<div>
				<Label htmlFor="email" className="block mb-2">
					Your email
				</Label>
				<Input
					{...register("email")}
					name="email"
					type="email"
					required
					autoComplete="email"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="Enter your email"
				/>

				{errors.email && (
					<span className="text-xs italic text-red-500 mt-2">
						{errors.email.message}
					</span>
				)}
			</div>
			<div>
				<Label htmlFor="subject" className="block mb-2">
					Subject
				</Label>
				<Input
					{...register("subject")}
					autoCapitalize="on"
					type="text"
					id="subject"
					className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="What can I help you with?"
				/>
				{errors.subject && (
					<p className="text-xs italic text-red-500 mt-2">
						{" "}
						{errors.subject?.message}
					</p>
				)}
			</div>
			<div className="sm:col-span-2">
				<Label htmlFor="message" className="block mb-2">
					Your message
				</Label>
				<Textarea
					{...register("message")}
					id="message"
					rows={6}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Leave a message..."
				></Textarea>
				{errors.message && (
					<p className="text-xs italic text-red-500 mt-2">
						{errors.message?.message}
					</p>
				)}
			</div>
			<Button
				type="submit"
				className="py-3 px-5 text-sm font-medium  sm:w-fit"
			>
				Send message
			</Button>
		</form>
	);
}
