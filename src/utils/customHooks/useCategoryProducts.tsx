import { useAppSelector } from '../../app/hooks';

export const useCategoryProducts = (category: string) => {
  const phones = useAppSelector((state) => state.phones.phones);
  const tablets = useAppSelector((state) => state.tablets.tablets);
  const accessories = useAppSelector((state) => state.accessories.accessories);

  switch (category) {
    case 'phones':
      return phones;
    case 'tablets':
      return tablets;
    case 'accessories':
      return accessories;
    default:
      return [];
  }
};
