import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import quoteAPI from "../app/services/fetch-quote.service";
import { ProgressBar } from "react-bootstrap";

const RandomQuote = () => {
  const quote = useSelector(state => state.quote.quote);

  const loading = useSelector(state => state.quote.loading);

  const author = useSelector(state => state.quote.author);

  const dispatch = useDispatch();

  useEffect(() => {
    const randomQuote = dispatch(quoteAPI.endpoints.getQuote.initiate());

    return randomQuote.unsubscribe;
  }, [dispatch]);

  return (
    <blockquote className='blockquote mb-3 p-2'>
      {loading ? (
        <ProgressBar
          variant='info'
          animated
          now={50}
        />
      ) : (
        <>
          <p
            id='text'
            className='random-quote fst-italic fs-3'
          >
            {quote}
          </p>
          <footer
            id='author'
            className='blockquote-footer'
          >
            {author}
          </footer>
        </>
      )}
    </blockquote>
  );
};

export default RandomQuote;
