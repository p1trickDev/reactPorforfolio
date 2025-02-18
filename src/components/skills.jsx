const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li></li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>Database</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>Firebase</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3>DevOps</h3>
                    <ul>
                        <li>CI/CD</li>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Skills;
