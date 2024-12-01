import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/*Integration Testing  */

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search list for sandwich", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(16);

  const searchBtn = screen.getByRole("button", { name: "🔍Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "sandwich" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);

  // expect(searchBtn).toBeInTheDocument();

  // console.log(searchBtn);
});

it("Should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(16);

  const topRatedRes = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedRes);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(16);
});
