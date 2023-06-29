import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './index.js';

describe('Main component', () => {
    test('renders navigation links', () => {
      const navigate = jest.fn();
      render(<Main navigate={navigate} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Menu')).toBeInTheDocument();
      expect(screen.getByText('About Us')).toBeInTheDocument();
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    test('submits form successfully', () => {
      const navigate = jest.fn();
      render(<Main navigate={navigate} />);
  
      fireEvent.change(screen.getByLabelText('What is your name?'), {
        target: { value: 'Mister John' },
      });
  
      fireEvent.change(screen.getByLabelText('What Date?'), {
        target: { value: '2023-06-27' },
      });
  
      fireEvent.change(screen.getByLabelText('What time?'), {
        target: { value: '17:00' },
      });
  
      fireEvent.change(screen.getByLabelText('How many people? (Minimum of 1, maximum of 30)'), {
        target: { value: '9' },
      });
  
      fireEvent.click(screen.getByLabelText('On Click'));
      expect(navigate).toHaveBeenCalledWith('/confirmed');
    });
  });