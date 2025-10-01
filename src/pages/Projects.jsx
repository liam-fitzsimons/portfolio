// import ProjectCard from '../components/ProjectCard';
import ProjectCarousel from '../components/ProjectCarousel';
import project1Img from '../assets/todo.png';
import project2Img from '../assets/escooter.png';
import project3Img from '../assets/dcr.png';
import project4Img from '../assets/react.svg';

const projects = [
    {
        title: "AI to capture E-Scooter Riding Thieves",
        description: "AI",
        image: project2Img,
        link: "https://www.youtube.com/watch?v=eJ805C6D1Os",
        github: "https://github.com/uoa-compsci399-s1-2024/capstone-project-2024-s1-sentry-team-8.git"
    },
    {
        title: "Debt Coverage Analysis (Finance Company Project)",
        description: "App that allows for user-friendly analysis for credit assessment",
        image: project3Img,
        link: "https://debt-coverage-analysis.vercel.app/",
        github: "https://github.com/liam-fitzsimons/debt-coverage-analysis.git"
    },
    {
        title: "To Do List",
        description: "My first project",
        image: project1Img,
        link: "https://todo-frontend-theta-bice.vercel.app/",
        github: "https://github.com/liam-fitzsimons/todo-frontend.git"
    },
    {
        title: "AI to capture E-Scooter Riding Thieves",
        description: "My second project",
        image: project2Img,
        link: "https://github.com/uoa-compsci399-s1-2024/capstone-project-2024-s1-sentry-team-8.git",
        github: "https://github.com/uoa-compsci399-s1-2024/capstone-project-2024-s1-sentry-team-8.git"
    }
];


function Projects() {
    return (
        // <section className="section projects">My projects...</section>
        <section className="section projects">
            <h2>My Projects</h2>
            <section style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '40px 0' }}>
                <ProjectCarousel projects={projects} />
            </section>
        </section>

    );
}

export default Projects;
