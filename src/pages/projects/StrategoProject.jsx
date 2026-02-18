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
        >
            <div className="py-12 border-t border-gray-100">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        <img src={assetUrl('/assets/images/stratego/stratego-poster.svg')} alt="Stratego poster" className="w-full rounded-2xl shadow-2xl border border-gray-100" />
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Project repository</h3>
                        <p className="text-gray-600 mb-6">Source code, evaluation harness and match controllers are available on GitHub.</p>
                        <a
                            href="https://github.com/davszi/Stratego.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition-colors"
                        >
                            View on GitHub
                        </a>

                        <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">What you can explore</h4>
                            <ul className="text-gray-600 list-disc list-inside space-y-2">
                                <li>LLM agent adapters and match controller</li>
                                <li>Evaluation metrics for agent comparison</li>
                                <li>Visualizer for move sequences and replay</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectLayout>
    );
};

export default StrategoProject;
