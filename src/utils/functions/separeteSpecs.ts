export const separeteSpecs = (param: string): string => {
  for (let i = 1; i < param.length; i++) {
    const currentChar = param[i];
    const previousChar = param[i - 1];

    if (isNaN(Number(currentChar)) && !isNaN(Number(previousChar))) {
      return `${param.slice(0, i)} ${param.slice(i)}`;
    }
  }
  return param;
};
