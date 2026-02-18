import { Link } from 'react-router-dom';

const courses = [
    {
        title: '"Grundlagen der Kuenstlichen Intelligenz" @ TU Clausthal',
        link: '#courses/introduction_ai',
        semester: 'Winter Semester 2025-2026'
    },
    {
        title: '"Grundlagen der Informatik" @ TU Clausthal (DigiTec)',
        link: '#courses/introduction_ai',
        semester: 'Winter Semester 2025-2026'
    },
    {
        title: 'Research Projects',
        link: '#courses/research_projects',
        semester: 'Summer Semester 2025'
    },
    {
        title: 'European AI Team Projects',
        link: '/projects',
        external: true,
        semester: 'Summer Semester 2025'
    },
    {
        title: 'Proseminar (Bachelor) & Hauptseminar (Master)',
        link: '/seminar',
        external: true,
        semester: 'Summer Semester 2025'
    },
    {
        title: 'Bachelor and Master Theses',
        link: '/theses',
        external: true,
        semester: 'Summer Semester 2025'
    }
];

const Teaching = () => {
    return (
        <section id="courses" className="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-3 section-heading">
                        <h1>Teaching</h1>
                    </div>
                    <div className="col-xs-12 col-md-9">
                        {courses.map((course, index) => (
                            <div key={index} className="course-list-item" itemScope itemType="http://schema.org/CreativeWork">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="article-title" itemProp="name">
                                            {course.external ? (
                                                <Link to={course.link}>
                                                    <u>{course.title}</u>{' '}
                                                    <i className="fa fa-external-link" style={{ fontSize: '0.6em', marginLeft: '2px', verticalAlign: 'super' }} aria-hidden="true"></i>
                                                </Link>
                                            ) : (
                                                <a href={course.link}>{course.title}</a>
                                            )}
                                        </h3>
                                        <div className="course-date">
                                            <div itemProp="datePublished">{course.semester}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teaching;
