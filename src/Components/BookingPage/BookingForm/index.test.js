import { render, screen } from "@testing-library/react";
import BookingForm from '../BookingForm/index';
import { initializeTimes, updateTimes } from "../index";

test('Choose date text is in the form', () => {

    render(<BookingForm />);
    const element = screen.getByText("Choose date:");
    expect(element).toBeInTheDocument();

})

