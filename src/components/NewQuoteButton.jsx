import NavLink from "react-bootstrap/NavLink";
import quoteAPI from "../app/services/fetch-quote.service";
import { useDispatch } from "react-redux";

const NewQuoteButton = () => {
  const dispatch = useDispatch();
  const getNewQuote = () => {
    const newQuote = dispatch(quoteAPI.endpoints.getQuote.initiate());

    return newQuote.unsubscribe();
  };
  return (
    <NavLink
      as='button'
      className='new-quote-nav text-dark'
      onClick={getNewQuote}
    >
      New Quote
    </NavLink>
  );
};

export default NewQuoteButton;
