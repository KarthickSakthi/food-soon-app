import { fireEvent, render, screen} from "@testing-library/react"
import Header from "../Header.js"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore.js"
import "@testing-library/jest-dom"

describe("Should test the header component",()=>{
    beforeEach(()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
            </BrowserRouter>
        );
    })

    it("Should load a login button in header component",()=>{
    const loginButton = screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
    });

    it("Should load a cart item zero in header component",()=>{
    const cartItemZero = screen.getByText("Cart (0)");
    expect(cartItemZero).toBeInTheDocument();
    })

    it("Should change the Login Button to Logout while onClick",()=>{
        const loginButton = screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginButton);
        const logOutButton = screen.getByRole("button",{name:"Logout"});
    expect(logOutButton).toBeInTheDocument();
    })

} )

