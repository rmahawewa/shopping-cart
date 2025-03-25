import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from "react";
import Store from '../components/Store.jsx';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

describe('Store Dropdown', () => {
  it('should render a select element with the correct options', () => {
    render(
        <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Outlet
                context={{
                  data: [],
                  category: 'All',
                  imageClick: vi.fn(),
                  handleQuantityChange: vi.fn(),
                  addToCartClick: vi.fn(),
                  handleSelectChange: vi.fn(),
                }}
              />
            }
          >
            <Route index element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    expect(screen.getByRole('option', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: "Men's clothing" })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: "Women's clothing" })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Electronics' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Jewellery' })).toBeInTheDocument();
  });

});