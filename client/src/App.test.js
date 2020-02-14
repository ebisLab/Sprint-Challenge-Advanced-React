import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react'
import "@testing-library/jest-dom";
import App from './App';
import "@testing-library/jest-dom/extend-expect";

import Navigation from './Components/Navigation'
import Player from './Components/Players'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Renders Header', () => {
const {getByText} = render(<App />)
const header = getByText(/Player's information/i);
expect(header).toBeInTheDocument()
})

// test("displays container", () => {
//   const { getByText } = render(<Navigation />);
//   getByText(/app/i);
// });

// test("displays navi", () => {
//   const { getByText } = render(<Navigation />);
//   expect(getByText(/navbar/i)).toBe("navbar")
  
// });



