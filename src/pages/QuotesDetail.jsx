import React from 'react'
import { useParams,Route } from "react-router-dom";
import Comments from '../components/Comments/Comments';

const QuotesDetail = () => {
        const param=useParams();

  return (
    <>
      <div>QuotesDetail</div>
      <p>{param.quotesId}</p>
      <Route path={`/quotes/${param.quotesId}/comments`}>
      <Comments/>
      </Route>
    </>
    
  )
}

export default QuotesDetail