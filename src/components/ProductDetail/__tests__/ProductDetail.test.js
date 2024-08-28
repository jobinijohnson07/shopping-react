import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import ProductsDetail from '../ProductsDetail/ProductsDetail';
import '@testing-library/jest-dom/extend-expect';

// Mock the imported assets
jest.mock('../../assets/eliteStyle.svg', () => 'eliteStyle.svg');
jest.mock('../../assets/cart.svg', () => 'cart.svg');
jest.mock('../../assets/productDetail.svg', () => 'productDetail.svg');
jest.mock('../../assets/cartIcon.svg', () => 'cartIcon.svg');
jest.mock('../../assets/backButton.svg', () => 'backButton.svg');

// Mock the Footer component
jest.mock('../Footer/Footer', () => () => <div>Footer</div>);

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('ProductsDetail Component', () => {
  const mockedNavigate = useNavigate();

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Router>
        <ProductsDetail />
      </Router>
    );
  });

  test('renders header with logo and navigation links', () => {
    expect(screen.getByAltText('EliteStyle')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByAltText('cart')).toBeInTheDocument();
  });

  test('renders back button and triggers navigation on click', () => {
    const backButton = screen.getByAltText('backButton');
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });

  test('renders product detail section', () => {
    expect(screen.getByAltText('productDetail')).toBeInTheDocument();
    expect(screen.getByText('Lebowski Leatherette One Seater')).toBeInTheDocument();
    expect(screen.getByText('$243.00')).toBeInTheDocument();
    expect(screen.getByText('(Incl. of all taxes)')).toBeInTheDocument();
    expect(screen.getByText('This chair is made from high-quality Sheesham wood, which is durability & beauty')).toBeInTheDocument();
    expect(screen.getByText('Product Dimensions')).toBeInTheDocument();
    expect(screen.getByText('79.0 cm H x 58.0 cm W x 58.0 cm L')).toBeInTheDocument();
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
    expect(screen.getByAltText('cartIcon')).toBeInTheDocument();
  });

  test('renders product properties', () => {
    expect(screen.getByText('Product properties')).toBeInTheDocument();
    expect(screen.getByText('Product dimensions')).toBeInTheDocument();
    expect(screen.getByText('79.0 H x 58.0 W x 58.0 L (cm)')).toBeInTheDocument();
    expect(screen.getByText('Brand name')).toBeInTheDocument();
    expect(screen.getByText('Elite Style')).toBeInTheDocument();
    expect(screen.getByText('Warranty')).toBeInTheDocument();
    expect(screen.getByText('12 Months')).toBeInTheDocument();
    expect(screen.getByText('Is upholstered')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('Seating capacity')).toBeInTheDocument();
    expect(screen.getByText('1 person seating capacity')).toBeInTheDocument();
    expect(screen.getByText('Material')).toBeInTheDocument();
    expect(screen.getByText('Solid wood')).toBeInTheDocument();
    expect(screen.getByText('Secondary material')).toBeInTheDocument();
    expect(screen.getByText('Fabric')).toBeInTheDocument();
    expect(screen.getByText('Cushioned seating')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
