import './AboutSection.scss';

export interface Description {
  title: string
  text: string[];
}

type Props = {
  description: Description[];
};

export const AboutSection: React.FC<Props> = ({ description }) => {
  return (
    <div>
      <h3>About</h3>

      <br></br>
      {description.map(section => {
        return (
          <section>
            <h4>{section.title}</h4>
            <p>{section.text}</p>
          </section>
        );
      })}
    </div>
  );
}