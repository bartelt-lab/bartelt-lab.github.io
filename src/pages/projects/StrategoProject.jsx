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
            overview="Explore how different large language models compete in the classic strategy board game Stratego, with automated matchups, head-to-head win comparisons, and gameplay behavior logging to reveal strengths and patterns in decision making."
            features={features}
            showEvalSection={false}
        >
            <div className="py-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="md:w-2/3">
                        <img src={assetUrl('/assets/images/stratego/stratego-poster.svg')} alt="Stratego poster" className="w-full rounded-2xl shadow-2xl border border-gray-100" />
                    </div>

                    <div className="md:w-1/3 flex flex-col items-start gap-4">
                        <h3 className="text-lg font-semibold text-gray-900">Project repository</h3>
                        <p className="text-gray-600 text-sm">Source, evaluation harness and visualizers available on GitHub.</p>

                        <a
                            href="https://github.com/davszi/Stratego.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-md shadow-sm hover:shadow-md hover:bg-black transition-all duration-150"
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
