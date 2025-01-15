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
          <p>GitHub</p>
          <p> link</p>
        </div>

        <div className="card__link-block">
          <p>Linkedin</p>
          <p> link</p>
        </div>

        <div className="card__hobby">
          <p>Hobby</p>
          <p>{creator.hobby}</p>
        </div>
      </div>
    </>
  );
};
