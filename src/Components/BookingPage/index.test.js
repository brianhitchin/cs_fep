import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './index';

test('should not submit the form for invalid data', () => {

    render(<BookingPage />);
    fireEvent.change(screen.getByLabelText('Guests'), { target: { value: 5 } });
    fireEvent.click(screen.getByText('Submit'));
    expect(navigate).not.toHaveBeenCalledWith('/confirmed');

});

test('should submit form for valid data', () => {

    render(<BookingPage />);
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-07-15' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText('Guests'), { target: { value: 8 } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Anniversary' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(navigate).toHaveBeenCalledWith('/confirmed');

});