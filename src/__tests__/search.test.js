import { promises } from "dns";
import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MockData from "../utils/mockFullData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import RestuarantCard from "../components/RestuarantCard";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

it("should load search box", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
        <RestuarantCard/>
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "search" });
  const search = screen.getByRole("textbox"); // Use getByRole("textbox") for input fields
  fireEvent.change(search, { target: { value: "Burger" } });
  fireEvent.click(searchBtn);

  // Assuming "card" is a data-testid assigned to the elements you want to count
  const cardsAfterSearch = screen.getAllByTestId("card");
  expect(cardsAfterSearch.length).toBe(4);
});
