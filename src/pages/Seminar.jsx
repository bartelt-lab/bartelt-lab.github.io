const seminarTopics = [
    {
        title: 'Approaches to Program Synthesis from Natural Language',
        content: `This seminar paper explores how machine learning, particularly neural network-based models, can be used to automatically generate computer programs from natural language descriptions. The central goal of these approaches is to enable users to describe their intent in everyday language and receive executable code in response — without manually writing any code.

The paper focuses on data-driven techniques, including transformer-based language models and fine-tuned models trained on code-text pairs. These models aim to learn the mapping between natural language specifications and source code by generalizing from large-scale training data.

Key aspects discussed include model architectures, input-output representations (e.g., code as text vs. abstract syntax trees), and the role of domain-specific languages (DSLs) in constraining the output space.`,
        objectives: [
            'Summarize modern ML-based and neural approaches to program synthesis from natural language',
            'Analyze the capabilities and limitations of current models',
            'Explore evaluation strategies and benchmark tasks',
            'Identify emerging trends and future research directions'
        ]
    },
    {
        title: 'Inductive vs. Transductive Approaches in Programming-by-Example: A Comparative Study and Evaluation Benchmarks',
        content: `Programming-by-Example (PBE) is a paradigm in which a system learns to generate a program purely from a small set of input-output examples, without requiring an explicit description of the task.

Within this domain, two complementary paradigms have emerged: inductive and transductive synthesis. Inductive PBE methods attempt to generate a general program that is consistent with all provided examples. Transductive PBE methods directly predict the output for a specific input using the training examples, without necessarily inferring a reusable program.

This seminar paper provides a comparative analysis of these two paradigms.`,
        objectives: [
            'Provide a structured comparison of inductive and transductive PBE approaches',
            'Identify typical use cases and limitations for both paradigms',
            'Collect and categorize publicly available benchmarks for fair and comprehensive evaluation',
            'Highlight open research questions and opportunities for hybrid or adaptive approaches'
        ]
    },
    {
        title: 'Real-World Applications of Concept Bottleneck Models Beyond Image Classification',
        content: `Concept Bottleneck Models (CBMs) offer a promising framework for interpretable machine learning by predicting high-level, human-understandable concepts as an intermediate step before making final predictions. Unlike standard end-to-end neural networks, CBMs enable direct inspection, validation, and even manual intervention at the concept level.

This seminar paper explores how CBMs are being adopted and adapted in real-world domains, with a particular focus on applications beyond conventional image classification tasks.`,
        objectives: [
            'Map the current landscape of CBM use in applied settings beyond general-purpose image tasks',
            'Understand how domain-specific needs shape concept design and evaluation',
            'Critically assess the benefits and limitations of CBMs in practical use',
            'Identify opportunities for future work in expanding CBMs into new domains or modalities'
        ]
    },
    {
        title: 'Guiding World Models with Visual Concepts: Enhancing Interpretability in Embodied AI',
        content: `In the realm of embodied AI, world models are pivotal for enabling agents to predict and interact with their environments. Traditionally, these models process raw sensory data, which can be opaque and challenging to interpret. Recent advancements suggest that integrating human-understandable visual concepts can serve as effective prompts.

This seminar explores how visual concepts are employed to guide world models in embodied AI systems.`,
        objectives: [
            'Review key methodologies that incorporate visual concepts into world models within embodied AI',
            'Analyze the benefits of using visual prompts for enhancing model interpretability and performance',
            'Discuss challenges and limitations associated with this approach',
            'Identify potential directions for future research in concept-guided world modeling'
        ]
    },
    {
        title: 'From Language to Action: Large Language Models as Agents for GUI Automation and Testing',
        content: `The emergence of Large Language Models (LLMs) has paved the way for intelligent agents capable of interacting with and automating Graphical User Interfaces (GUIs) across a variety of platforms. This seminar explores the design, capabilities, and applications of LLM-based GUI agents.`,
        references: [
            'He et al. (2024). WebVoyager. arXiv:2401.13919',
            'Fan et al. (2025). GUI-Bee. arXiv:2501.13896',
            'Lu et al. (2025). WebGen-Bench. arXiv:2505.03733',
            'Liu et al. (2023). Chatting with GPT-3. arXiv:2305.09434'
        ]
    },
    {
        title: 'Large Language Models in Building Information Modeling',
        content: `With the rapid progress of large language models (LLMs) in recent years, their use as domain-specific assistants has become feasible. Building Information Modeling (BIM) systems encode a building's geometry, semantics, and lifecycle attributes.

In the seminar thesis, the student first introduces the core concepts underlying transformer-based LLMs and BIM/IFC data structures.`,
        references: [
            'Zheng & Fischer (2023). BIM-GPT. arXiv:2304.09333',
            'Du et al. (2024). Text2BIM. arXiv:2408.08054',
            'Pacheco & Berkmiller (2024). BIMConverse',
            'Madireddy et al. (2025). Electronics, 14(11), 2146'
        ]
    },
    {
        title: 'LLM Agents with Growing Toolboxes: Library-Learning Approaches to Skill Acquisition',
        content: `Large-language-model (LLM) agents can call external "tools" (APIs, code snippets, software commands) to solve tasks they could not address with text generation alone. Recent research shows that agents can grow these toolboxes autonomously—an ability called library learning.`,
        references: [
            'Wang et al. (2023). Voyager. arXiv:2305.16291',
            'Zhang et al. (2025). SkillWeaver. arXiv:2504.07079',
            'Ocker et al. (2024). Tulip Agent. arXiv:2407.21778'
        ]
    }
];

const Seminar = () => {
    return (
        <>
            <style>{`
                .seminar-details details { margin-bottom: 1.5em; }
                .seminar-details details summary {
                    cursor: pointer;
                    position: relative;
                    padding-left: 1.2em;
                    font-weight: bold;
                    line-height: 1.4;
                }
                .seminar-details details summary::before {
                    content: '\\25B6';
                    position: absolute;
                    left: 0;
                    transition: transform 0.2s ease;
                }
                .seminar-details details[open] summary::before {
                    content: '\\25BC';
                }
                .seminar-details details summary:hover {
                    background: rgba(0, 123, 255, 0.05);
                    color: #007bff;
                }
                .seminar-details details summary:hover::before {
                    color: #007bff;
                }
            `}</style>

            {/* Intro Section */}
            <section id="intro-ai" className="home-section">
                <div className="container">
                    <p>
                        We are currently introducing a new seminar format. The previous format — where students independently wrote seminar papers — has been discontinued
                        because it no longer fulfilled its purpose: students rarely developed genuine understanding of the material, and the format incentivized AI-generated work.
                    </p>
                    <p>
                        The new format is built around two stages: a supervised reading and comprehension phase, followed by an independent literature research phase.
                        The goal is that students actually engage with and understand the research they are working on — and that supervisors benefit from the exchange too.
                    </p>
                    <p>
                        Seminars for the upcoming term will be announced here once the new format is finalized.
                        If you are interested, contact us at{' '}
                        <a href="mailto:patrick.knab@tu-clausthal.de">patrick.knab@tu-clausthal.de</a>.
                    </p>
                </div>
            </section>

            {/* Process Section */}
            <section id="topics" className="home-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-3 section-heading">
                            <h1>Process</h1>
                        </div>
                        <div className="col-xs-12 col-md-9">
                            <div className="course-list-item" itemScope itemType="http://schema.org/CreativeWork">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div style={{ marginTop: '1.5em' }}>
                                            <h4>Step 1: Supervised Reading Phase</h4>
                                            <ol>
                                                <li>Your supervisor sends you a set of papers to read and understand.</li>
                                                <li>
                                                    After 3 weeks, your understanding is assessed in an oral comprehension test with your supervisor:
                                                    <ul>
                                                        <li>At least 2 questions per paper: one testing general understanding, one testing deeper understanding</li>
                                                        <li>Example questions are provided with one of the papers so you know what to expect</li>
                                                    </ul>
                                                </li>
                                                <li>You propose 3 possible seminar topic ideas based on the material.</li>
                                            </ol>

                                            <h4>Step 2: Independent Literature Research</h4>
                                            <ol>
                                                <li>
                                                    We provide guidance on how to conduct a literature search:
                                                    <ul>
                                                        <li>Tools: ConnectedPapers, citation chains, and more</li>
                                                        <li>Quality criteria: how to identify peer-reviewed and high-quality papers</li>
                                                        <li>Example seminar papers that demonstrate what good work looks like</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    You independently research your chosen topic:
                                                    <ul>
                                                        <li>Find related work</li>
                                                        <li>Complete a transfer task (e.g., categorize papers into a taxonomy)</li>
                                                    </ul>
                                                </li>
                                            </ol>

                                            <h4>Step 3–5: Submission, Presentation, Final Submission</h4>
                                            <ol start="3">
                                                <li><strong>Submit</strong> your seminar paper.</li>
                                                <li>
                                                    <strong>Present</strong> your work:
                                                    <ul>
                                                        <li>Presentation: max 10 minutes</li>
                                                        <li>Questions: 20 minutes</li>
                                                    </ul>
                                                </li>
                                                <li><strong>Final submission</strong> of the revised seminar paper.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seminar Topics Section */}
            <section id="seminar" className="home-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-3 section-heading">
                            <h1>Past Topics</h1>
                            <p style={{ fontSize: '0.9em', color: '#666' }}>Winter Semester 2025</p>
                        </div>
                        <div className="col-xs-12 col-md-9">
                            <div className="course-list-item" itemScope itemType="http://schema.org/CreativeWork">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="course-description">
                                            The following topics were offered in the previous semester. They are listed here for reference.
                                        </div>
                                        <div className="seminar-details" style={{ marginTop: '1.5em' }}>
                                            {seminarTopics.map((topic, index) => (
                                                <details key={index}>
                                                    <summary>{topic.title}</summary>
                                                    {topic.content.split('\n\n').map((p, i) => (
                                                        <p key={i}>{p}</p>
                                                    ))}
                                                    {topic.objectives && (
                                                        <>
                                                            <strong>Objectives:</strong>
                                                            <ul>
                                                                {topic.objectives.map((obj, i) => (
                                                                    <li key={i}>{obj}</li>
                                                                ))}
                                                            </ul>
                                                        </>
                                                    )}
                                                    {topic.references && (
                                                        <>
                                                            <strong>References:</strong>
                                                            <ul>
                                                                {topic.references.map((ref, i) => (
                                                                    <li key={i}>{ref}</li>
                                                                ))}
                                                            </ul>
                                                        </>
                                                    )}
                                                </details>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Seminar;
