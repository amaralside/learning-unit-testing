import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays image for each scoop option from server', () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = screen.getAllByRole('img', { name: /scoops$/i });
  expect(scoopImages).toHaveLength(2);
});
