import ProjectLayout from '../../components/ProjectLayout';

const SelfDrivingProject = () => {
    const features = [
        { icon: '🛰️', title: 'SLAM & Perception', description: 'Lightweight SLAM and sensor-fusion methods tailored to 1:10-scale platforms.' },
        { icon: '🧭', title: 'Path Planning', description: 'Trajectory planning and obstacle avoidance tuned for miniature autonomous vehicles.' },
        { icon: '🔧', title: 'End-to-end stack', description: 'Integration of perception, planning and low-level control for rapid prototyping.' },
        { icon: '⚡', title: 'Classroom-ready', description: "Includes a hardware-abstraction layer, ROS-compatible APIs, prebuilt Docker images and instructor lab scripts for reproducible student experiments and rapid prototyping." }
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
            heroYouTubeId="wrY34WyTEzo"
        >

        </ProjectLayout>
    );
};

export default SelfDrivingProject;
