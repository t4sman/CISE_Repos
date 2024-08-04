import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { toHaveDescription } from '@testing-library/jest-dom/matchers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});