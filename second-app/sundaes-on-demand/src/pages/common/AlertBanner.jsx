import Alert from 'react-bootstrap/Alert';

export default function AlerBanner({ message, variant }) {
  const alertMessage =
    message || 'An unexpected error ocurred. Please try again later.';
  const alertVariant = variant || 'danger';

  return (
    <Alert variant={alertVariant} style={{ backgroungCollor: 'red' }}>
      {alertMessage}
    </Alert>
  );
}
