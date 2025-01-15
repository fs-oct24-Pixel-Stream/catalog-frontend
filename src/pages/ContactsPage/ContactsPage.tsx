import { ContactItem } from '../../components/ContactItem/ContactItem';
import { creators as creatorsList } from '../../utils/constants';
import './ContactsPage.scss';

export const ContactsPage = () => {
  const creators = creatorsList;
  return (
    <div className="creators _container">
      {creators.map((creator) => {
        return (
          <ContactItem
            key={creator.id}
            creator={creator}
          />
        );
      })}
    </div>
  );
};
