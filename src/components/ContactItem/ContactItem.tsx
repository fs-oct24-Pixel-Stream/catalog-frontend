import { CreatorType } from '../../utils/types/CreatorType';
import './ContactItem.scss';

type Props = {
  creator: CreatorType;
};

export const ContactItem: React.FC<Props> = ({ creator }) => {
  return (
    <>
      <div className="card">
        <img
          src={creator.avatar}
          alt="creator Image"
          className="card__img"
        />
        <h2 className="card__name title">
          {creator.name} {creator.surname}
        </h2>
        <div className="card__link-block">
          <p className="card__title">GitHub</p>
          <p>
            <a
              target="_blank"
              className="card__link-block__link"
              href={creator.githubLink}
            >
              <img
                className="card__link-block__image"
                src="./img/icons/gitIcon.svg"
              />{' '}
            </a>
          </p>
        </div>

        <div className="card__link-block">
          <p className="card__title">LinkedIn</p>
          <p>
            <a
              target="_blank"
              className="card__link-block__link"
              href={creator.linkedinLink}
            >
              <img
                className="card__link-block__image"
                src="./img/icons/linkedIn.svg"
              />{' '}
            </a>
          </p>
        </div>

        <div className="card__link-block hobby">
          <p className="card__title">Hobbies</p>
          <p>{creator.hobby}</p>
        </div>
      </div>
    </>
  );
};
