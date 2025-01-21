import { CreatorType } from '../../utils/types/CreatorType';
import './ContactItem.scss';

type Props = {
  creator: CreatorType;
};

export const ContactItem: React.FC<Props> = ({ creator }) => {
  return (
    <>
      <div className="card">
        <div className="card__img-container">
          <img
            src={creator.avatar}
            alt="creator Image"
            className="card__img"
          />
        </div>
        <h2 className="card__name title">
          {creator.name} {creator.surname}
        </h2>
        <div className="card__link-block">
          {/* <p className="card__title">GitHub</p> */}
          <a
            target="_blank"
            className="card__title"
            href={creator.githubLink}
          >
            GitHub
          </a>
          <p>
            <a
              target="_blank"
              className="card__link-block__link"
              href={creator.githubLink}
            >
              <img
                className="card__link-block__image card__link-block__image--git"
                src="./img/icons/gitIcon.svg"
                alt="creator"
              />{' '}
            </a>
          </p>
        </div>

        <div className="card__link-block">
          {/* <p className="card__title">LinkedIn</p> */}
          <a
            target="_blank"
            className="card__title"
            href={creator.linkedinLink}
          >
            LinkedIn
          </a>
          <p>
            <a
              target="_blank"
              className="card__link-block__link"
              href={creator.linkedinLink}
            >
              <img
                className="card__link-block__image card__link-block__image--linkedIn"
                src="./img/icons/linkedIn.svg"
              />{' '}
            </a>
          </p>
        </div>

        <div className="card__link-block hobby">
          <p className="card__title hobby__title">Hobbies</p>
          <p className="hobby__text">{creator.hobby}</p>
        </div>
        <button type="button"></button>
      </div>
    </>
  );
};
