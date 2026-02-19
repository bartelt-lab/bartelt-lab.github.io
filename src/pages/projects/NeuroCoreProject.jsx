import ProjectLayout from '../../components/ProjectLayout';
import assetUrl from '../../utils/assetUrl';

const NeuroCoreProject = () => {
    const features = [
        { icon: "⚙️", title: "Job Orchestration", description: "Schedule and orchestrate ML training jobs across clusters with reproducible job specs." },
        { icon: "📊", title: "Real-time Monitoring", description: "Live GPU / node metrics, resource usage charts and health checks." },
        { icon: "🔒", title: "SSH & Remote Health", description: "Lightweight SSH-based probes to monitor node responsiveness and disk/IO health." },
        { icon: "🔁", title: "Experiment Tracking", description: "Centralized experiment logs, run metadata and basic visualization of training progress." }
    ];

    return (
        <ProjectLayout
            title="NeuroCore Dashboard"
            subtitle="Orchestration, monitoring and analytics for ML compute clusters"
            status="Archive"
            tags={["MLOps", "Monitoring"]}
            heroVideo={assetUrl('/assets/videos/NeuroCore_demo.mp4')}
            heroImage={assetUrl('/assets/images/NeuroCore/neurocore-dashboard.svg')}
            overview="A dashboard for orchestrating machine learning training jobs, monitoring GPU and node health via SSH, and visualizing real-time performance analytics across compute clusters."
            features={features}
            showEvalSection={false}
        >
            {/* Demo video + repo link */}
            <div className="py-12 border-t border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                        <video
                            src={assetUrl('/assets/videos/NeuroCore_demo.mp4')}
                            className="w-full h-auto object-cover"
                            controls
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    <p className="text-center mt-6">
                        <a
                            href="https://github.com/davszi/NeuroCore.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition-colors"
                        >
                            Open on GitHub
                        </a>
                    </p>

                    <p className="text-gray-500 text-sm mt-4 text-center">Demo video (use controls to replay).</p>
                </div>
            </div>
        </ProjectLayout>
    );
};

export default NeuroCoreProject;
