import NavLink from "react-bootstrap/NavLink";
import { BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const TweetQuoteLink = () => {
  return (
    <NavLink
      id='tweet-quote'
      href='https://twitter.com/intent/tweet'
      target='_blank'
      className='new-quote-nav mx-3'
    >
      <IconContext.Provider value={{ size: 20, color: "#212529" }}>
        <BsTwitter />
      </IconContext.Provider>
    </NavLink>
  );
};

export default TweetQuoteLink;
