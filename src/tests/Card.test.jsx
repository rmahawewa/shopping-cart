import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from '../components/Card';

describe("Card", () => {
    it("should render a button with the text 'Add to cart'", () => {
        render(<Card
                    id = ''
                    title = ''
                    image = ''
                    price = ''
                    quantity = ''
                    addToCart = ''
                    imageClick = {() => {}}
                    handleQuantityChange = {() => {}}
                    addToCartClick = {() => {}}
        />);
        const button = screen.getByRole("button", { name: "Add to cart" });
        expect(button).toBeInTheDocument();
    });

    it("should call the addToCartClick function when clicked", async () => {
        const addToCartClick = vi.fn();
        const user = userEvent.setup()
        render(<Card
            id = ''
            title = ''
            image = ''
            price = ''
            quantity = ''
            addToCart = ''
            imageClick = {() => {}}
            handleQuantityChange = {() => {}}
            addToCartClick = {addToCartClick}
        />);
        const button = screen.getByRole("button", { name: "Add to cart" });
        await user.click(button);
        expect(addToCartClick).toHaveBeenCalled();
    });

    it("should not call the addToCartClick function when it isn't clicked", async () => {
        const addToCartClick = vi.fn();
        render(<Card
            id = ''
            title = ''
            image = ''
            price = ''
            quantity = ''
            addToCart = ''
            imageClick = {() => {}}
            handleQuantityChange = {() => {}}
            addToCartClick = {addToCartClick}
        />);
        expect(addToCartClick).not.toHaveBeenCalled();
    });
});
