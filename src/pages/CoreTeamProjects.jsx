import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectRow from '../components/ProjectRow';

const activeProjects = [
    {
        id: 'dynamo',
        title: "DyNAMO",
        tag: "Cognitive Systems / RL",
        status: "Active",
        image: "/assets/images/dynamo/hero.jpeg",
        description: "Developing a cognitive framework for dynamic manipulation and reasoning in unstructured environments. Bridging perception and action with advanced RL.",
        link: "/core-team-projects/dynamo"
    },
    {
        id: 'ai4ai',
        title: "AI4AI",
        tag: "Computer Vision / LLMs",
        status: "Active",
        image: "/assets/images/ai4ai/hero.png",
        description: "From Image to Model using AI-assisted AI. Transitioning static images into editable engineering models (CAD, BIM, TikZ) by leveraging LLMs and Computer Vision.",
        link: "/core-team-projects/ai4ai"
    },
    {
        id: 'vergabepilot',
        title: "Vergabepilot.AI",
        tag: "LLMs / Web Automation",
        status: "Active",
        image: "/assets/images/vergabepilot/hero.png",
        description: "LLM-based tender scraping for state-of-the-art tender search. Automating web scraper generation, validation, and improvement using LLMs and MLLM agents.",
        link: "/core-team-projects/vergabepilot"
    }
];

const archiveProjects = [
    {
        id: 'self-driving',
        title: "Self-Driving 1:10",
        tag: "Autonomous Navigation",
        status: "Legacy",
        youtubeId: "wrY34WyTEzo",
        description: "A completed initiative scaling down autonomous driving algorithms for rapid prototyping. Focused on SLAM and path planning in miniature environments.",
        link: "#"
    },
    {
        id: 'traffic-network',
        title: "Traffic Network Builder",
        tag: "Simulation Tools",
        status: "Archive",
        video: "/assets/videos/TrafficNetworkBuilder.mp4",
        description: "Interactive tools for constructing and simulating complex traffic networks to rigorously test autonomous systems in virtual environments.",
        link: "#"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const CoreTeamProjects = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Hero Section */}
            <section id="hero" className="relative bg-white pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 z-10"
                        >
                            <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                                Applied Intelligence
                            </span>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                                CORE Team <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Projects
                                </span>
                            </h1>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Student-led innovation at the intersection of AI, Machine Learning, and Cognitive Systems.
                                Building the future of embodied intelligence.
                            </p>
                        </motion.div>

                        {/* Interactive Abstract Visual */}
                        <motion.div
                            className="lg:w-1/2 relative flex justify-center perspective-1000 h-[400px] items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            {/* Draggable Container */}
                            <motion.div
                                drag
                                dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                                dragElastic={0.2}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95, cursor: "grabbing" }}
                                className="relative w-72 h-72 md:w-96 md:h-96 cursor-grab touch-none"
                            >
                                {/* Decorative Orbits/Grid - Auto Spinning */}
                                <div className="absolute inset-0 border-2 border-dashed border-blue-100 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>
                                <div className="absolute inset-8 border border-gray-100 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                                {/* Center "Core" Cube - 3D Rotation */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 perspective-500">
                                    <motion.div
                                        animate={{
                                            rotateX: [0, 360],
                                            rotateY: [0, 360]
                                        }}
                                        transition={{
                                            duration: 10,
                                            ease: "linear",
                                            repeat: Infinity
                                        }}
                                        className="w-32 h-32 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl flex items-center justify-center pt-8"
                                        style={{ transformStyle: "preserve-3d" }}
                                    /* Added pt-8 to center the inner cube vertically/visually in the spinning box */
                                    >
                                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-inner transform translate-z-10"></div>
                                    </motion.div>

                                    {/* Orbital Dots */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                                        className="absolute inset-[-40px]"
                                    >
                                        <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 absolute top-0 left-1/2 -translate-x-1/2"></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Life at CORE / Experience Section */}
            <section className="py-20 bg-gray-900 text-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
                            The Experience
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            "WORK HARD 💪. PLAY HARD 🏀."
                        </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Video 1: Current Showcase */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group"
                        >
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                                    LATEST
                                </span>
                            </div>
                            <video
                                src="/assets/videos/CTP_Showcase.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            />
                        </motion.div>

                        {/* Video 2: 2022 Showcase */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group"
                        >
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 bg-gray-700 text-white text-xs font-bold rounded-full shadow-lg">
                                    ARCHIVE (2022)
                                </span>
                            </div>
                            <video
                                src="/assets/videos/CTP_Showcase_2022.mp4"
                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Grid Section - Active */}
            <section id="active-projects" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                            Current Focus
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            Active Projects
                        </h2>
                        <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            Pushing the boundaries of what's possible in cognitive systems and automated intelligence.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {activeProjects.map((project) => (
                            <motion.div key={project.id} variants={itemVariants} className="h-full">
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid Section - Archive */}
            <section id="archive" className="py-32 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-400 mb-4 uppercase tracking-wider">Project Archive</h2>
                        <div className="h-px w-full bg-gray-200"></div>
                    </div>

                    <div className="space-y-24">
                        {archiveProjects.map((project, index) => (
                            <ProjectRow key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {/* Previous University Projects */}
                    <div className="mt-24 pt-16 border-t border-gray-200">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-gray-500 text-lg leading-relaxed mb-6">
                                Looking for earlier iterations? These projects continue the tradition of our team projects from the University of Mannheim, where the same format ran under the European Master Team Project.
                            </p>
                            <a
                                href="https://www.uni-mannheim.de/en/ines/teaching/european-master-team-project/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors text-lg"
                            >
                                View previous projects at Uni Mannheim
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoreTeamProjects;
