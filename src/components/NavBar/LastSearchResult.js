import React from 'react';
import { useSelector } from 'react-redux';
import LastSearchItem from './LastSearchItem';

const LastSearchResult = () => {
  const lastSearchResultArr = useSelector((state) => state.lastSearchResult);


  const lastSearchRender = lastSearchResultArr.map((lastResult) => {
    if (!lastResult) {
      return;
    }

    return <LastSearchItem key={lastResult} SearchKeyWord={lastResult} />;
  });

  return (
    <div>
      Last Search Result:
      {lastSearchRender}
    </div>
  );
};

export default LastSearchResult;
