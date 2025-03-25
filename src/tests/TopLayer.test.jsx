import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from "react";
import TopLayer from '../components/TopLayer'
import About from '../components/About.jsx';
import Store from '../components/Store.jsx';
import Checkout from '../components/Checkout.jsx';
import { useOutletContext } from 'react-router-dom';

describe('TopLayer component', () => {
    it('renders content', () => {
        render(
            <BrowserRouter>
            <TopLayer/>
            </BrowserRouter>
        );
        expect(screen.getByRole("link", {name: /about/i}).textContent).toMatch(/About/);
        expect(screen.getByRole("link", { name: /store/i}).textContent).toMatch(/Store/);
        expect(screen.getByRole("link", { name: /checkout/i}).textContent).toMatch(/Checkout/);
    });
});




vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useOutletContext: vi.fn(),
    };
});

  describe('Link navigation', () => {
    it('navigates to the store page', async () => {
      useOutletContext.mockReturnValue({
        data: [],
        category: '',
        imageClick: vi.fn(),
        handleQuantityChange: vi.fn(),
        addToCartClick: vi.fn(),
        handleSelectChange: vi.fn(),
      });
  
      render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TopLayer />} />
            <Route path="/toplayer/*" element={<TopLayer />} />
            <Route path="/toplayer/store" element={<Store />} />
          </Routes>
        </BrowserRouter>
      );
  
      const link = await screen.findByRole('link', { name: /store/i });
      await userEvent.click(link);
      await waitFor(() => expect(window.location.pathname).toBe('/toplayer/store'));
    });
  });




vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useOutletContext: vi.fn(),
    };
});

describe('Link navigation', () => {
    it('navigates to the checkout page', async () => {
      useOutletContext.mockReturnValue({
        data: [],
        category: '',
        imageClick: vi.fn(),
        handleQuantityChange: vi.fn(),
        addToCartClick: vi.fn(),
        handleSelectChange: vi.fn(),
      });
  
      render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TopLayer />} />
            <Route path="/toplayer/*" element={<TopLayer />} />
            <Route path="/toplayer/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      );
  
      const link = await screen.findByRole('link', { name: /checkout/i });
      await userEvent.click(link);
      await waitFor(() => expect(window.location.pathname).toBe('/toplayer/checkout'));
    });
  });



  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useOutletContext: vi.fn(),
    };
});

describe('Link navigation', () => {
    it('navigates to the about page', async () => {
      useOutletContext.mockReturnValue({
        data: [],
        category: '',
        imageClick: vi.fn(),
        handleQuantityChange: vi.fn(),
        addToCartClick: vi.fn(),
        handleSelectChange: vi.fn(),
      });
  
      render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TopLayer />} />
            <Route path="/toplayer/*" element={<TopLayer />} />
            <Route path="/toplayer" element={<About />} />
          </Routes>
        </BrowserRouter>
      );
  
      const link = await screen.findByRole('link', { name: /about/i });
      await userEvent.click(link);
      await waitFor(() => expect(window.location.pathname).toBe('/toplayer'));
    });
  });