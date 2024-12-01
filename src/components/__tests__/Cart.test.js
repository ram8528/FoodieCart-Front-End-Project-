import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { MOCK_DATA } from "../mocks/mockresMenu.json";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
jest.mock("../../../assets/logo.png", () => "logo.png");
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Snacks (3)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(
    screen.getByText("Cart is empty. Add Items to the cart!")
  ).toBeInTheDocument();
});
