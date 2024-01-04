import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import RandomQuote from "./components/RandomQuote";
import NewQuoteButton from "./components/NewQuoteButton";
import Nav from "react-bootstrap/Nav";
import TweetQuoteLink from "./components/TweetQuoteLink";

function App() {
  return (
    <div className='App vh-100'>
      <Container
        fluid
        className='h-100 px-5 d-flex justify-content-center align-items-center'
      >
        <Card
          className='m-auto w-75'
          id='quote-box'
        >
          <Card.Header className='quote-header text-center fw-bold fs-4'>
            Random Quote
          </Card.Header>
          <Card.Body className='quote-container'>
            <RandomQuote />
          </Card.Body>
          <Card.Footer className='quote-footer d-flex justify-content-end'>
            <Nav variant='pills'>
              <Nav.Item>
                <TweetQuoteLink />
              </Nav.Item>
              <Nav.Item>
                <NewQuoteButton />
              </Nav.Item>
            </Nav>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}

export default App;
