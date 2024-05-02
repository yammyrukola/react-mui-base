import React, { FC } from 'react';

interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search: FC<SearchProps> = (props) => {
  const { onChange, value } = props;

  return <input type="search" value={value} onChange={onChange} />;
};

export default Search;
