import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";
import TopLayer from '../components/TopLayer'
import React from "react";

describe('App component', () => {
    it('renders headline', () => {
        render(
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        );
        expect(screen.getByRole("heading").textContent).toMatch(/Welcome to our Site!/i);
        expect(screen.getByRole("link").textContent).toMatch(/Explore/);
    });
});

describe('Link navigation', () => {
    it('navigates to the correct URL when the link is clicked', async () => {
        render(
            <BrowserRouter>
            {/* <MemoryRouter initialEntries={['/']}> */}
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/toplayer" element={<TopLayer />} />
                </Routes>
            {/* </MemoryRouter> */}
            </BrowserRouter>
            
        );

        //Find the link
        const link = screen.getByRole("link", { name: /explore/i });

        //Simulate a click event
        await userEvent.click(link);

        console.log("path:" + window.location.pathname);
        console.log(link.href);
        console.log(link.textContent);

        await waitFor(() => {
            //Check if the URL has changed
            expect(window.location.pathname).toBe("/toplayer");
        })
        
    });
});