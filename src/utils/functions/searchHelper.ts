export type SearchParams = {
  [key: string]: string | string[] | null;
};

export function getSearchWith(
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams,
): string {
  const newParams = new URLSearchParams(currentParams.toString());

  Object.entries(paramsToUpdate).forEach(([key, value]) => {
    // Якщо значення параметра null або undefined, видаляємо його
    if (value === null || value === undefined) {
      newParams.delete(key);
    } else if (Array.isArray(value)) {
      newParams.delete(key); // видаляємо старі значення

      value.forEach((part) => {
        newParams.append(key, part);
      });
    } else {
      // Якщо значення існує, оновлюємо параметр
      newParams.set(key, value);
    }
  });

  return newParams.toString();
}
