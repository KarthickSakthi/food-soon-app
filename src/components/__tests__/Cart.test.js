import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import MOCT_DATA_RESTAURANT_MENU from "../mocks/mockResMenu.json"
import RestaurantMenu from "../RestaurantMenu"
import { Provider } from "react-redux"
import appStore from "../../store/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=>Promise.resolve({
    json:()=>Promise.resolve(MOCT_DATA_RESTAURANT_MENU)
}))

describe("Cart behaviour test cases",()=>{
    beforeEach(async()=>{
      await act(async ()=> render(
        <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantMenu/> 
        <Header/>
        <Cart/>
        </Provider>
        </BrowserRouter> ))
    })

    it("add items to cart",()=>{
        const actionHeader = screen.getByText("Recommended (20)");
        fireEvent.click(actionHeader);
        expect(screen.getAllByTestId("foodItems").length).toBe(20);
        const addItemBtns = screen.getAllByRole("button", {name:"Add +"});
        // fireEvent.click(addItemBtns[0]);
        expect(screen.getByText("Cart (0)")).toBeInTheDocument();
        fireEvent.click(addItemBtns[0]);
        expect(screen.getByText("Cart (1)")).toBeInTheDocument();
        fireEvent.click(addItemBtns[0]);
        expect(screen.getByText("Cart (2)")).toBeInTheDocument();
    })





})