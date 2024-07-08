export default function TestimonialCard({
	description,
	name,
	designation,
}: {
	description: string;
	name: string;
	designation: string;
}) {
	return (
		<div className="bg-secondary px-8 py-10 rounded-md">
			<p className="font-normal text-secondary-foreground text-md mb-4">
				{description}
			</p>

			<h6 className="font-semibold text-secondary-foreground text-md">
				{name}{" "}
				<span className="font-medium text-secondary-foreground/20 text-sm">
					- {designation}
				</span>
			</h6>
		</div>
	);
}
