import { creators as creatorsList } from '../../utils/constants/creators';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ContactItem } from '../../components/ContactItem/ContactItem';

import './ContactsPage.scss';

export const ContactsPage = () => {
  const creators = creatorsList;
  return (
    <div className="contacts _container">
      <Breadcrumbs />
      <h1 className="titleMain">Creators</h1>
      <div className="creators">
        {creators.map((creator) => {
          return (
            <ContactItem
              key={creator.id}
              creator={creator}
            />
          );
        })}
      </div>
    </div>
  );
};
