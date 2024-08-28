import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Products from '../Products/Products';
import '@testing-library/jest-dom/extend-expect';

// Mock the imported assets
jest.mock('../../assets/eliteStyle.svg', () => 'eliteStyle.svg');
jest.mock('../../assets/cart.svg', () => 'cart.svg');
jest.mock('../../assets/product1.svg', () => 'product1.svg');
jest.mock('../../assets/product2.svg', () => 'product2.svg');
jest.mock('../../assets/product3.svg', () => 'product3.svg');
jest.mock('../../assets/product4.svg', () => 'product4.svg');
jest.mock('../../assets/cartIcon.svg', () => 'cartIcon.svg');

// Mock the Footer component
jest.mock('../Footer/Footer', () => () => <div>Footer</div>);

describe('Products Component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Router>
        <Products />
      </Router>
    );
  });

  test('renders header with logo and navigation links', () => {
    expect(screen.getByAltText('EliteStyle')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByAltText('cart')).toBeInTheDocument();
  });

  test('renders product content heading', () => {
    expect(screen.getByText('Products - 4')).toBeInTheDocument();
  });

  test('renders first product section', () => {
    expect(screen.getByAltText('Product1')).toBeInTheDocument();
    expect(screen.getByText('Lorna Fabric Accent Chair')).toBeInTheDocument();
    expect(screen.getByText('$243.00')).toBeInTheDocument();
    expect(screen.getByText(/Experience unparalleled comfort and style with our Lorna Fabric Accent Chair/i)).toBeInTheDocument();
    expect(screen.getByText('Product Dimensions')).toBeInTheDocument();
    expect(screen.getByText('79.0 cm H x 58.0 cm W x 58.0 cm L')).toBeInTheDocument();
    expect(screen.getByAltText('cartIcon')).toBeInTheDocument();
  });

  test('renders second product section', () => {
    expect(screen.getByAltText('Product2')).toBeInTheDocument();
    expect(screen.getByText('Kai Accent Chair')).toBeInTheDocument();
    expect(screen.getByText('$243.00')).toBeInTheDocument();
    expect(screen.getByText(/Experience unparalleled comfort and style with our Kai Accent Chair/i)).toBeInTheDocument();
    expect(screen.getByText('Product Dimensions')).toBeInTheDocument();
    expect(screen.getByText('79.0 cm H x 58.0 cm W x 58.0 cm L')).toBeInTheDocument();
    expect(screen.getByAltText('cartIcon')).toBeInTheDocument();
  });

  test('renders third product section', () => {
    expect(screen.getByAltText('Product3')).toBeInTheDocument();
    expect(screen.getByText('Lebowski Leatherette One Seater')).toBeInTheDocument();
    expect(screen.getByText('$243.00')).toBeInTheDocument();
    expect(screen.getByText(/Experience unparalleled comfort and style with our Lebowski Leatherette One Seater/i)).toBeInTheDocument();
    expect(screen.getByText('Product Dimensions')).toBeInTheDocument();
    expect(screen.getByText('79.0 cm H x 58.0 cm W x 58.0 cm L')).toBeInTheDocument();
    expect(screen.getByAltText('cartIcon')).toBeInTheDocument();
  });

  test('renders fourth product section', () => {
    expect(screen.getByAltText('Product4')).toBeInTheDocument();
    expect(screen.getByText('Laurel Bean Bag Cover')).toBeInTheDocument();
    expect(screen.getByText('$243.00')).toBeInTheDocument();
    expect(screen.getByText(/Experience unparalleled comfort and style with our Laurel Bean Bag Cover/i)).toBeInTheDocument();
    expect(screen.getByText('Product Dimensions')).toBeInTheDocument();
    expect(screen.getByText('79.0 cm H x 58.0 cm W x 58.0 cm L')).toBeInTheDocument();
    expect(screen.getByAltText('cartIcon')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
