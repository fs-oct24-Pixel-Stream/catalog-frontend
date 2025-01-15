import './AboutSection.scss';

export interface Description {
  title: string;
  text: string[];
}

type Props = {
  description: Description[];
};

export const AboutSection: React.FC<Props> = ({ description }) => {
  return (
    <div className="about">
      {description.map((section) => {
        return (
          <section
            key={section.title}
            className="about__section"
          >
            <h4 className="about__section--title">{section.title}</h4>
            {section.text.map((paragraph) => (
              <p
                className="about__section--text"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </section>
        );
      })}
    </div>
  );
};
