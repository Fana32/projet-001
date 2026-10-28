export default function Competences() {
  const skillsList = [
    { categorie: 'Langages', items: ['JavaScript', 'Python', 'Java', 'PHP'] },
    { categorie: 'Web & Frameworks', items: ['React', 'HTML5', 'CSS3'] },
    { categorie: 'Outils', items: ['Git', 'GitHub', 'Docker', 'VS Code'] },
  ]

  return (
    <section className="cv-section skills">
      <h2>Compétences</h2>
      <div className="skills-grid">
        {skillsList.map((group, index) => (
          <div key={index} className="skill-card">
            <h3>{group.categorie}</h3>
            <ul>
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}