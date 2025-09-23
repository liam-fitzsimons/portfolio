// import ProjectCard from '../components/ProjectCard';
import ProjectCarousel from '../components/ProjectCarousel';
import project1Img from '../assets/todo.png';
import project2Img from '../assets/react.svg';
import project3Img from '../assets/react.svg';
import project4Img from '../assets/react.svg';

const projects = [
    {
        title: "To Do List",
        description: "My first project",
        image: project1Img,
        link: "https://todo-frontend-theta-bice.vercel.app/"
    },
    {
        title: "Project Two",
        description: "My second project",
        image: project2Img,
        link: "https://example.com/project2"
    },
    {
        title: "Project Three",
        description: "My Third project",
        image: project2Img,
        link: "https://example.com/project3"
    },
    {
        title: "Project Four",
        description: "My fourth project",
        image: project2Img,
        link: "https://example.com/project4"
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
