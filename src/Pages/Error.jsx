import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function Error() {
  const error = useRouteError();
  let errorStatus;
  let errorStatusText;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "page Not Found";
  }

  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <h3>{errorStatusText}</h3>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
}

export default Error;
