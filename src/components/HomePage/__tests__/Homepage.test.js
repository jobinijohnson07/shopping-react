/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import '@testing-library/jest-dom/extend-expect';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Mock the imported assets
jest.mock('../../assets/eliteStyle.svg', () => 'eliteStyle.svg');
jest.mock('../../assets/cart.svg', () => 'cart.svg');
jest.mock('../../assets/chair.svg', () => 'chair.svg');
jest.mock('../../assets/chairs.svg', () => 'chairs.svg');
jest.mock('../../assets/lamps.svg', () => 'lamps.svg');
jest.mock('../../assets/sofas.svg', () => 'sofas.svg');
jest.mock('../../assets/tables.svg', () => 'tables.svg');
jest.mock('../../assets/interior.svg', () => 'interior.svg');
jest.mock('../../assets/productDetail.svg', () => 'productDetail.svg');
jest.mock('../../assets/cartIcon.svg', () => 'cartIcon.svg');
jest.mock('../../assets/sellingchair.svg', () => 'sellingchair.svg');

jest.mock('../Footer/Footer', () => () => <div>Footer</div>); // Mock Footer component

describe('HomePage Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
  });

  test('renders header with logo and navigation links', () => {
    expect(screen.getByAltText('EliteStyle')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByAltText('cart')).toBeInTheDocument();
  });

  test('renders first section with content and image', () => {
    expect(screen.getByText('Step Into')).toBeInTheDocument();
    expect(screen.getByText(/Next Generation/i)).toBeInTheDocument();
    expect(screen.getByText('of Online Shopping!')).toBeInTheDocument();
    expect(screen.getByText(/Experience a revolutionary online shopping journey/i)).toBeInTheDocument();
    expect(screen.getByAltText('chair')).toBeInTheDocument();
  });

  test('renders product categories section', () => {
    expect(screen.getByText('Product categories')).toBeInTheDocument();
    expect(screen.getByAltText('chairs')).toBeInTheDocument();
    expect(screen.getByAltText('lamps')).toBeInTheDocument();
    expect(screen.getByAltText('sofas')).toBeInTheDocument();
    expect(screen.getByAltText('tables')).toBeInTheDocument();
  });

  test('renders best selling products section with slider', () => {
    expect(screen.getByText('Just for your home')).toBeInTheDocument();
    expect(screen.getByText('Best selling products')).toBeInTheDocument();
    // Check if the slider is present by checking one of the images in it
    expect(screen.getAllByAltText('sellingChair')[0]).toBeInTheDocument();
  });

  test('renders 360° home tour section', () => {
    expect(screen.getByText('360° home tour')).toBeInTheDocument();
    expect(screen.getByText('Explore interiors using home tour')).toBeInTheDocument();
    expect(screen.getByText(/Suggestions for furniture placements in each types of rooms/i)).toBeInTheDocument();
    expect(screen.getByAltText('Interior')).toBeInTheDocument();
  });

  test('renders virtual showroom section', () => {
    expect(screen.getByText('Visualize products in')).toBeInTheDocument();
    expect(screen.getByText('Real-world environment')).toBeInTheDocument();
    expect(screen.getByText(/Immerse yourself in a virtual showroom/i)).toBeInTheDocument();
  });

  test('renders preview and maximize sections', () => {
    expect(screen.getByText('Preview furniture, decor, and accessories in your home setting for a perfect match every time')).toBeInTheDocument();
    expect(screen.getByText('Maximize your potential')).toBeInTheDocument();
    expect(screen.getByText('+94%')).toBeInTheDocument();
    expect(screen.getByText('+11%')).toBeInTheDocument();
    expect(screen.getByText('+35%')).toBeInTheDocument();
    expect(screen.getByText('+63%')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
