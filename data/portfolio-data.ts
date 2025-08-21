export interface ProjectLink {
	label: string
	url: string
}

export interface Project {
	title: string
	shortDesc: string
	longDesc: string
	tech: string[]
	date?: string
	links?: ProjectLink[]
}

export interface ProjectGroup {
	category: string
	projects: Project[]
}

export const projects: ProjectGroup[] = [
	{
		category: 'Work Experience Projects',
		projects: [
			{
				title: 'Maker Brothers Worldwide Websites',
				shortDesc:
					'Built high-performance websites with Next.js, Sanity, GSAP, and Framer Motion, improving engagement and SEO.',
				longDesc:
					'Developed and deployed multiple high-performance marketing websites for Maker Brothers Worldwide and its partners, including campos.studio and bahrabualphotography.com. Leveraged Next.js for server-side rendering and ISR to maximize SEO, integrated Sanity CMS for flexible content workflows, and utilized GSAP + Framer Motion to build smooth, performant animations that enhanced brand identity. Ensured scalability and reliability by deploying through Vercel, while maintaining high Lighthouse performance scores and optimized SEO metadata across all sites.',
				tech: ['Next.js', 'Sanity', 'GSAP', 'Framer Motion', 'Vercel'],
				date: 'Apr 2024 - Present',
				links: [
					{ label: 'makerbros.co', url: 'https://makerbros.co' },
					{ label: 'campos.studio', url: 'https://campos.studio' },
					{
						label: 'bahrabualphotography.com',
						url: 'https://bahrabualphotography.com',
					},
				],
			},
			{
				title: 'Kitchen Mall Inventory System',
				shortDesc:
					'End-to-end inventory tracking across warehouses, vendors, and customers with barcode scanning and dashboards.',
				longDesc:
					'Architected and implemented an inventory management platform to streamline operations across multiple warehouses, vendors, and customers. Built barcode scanning features to accelerate item check-in/check-out, designed custom APIs to synchronize data in real-time, and created role-based dashboards to visualize stock levels, vendor performance, and customer orders. The system reduced manual tracking overhead and improved inventory accuracy by providing actionable analytics and automated workflows.',
				tech: ['React', 'Node.js', 'Custom APIs', 'Barcode Scanning'],
				date: 'Dec 2023 - Mar 2024',
			},
		],
	},
	{
		category: 'Android Apps',
		projects: [
			{
				title: 'Workout Android App',
				shortDesc:
					'Fitness app with real-time exercise logging, GPS workouts, and ML-based activity detection.',
				longDesc:
					'Designed and developed a mobile fitness application that combines exercise logging, GPS-based workout tracking, and ML-powered activity detection. Implemented real-time location tracking using Google Maps APIs, optimized background services for long-running workouts, and integrated ML models for automatic recognition of exercise types. Focused on seamless UX by building offline-first features and persistent state handling to ensure reliability during network interruptions.',
				tech: ['Kotlin', 'Android', 'Google Maps', 'ML'],
				date: 'Sept - Oct 2024',
			},
			{
				title: 'TeamUp',
				shortDesc:
					'Cross-platform group and event management app with notifications and a companion web app.',
				longDesc:
					'Built a cross-platform app to simplify group coordination and event management, with both Android and web support. Implemented real-time notifications, calendar integrations, and group communication features to streamline collaboration. On the backend, developed a robust API layer and integrated it with a React/Next.js web companion app for broader accessibility. Designed the system to scale to multiple user groups while maintaining fast performance and a responsive UX.',
				tech: ['Kotlin', 'Android', 'React', 'Next.js'],
				date: 'Dec 2024',
				links: [
					{ label: 'Web App', url: 'https://teamup-web.vercel.app' },
					{
						label: 'Demo Video',
						url: 'https://youtu.be/8NSOQaSIBgw',
					},
				],
			},
		],
	},
	{
		category: 'AI Projects',
		projects: [
			{
				title: 'AI Therapist - Happimind',
				shortDesc:
					'1st Prize Hackathon project: a multilingual AI mental health chatbot with OpenAI and Clerk auth.',
				longDesc:
					"Won 1st place in a hackathon by building a multilingual AI-powered mental health chatbot that offered empathetic, context-aware responses in multiple languages. Integrated OpenAI's LLM for natural dialogue, Clerk for authentication and user security, and Supabase for data storage. Architected the system to provide real-time personalized interactions, with a responsive Next.js + Tailwind UI optimized for accessibility and inclusivity.",
				tech: ['Next.js', 'Tailwind', 'Supabase', 'Clerk', 'OpenAI'],
				date: 'Feb 2024',
			},
			{
				title: 'Ghostbusters & Bayesian Networks',
				shortDesc:
					'AI inference system using Bayesian Networks for ghost tracking in Pac-Man.',
				longDesc:
					'Implemented an inference engine using Bayesian Networks to track hidden agents (ghosts) in a Pac-Man simulation. Designed probabilistic models that updated ghost location likelihoods based on partial observations, showcasing AI concepts in uncertainty handling and decision-making. Optimized performance of the inference system to handle real-time updates and tested multiple network topologies for accuracy and efficiency.',
				tech: ['Python'],
			},
		],
	},
	{
		category: 'Side Projects',
		projects: [
			{
				title: 'Learn Sphere',
				shortDesc:
					'Discussion board app with microservices, API gateway, and JWT-based authorization.',
				longDesc:
					'Developed a discussion board platform built on a microservices architecture, using an API gateway for routing and JWT-based authentication for secure communication. Designed services for post management, comments, and notifications, ensuring fault isolation and scalability. Deployed on Google Cloud and integrated Supabase for persistent storage, with a Tailwind + React frontend providing a clean, responsive UI.',
				tech: ['React', 'Tailwind', 'Supabase', 'JWT', 'Google Cloud'],
				date: 'Mar 2024',
			},
			{
				title: 'Package Deliveries Tracker',
				shortDesc:
					'Web service for managing package deliveries with Spring Boot REST API and Java Swing client.',
				longDesc:
					'Created a delivery tracking system with a Spring Boot REST API backend and a Java Swing desktop client. Implemented endpoints for package registration, tracking, and delivery confirmation, while building the Swing UI for end-user interaction. Focused on reliability by designing the system with layered architecture, improving maintainability and extensibility for future features like route optimization.',
				tech: ['Java', 'Spring Boot', 'Swing', 'REST'],
				date: '2022',
			},
			{
				title: 'Adoptify',
				tech: ['React', 'Express', 'AWS S3'],
				shortDesc:
					'Full-stack web application for pet adoption and fostering.',
				longDesc:
					'Built and deployed a full-stack web application on Heroku that enabled its users to adopt or give away their pets. Implemented features like user authentication, pet listings, and real-time chat. Used optimization techniques to implement infinite scroll and make the database requests 2 times faster.',
			},
			{
				title: 'Multimedia Viewer',
				tech: ['C++', 'SDL3', 'SDL3 Image', 'CMake'],
				shortDesc: 'Cross-platform audio and image viewer application.',
				longDesc:
					'Programmed an audio and image viewer for desktop which supports the 3 major operating systems. Implemented image algorithms like auto color correction, dithering, and more by using SDL3 image.',
				date: 'Oct 2023',
				links: [
					{
						label: 'GitHub',
						url: 'https://github.com/singhmeharjeet/multimedia-viewer',
					},
				],
			},
		],
	},
	{
		category: 'Course & Academic Projects',
		projects: [
			{
				title: 'All Pair Shortest Path',
				shortDesc:
					'Implemented serial, parallel & distributed Floyd-Warshall algorithms for APSP in C++.',
				longDesc:
					'Implemented Floyd-Warshall for All Pairs Shortest Path in multiple modes: serial, multithreaded, and distributed using MPI. Benchmarked performance across different hardware configurations and analyzed scaling efficiency. Showcased algorithm optimization, parallelism, and distributed systems concepts by reducing computation time significantly in large graph datasets.',
				tech: ['C++', 'MPI', 'Threads'],
				date: 'Apr 2024',
			},
			{
				title: 'Extensible Hash Table',
				shortDesc:
					'Hash table implementation combining linear and quadratic probing.',
				longDesc:
					'Built an extensible hash table with custom collision resolution strategies that combined linear and quadratic probing. Focused on performance trade-offs, memory efficiency, and extensibility for large datasets. Demonstrated understanding of low-level data structures and hashing theory.',
				tech: ['C++'],
			},
			{
				title: 'Hospital Queue Simulation',
				shortDesc: 'Discrete event simulation for hospital queues.',
				longDesc:
					'Developed a discrete-event simulation model for hospital queue management, simulating patient arrival rates, service times, and bottlenecks. Analyzed system throughput and wait times to study the impact of resource allocation strategies. Provided insights into hospital operations optimization using computer simulations.',
				tech: ['Java'],
			},
			{
				title: 'Processor Pipeline Simulator',
				shortDesc: 'Pipeline simulation for CPU instruction execution.',
				longDesc:
					'Implemented a CPU pipeline simulator to model instruction-level parallelism, hazards, and forwarding. Demonstrated concepts of modern processor architecture by visualizing pipeline stages and analyzing performance trade-offs. Validated against sample instruction sets to ensure correctness and efficiency.',
				tech: ['Java'],
			},
			{
				title: 'Malloc Implementation',
				shortDesc:
					'Custom memory allocator using a skip list, achieving O(log n) allocation/free.',
				longDesc:
					'Implemented a custom malloc/free memory allocator using skip lists to achieve O(log n) performance for allocation and deallocation. Designed memory blocks with metadata for fragmentation reduction and optimized memory reuse. Benchmarked performance against standard allocators, demonstrating efficiency gains in specific workloads.',
				tech: ['C', 'Skip Lists'],
				links: [
					{
						label: 'GitHub',
						url: 'https://github.com/singhmeharjeet/malloc',
					},
				],
			},
		],
	},
	{
		category: 'Networking Projects',
		projects: [
			{
				title: 'Simple Network Telemetry with gRPC',
				shortDesc:
					'Implemented RPC client-server communication using Protobufs and gRPC.',
				longDesc:
					'Built a network telemetry system using gRPC and Protobufs to facilitate efficient client-server communication. Designed services for data collection, reporting, and monitoring in real-time. Focused on performance and extensibility by leveraging strongly-typed Protobuf messages and asynchronous streaming APIs.',
				tech: ['gRPC', 'Protobuf', 'Python'],
			},
			{
				title: 'SDN Network Control Apps',
				shortDesc:
					'Built SDN applications with Ryu for L2 connectivity, firewall, and traffic engineering.',
				longDesc:
					'Developed software-defined networking (SDN) applications using the Ryu controller framework. Implemented L2 switching, firewall rules, and traffic engineering policies to dynamically manage network flows. Demonstrated understanding of OpenFlow protocol and programmable networking principles by testing across simulated network environments.',
				tech: ['Python', 'Ryu SDN', 'OpenFlow'],
			},
			{
				title: 'Firewall & IDS in P4',
				shortDesc:
					'Implemented programmable firewall and intrusion detection system with P4.',
				longDesc:
					'Designed and implemented a firewall and intrusion detection system using the P4 programming language on programmable switches. Built packet parsing logic, filtering rules, and anomaly detection mechanisms that ran directly in the data plane. Demonstrated how programmable networking hardware can offload critical security tasks for higher throughput.',
				tech: ['P4', 'Programmable Switches'],
			},
			{
				title: 'Deny and Conquer',
				shortDesc:
					'Real-time multiplayer Python game built with WebSockets.',
				longDesc:
					'Developed a real-time multiplayer game using Python and WebSockets, enabling synchronous interactions between players. Designed custom game logic and event handling for smooth gameplay while managing concurrency challenges in networked environments. Deployed with a lightweight server model and tested extensively for latency and synchronization issues.',
				tech: ['Python', 'WebSockets'],
				links: [
					{
						label: 'GitHub',
						url: 'https://github.com/singhmeharjeet/deny-and-conquer',
					},
				],
			},
		],
	},
]

export const technologies = [
	'Next.js',
	'React',
	'TypeScript',
	'Node.js',
	'Python',
	'Kotlin',
	'Java',
	'C++',
	'Supabase',
	'PostgreSQL',
	'MongoDB',
	'Docker',
	'AWS',
	'Vercel',
	'GSAP',
	'Framer Motion',
	'TensorFlow',
	'OpenAI',
]

export const personalInfo = {
	name: 'Meharjeet Singh',
	email: 'singhmeharjeet@gmail.com',
	phone: '+1 (604) 518-6702',
	location: 'British Columbia, Canada',
	title: 'Full Stack Developer & Software Engineer',
	bio: 'Passionate software engineer with expertise in web development, mobile apps, AI, and distributed systems. I love building innovative solutions that make a real impact.',
	github: 'https://github.com/singhmeharjeet',
	linkedin: 'https://www.linkedin.com/in/meharjeet-singh-7a870919b',
	resume: '/resume.pdf',
}

export const experiences = [
	{
		type: 'work',
		title: 'Software Developer',
		company: 'Maker Brothers Worldwide',
		period: 'Apr 2024 - Present',
		description:
			'Building high-performance marketing websites with Next.js, Sanity CMS, and advanced animations. Developed multiple client sites with optimized SEO and scalable architecture.',
		technologies: ['Next.js', 'Sanity', 'GSAP', 'Framer Motion', 'Vercel'],
	},
	{
		type: 'work',
		title: 'Full-Stack Developer',
		company: 'Kitchen Mall',
		period: 'Dec 2023 - Mar 2024',
		description:
			'Architected end-to-end inventory management system with barcode scanning, real-time APIs, and role-based dashboards across multiple warehouses.',
		technologies: ['React', 'Node.js', 'Custom APIs', 'Barcode Scanning'],
	},
	{
		type: 'education',
		title: 'Bachelor of Science in Computer Science',
		company: 'Simon Fraser University',
		period: '2020 - 2024',
		description:
			'Focused on algorithms, data structures, systems programming, networking, and AI. Completed projects in distributed systems, machine learning, and software engineering.',
		technologies: ['C++', 'Java', 'Python', 'Algorithms', 'Systems Design'],
	},
	{
		type: 'volunteer',
		title: 'Math and Science Tutor',
		company: 'India',
		period: 'Apr - Oct 2021',
		description:
			'Taught 6 underprivileged students to clear the Entrance Exam for Indian Army, by taking classes and explaining complex ideas simply.',
		technologies: ['Teaching', 'Mentoring'],
	},
]
