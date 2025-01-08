import React from 'react';

type Props = {
  children: string;
};
export const Title: React.FC<Props> = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};
