import './Skills.css';

const tags = [
  { name: 'React', color: '#61dafb' },
  { name: 'JavaScript', color: '#f0db4f' },
  { name: 'Node.js', color: '#3c873a' },
  { name: 'Express', color: '#ffffff' },
  { name: 'REST API', color: '#a855f7' },
  { name: 'Git', color: '#f05033' },
  { name: 'MongoDB', color: '#336791' },
  { name: 'Firebase', color: '#ffa611' },
];

export default function Skills() {
  return (
    <section className="skills" id='skills'>
      <span className="skills-tagline">// skills</span>
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-list">
        {tags.map((tag) => (
          <span key={tag.name} className="skills-tag">
            <span className="skills-dot" style={{ backgroundColor: tag.color }}></span>
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  );
}