import { HTMLAttributes } from "react";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva(
	"inline-flex items-center justify-center rounded-md leading-none",
	{
		variants: {
			type: {
				default: "text-md tracking-wide",
				title: "font-bold text-3xl",
				subtitle1:
					"font-bold text-xl bg-secondary text-secondary-foreground hover:bg-secondary/80",
				subtitle2:
					"font-bold text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80",
			},
		},
		defaultVariants: {
			type: "default",
		},
	}
);

export interface SpanProps
	extends HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof textVariants> {}

export const Text = React.forwardRef<HTMLSpanElement, SpanProps>(
	({ className, type, ...props }, ref) => {
		return (
			<span
				className={cn(textVariants({ type }), className)}
				ref={ref}
				{...props}
			/>
		);
	}
);
