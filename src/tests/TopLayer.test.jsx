import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from "react";
import TopLayer from '../components/TopLayer'
import About from '../components/About.jsx';
import Store from '../components/Store.jsx';
import Checkout from '../components/Checkout.jsx';

describe('Link navigation', () => {
    it('navigates to the correct URL when the link is clicked', async () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/toplayer" element={<TopLayer />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </BrowserRouter>
            
        );

        //Find the link
        const link = screen.getByRole("link", { name: /store/i });

        //Simulate a click event
        await userEvent.click(link);

        console.log("path:" + window.location.pathname);
        console.log(link.href);
        console.log(link.textContent);

        await waitFor(() => {
            //Check if the URL has changed
            expect(window.location.pathname).toBe("/store");
        })
        
    });
});