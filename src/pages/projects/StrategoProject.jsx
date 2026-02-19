import ProjectLayout from '../../components/ProjectLayout';
import assetUrl from '../../utils/assetUrl';

const StrategoProject = () => {
    const features = [
        { icon: "♟️", title: "Automated Matchups", description: "Run large batches of LLM vs LLM matches with deterministic seeding and result capture." },
        { icon: "📈", title: "Head-to-head Analytics", description: "Win/loss statistics, move-sequence aggregation and behavioral pattern extraction." },
        { icon: "🧾", title: "Gameplay Logging", description: "Detailed logs for replay, step-by-step decision inspection and reproducible evaluation." },
        { icon: "🤖", title: "LLM Agents", description: "Adapters to plug different LLMs as decision agents for the Stratego environment." }
    ];

    return (
        <ProjectLayout
            title="Stratego — LLM Based Games"
            subtitle="Exploring LLM decision-making in the strategy board game Stratego"
            status="Archive"
            tags={["LLMs", "Games"]}
            heroImage={assetUrl('/assets/images/stratego/stratego-poster.svg')}
            heroVideo={assetUrl('/assets/videos/Stratego - Demo Video (RP 3).mp4')}
            overview="Explore how different large language models compete in the classic strategy board game Stratego, with automated matchups, head-to-head win comparisons, and gameplay behavior logging to reveal strengths and patterns in decision making."
            features={features}
            showEvalSection={false}
        >
            <div className="py-6 border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="mb-4 text-gray-600 text-sm">Watch a demo of the Stratego evaluation & match controller.</p>

                    <div className="flex justify-center">
                        <a
                            href="https://github.com/davszi/Stratego.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-gray-900 text-white rounded-md shadow-sm hover:shadow-md hover:bg-black transition-all duration-150"
                        >
                            Open on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </ProjectLayout>
    );
};

export default StrategoProject;
