import { ArrowRight, ExternalLink, Github, Calendar, Code } from "lucide-react";
import React, { useEffect, useRef } from "react";

// Hardcoded projects data for fast loading
const topProjects = [
	{
		id: 1016232509,
		name: "Online Judge Codester",
		description: "A comprehensive online coding platform with real-time code execution, contest management, and automated testing. Features multi-language support, AI-powered assistance, and modern responsive UI.",
		// Changed language label from JavaScript to Node.js per request
		language: "Javascript",
		technologies: ["React", "Javascript", "Node.js", "Express", "MongoDB", "Redis", "JWT", "Azure", "Render", "Vercel", "Docker", "Tailwind CSS", "Python", "Gemini AI"],
		// stars & forks retained in data but not displayed
		stars: 1,
		forks: 0,
		githubUrl: "https://github.com/ark5234/Online-Judge-Codester",
		liveUrl: "https://online-judge-codester.vercel.app",
		imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
		updatedAt: "2025-08-16"
	},
	{
		id: 999689231,
		name: "Customer Churn Dashboard",
		description: "Interactive analytics dashboard for predicting and visualizing customer churn patterns. Features advanced ML models, data visualization, and real-time predictions with beautiful responsive UI.",
		language: "Python, JavaScript",
		technologies: ["React", "Vite", "FastAPI", "Python", "Scikit-learn", "Pandas", "Tailwind CSS", "Render", "Vercel", "Machine Learning", "Data Science"],
		stars: 1,
		forks: 0,
		githubUrl: "https://github.com/ark5234/customer-churn-dashboard",
		liveUrl: "https://customer-churn-dashboard-three.vercel.app",
		imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
		updatedAt: "2025-06-29"
	},
	{
		id: 884996528,
		name: "AI Agent Project",
		description: "Intelligent AI agent system capable of autonomous decision making, task execution, and advanced problem-solving. Demonstrates cutting-edge AI technologies and automation capabilities.",
		language: "Python",
		technologies: ["Python", "AI", "Machine Learning", "Automation", "TensorFlow", "OpenAI", "Natural Language Processing", "Deep Learning"],
		stars: 1,
		forks: 0,
		githubUrl: "https://github.com/ark5234/AI-Agent-Project",
		// Added live demo URL provided by user
		liveUrl: "https://ai-data-analytics-agent.streamlit.app/",
		imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
		updatedAt: "2025-09-06"
	}
];

const remainingProjects = [
	{
		id: 1051654780,
		name: "Fraud Detection System",
		description: "Machine learning platform for detecting fraudulent transactions using feature engineering, anomaly detection (Isolation Forest & ensemble gradient boosting), real-time stream scoring, and detailed analytics dashboards with precision / recall monitoring and adaptive threshold tuning.",
		language: "Jupyter Notebook",
		technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Data Analysis", "Classification"],
		stars: 0,
		forks: 0,
		githubUrl: "https://github.com/ark5234/Fraud-Detection-System",
		liveUrl: "https://fraud-detection-web.streamlit.app/",
		updatedAt: "2025-09-06"
	},
	{
		id: 935585722,
		name: "Sepsis Detection Model",
		description: "Early warning healthcare model predicting onset of sepsis from temporal vital signs and laboratory trends. Incorporates data cleaning, time‑window aggregation, feature importance analysis, hyperparameter tuned classifiers, and calibrated decision thresholds for clinically interpretable alerts.",
		language: "Jupyter Notebook",
		technologies: ["Python", "Machine Learning", "Healthcare AI", "Data Analysis", "Pandas", "Scikit-learn", "Medical Informatics", "Classification"],
		stars: 2,
		forks: 0,
		githubUrl: "https://github.com/ark5234/Sepsis-Detection-Model",
		liveUrl: null,
		updatedAt: "2025-04-11"
	},
	{
		id: 938692590,
		name: "Brain Tumor Model",
		description: "Deep learning pipeline for MRI brain tumor classification featuring preprocessing (skull stripping, normalization), data augmentation, CNN architecture with transfer learning, evaluation via ROC/AUC, and experiment tracking for reproducible model comparisons.",
		language: "Jupyter Notebook",
		technologies: ["Python", "TensorFlow", "Computer Vision", "Medical AI", "CNN", "Deep Learning", "Image Processing", "Keras"],
		stars: 1,
		forks: 0,
		githubUrl: "https://github.com/ark5234/Brain-Tumor-Model",
		liveUrl: null,
		updatedAt: "2025-04-11"
	},
	{
		id: 917110873,
		name: "AI Game",
		description: "Python-based strategy game showcasing intelligent agent behavior with minimax + alpha-beta pruning, heuristic evaluation design, optional reinforcement learning experiments, and modular architecture for adding new rule sets / AI opponents.",
		language: "Python",
		technologies: ["Python", "AI", "Game Development", "Algorithms", "Game Theory", "Strategic AI", "Pygame"],
		stars: 2,
		forks: 0,
		githubUrl: "https://github.com/ark5234/ai_game",
		liveUrl: null,
		updatedAt: "2025-04-11"
	},
	{
		id: 846927807,
		name: "Online OTT Subscription Management",
		description: "Full subscription lifecycle management platform: role-based access, JWT-secured REST APIs, payment & billing logic, plan upgrades / downgrades, content entitlement checks, admin dashboards, and caching for performance.",
		language: "Java",
		technologies: ["Java", "Spring Boot", "MySQL", "REST API", "JWT", "Subscription Management"],
		stars: 0,
		forks: 0,
		githubUrl: "https://github.com/ark5234/Online-OTT-Subscription-Management-System",
		liveUrl: null,
		updatedAt: "2024-08-24"
	},
	{
		id: 834180628,
		name: "Credit Card Financial Dashboard",
		description: "Interactive Power BI analytics suite for credit card portfolios: dynamic KPI tracking, DAX measures for profitability & risk segmentation, drill-through exploration, cohort retention views, and executive summary storytelling visuals.",
		language: "Power BI",
		technologies: ["Power BI", "DAX", "Data Visualization", "Financial Analytics", "KPI Dashboard", "Business Intelligence"],
		stars: 0,
		forks: 0,
		githubUrl: "https://github.com/ark5234/Credit-Card-Financial-Dashboard",
		liveUrl: null,
		updatedAt: "2024-08-24"
	},
	{
		id: 834575595,
		name: "Space-X Website Clone",
		description: "Pixel-perfect SpaceX marketing site clone with layered parallax, scroll-triggered animations, accessibility tweaks (semantic landmarks, focus states), image optimization, and responsive layout across advanced breakpoint set.",
		language: "HTML",
		technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animations", "Web Development"],
		stars: 0,
		forks: 0,
		githubUrl: "https://github.com/ark5234/Space-X-website-clone-",
		liveUrl: null,
		updatedAt: "2025-04-09"
	}
];

const gradientCombos = [
	"from-blue-500 via-indigo-500 to-purple-600",
	"from-orange-400 via-pink-500 to-red-500",
	"from-teal-400 via-green-400 to-emerald-500",
];

// Removed getLanguageColor since badges now share unified styling

const ProjectsSection = () => {
	const sectionRef = useRef(null);

	// Reusable badge component
	const SkillBadge = ({ label, prominent = false }) => (
		<span
			className={`px-3 py-1 text-xs rounded-full font-medium border backdrop-blur-md transition whitespace-nowrap ${
				prominent
					? 'bg-white/20 border-white/30 hover:bg-white hover:text-black'
					: 'bg-white/10 border-white/20 hover:bg-white/80 hover:text-black'
			}`}
		>
			{label}
		</span>
	);

	// Normalize spacing/newlines inside descriptions
	const sanitize = (text) => text.replace(/\s+/g, ' ').trim();

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;
		const cards = Array.from(el.querySelectorAll('[data-reveal="project"]'));
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const target = entry.target;
					if (entry.isIntersecting) {
						target.classList.remove("opacity-0", "translate-y-8");
						target.classList.add("opacity-100", "translate-y-0", "roll-in");
					}
				});
			},
			{ threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
		);

		cards.forEach((card) => io.observe(card));

		// Fallback: after 1s show any still hidden (e.g., unsupported browser)
		setTimeout(() => {
			cards.forEach(card => {
				if (card.classList.contains('opacity-0')) {
					card.classList.remove('opacity-0','translate-y-8');
					card.classList.add('opacity-100','translate-y-0');
				}
			});
		}, 1200);
		return () => io.disconnect();
	}, []);

	return (
		<section ref={sectionRef} id="projects" className="py-16 md:py-20 px-3 md:px-4 bg-transparent scroll-mt-32 panel-spacing">
			<div className="panel-glow-wrap section-panel-bridge max-w-6xl mx-auto">
			<div className="section-panel max-w-6xl mx-auto px-5 md:px-9 py-12 md:py-16 relative z-10">
				<h2 className="panel-title text-3xl md:text-5xl text-center mb-4">
					My <span className="highlight">Projects</span>
				</h2>
				<p className="text-center text-foreground/70 max-w-2xl mx-auto mb-10 md:mb-12 text-sm md:text-base">
					A curated selection of my most impactful work, demonstrating my full-stack
					capabilities and product thinking.
				</p>

				{/* Top 3 Featured Projects with Images */}
				<div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-14 md:mb-16">
					{topProjects.map((project, index) => {
						const combo = gradientCombos[index % gradientCombos.length];
            
						return (
							<div
								key={project.id}
								data-reveal="project"
								className="group relative overflow-hidden rounded-3xl text-white shadow-md transition-all duration-500 touch-manipulation cursor-pointer hover:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] focus-within:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] data-[pressed=true]:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] hover:-translate-y-3 hover:scale-[1.025]"
								onTouchStart={(e) => e.currentTarget.setAttribute('data-pressed', 'true')}
								onTouchEnd={(e) => e.currentTarget.removeAttribute('data-pressed')}
								onTouchCancel={(e) => e.currentTarget.removeAttribute('data-pressed')}
							>
								{/* Gradient Background */}
								<div className={`absolute inset-0 bg-gradient-to-br ${combo}`}></div>

								{/* Orange Glow Ring on Hover */}
								<div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 data-[pressed=true]:opacity-100 transition-all duration-500 ring-2 ring-orange-400/30 blur-sm"></div>

								<div className="relative z-10">
									{/* Project Image */}
									<div className="h-48 md:h-56 overflow-hidden bg-black/20">
										{project.imageUrl ? (
											<img 
												src={project.imageUrl} 
												alt={project.name}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
												onError={(e) => {
													// Fallback to placeholder if image fails to load
													e.target.style.display = 'none';
													e.target.nextElementSibling.style.display = 'flex';
												}}
											/>
										) : null}
										<div className={`h-full ${project.imageUrl ? 'hidden' : 'flex'} items-center justify-center text-center p-4`}>
											<div>
												<Github className="w-12 h-12 text-white/60 mx-auto mb-2" />
												<p className="text-white/80 text-sm font-medium">{project.name}</p>
											</div>
										</div>
									</div>

									<div className="p-6">
										<div className="mb-2">
											<h3 className="text-xl font-semibold mr-2 mb-3">{project.name}</h3>
											<div className="flex flex-wrap gap-2 mb-3">
												{project.technologies.map(tech => (
													<SkillBadge key={tech} label={tech} />
												))}
											</div>
										</div>
                    
										<p className="text-sm md:text-sm mb-5 text-white/90 leading-relaxed text-left md:text-justify">
											{sanitize(project.description)}
										</p>

										<div className="flex justify-between items-center">
											{project.liveUrl ? (
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="text-sm font-medium text-white/80 hover:text-white active:opacity-80 flex items-center gap-1"
												>
													<ExternalLink className="w-4 h-4" />
													Live Demo
												</a>
											) : (
												<div className="flex items-center gap-1 text-white/50 text-sm">
													<Calendar className="w-4 h-4" />
													<span>{new Date(project.updatedAt).toLocaleDateString()}</span>
												</div>
											)}
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm font-medium text-white/80 hover:text-white active:opacity-80 flex items-center gap-1"
											>
												<Github className="w-4 h-4" />
												View Code
											</a>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Remaining Projects - Vertical stacked (horizontal cards) */}
				<div className="mb-10 md:mb-12">
					<h3 className="panel-title text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
						More <span className="highlight">Projects</span>
					</h3>
						<div className="flex flex-col gap-5">
						{remainingProjects.map(project => (
							<div
								key={project.id}
								data-reveal="project"
								className="group relative flex flex-col md:flex-row gap-5 bg-card border border-white/10 rounded-2xl p-5 md:items-start hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_32px_-4px_rgba(255,165,0,0.35)]"
							>
								<div className="flex-1 min-w-0">
									<h4 className="text-lg font-semibold mb-3 text-foreground text-left">{project.name}</h4>
									<p className="text-sm text-muted-foreground mb-4 leading-relaxed text-justify">{sanitize(project.description)}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map(t => (
											<SkillBadge key={t} label={t} />
										))}
									</div>
								</div>
								<div className="flex md:flex-col justify-between md:items-end items-center gap-3 md:w-40 shrink-0">
									<div className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(project.updatedAt).toLocaleDateString()}</div>
									<div className="flex gap-2">
										<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs transition">
											<Github className="w-3 h-3" />Code
										</a>
										{project.liveUrl && (
											<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs hover:brightness-110 transition">
												<ExternalLink className="w-3 h-3" />Live
											</a>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* View GitHub Profile Button */}
				<div className="text-center">
					<a
						href="https://github.com/ark5234"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 text-white font-semibold shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
					>
						<Github className="w-5 h-5" />
						<span>View My GitHub</span>
						<ArrowRight className="w-4 h-4" />
					</a>
				</div>
			</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
