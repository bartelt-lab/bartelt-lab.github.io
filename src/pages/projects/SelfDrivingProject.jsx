import ProjectLayout from '../../components/ProjectLayout';

const SelfDrivingProject = () => {
    const features = [
        { icon: '🛰️', title: 'SLAM & Perception', description: 'Lightweight SLAM and sensor-fusion methods tailored to 1:10-scale platforms.' },
        { icon: '🧭', title: 'Path Planning', description: 'Trajectory planning and obstacle avoidance tuned for miniature autonomous vehicles.' },
        { icon: '🔧', title: 'End-to-end stack', description: 'Integration of perception, planning and low-level control for rapid prototyping.' },
        { icon: '⚡', title: 'Classroom-ready', description: "Designed for fast iteration during student projects and demos." }
    ];

    return (
        <ProjectLayout
            title="Self-Driving 1:10"
            subtitle="Scaled-down autonomous driving platform for rapid prototyping and student projects"
            status="Legacy"
            tags={["Autonomous Navigation"]}
            overview="A completed initiative focused on adapting SLAM, path planning and control to a 1:10 scaled vehicle for fast experimentation and teaching. The work emphasises practical prototyping rather than a public code release."
            features={features}
            showEvalSection={false}
        >
            {/* No public repository for this project (per request) — embed demo video instead */}
            <section className="py-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-lg font-semibold text-gray-900">Demo</h3>
                    <p className="mt-2 text-gray-600 text-sm mb-4">Video demo from the project (no public repo available).</p>

                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/wrY34WyTEzo`}
                            title="Self-Driving 1:10 demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
        </ProjectLayout>
    );
};

export default SelfDrivingProject;
