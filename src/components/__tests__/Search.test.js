import { fireEvent, render ,screen} from "@testing-library/react";
import Body from "../Body"
import MOCK_RESTAURANT_LIST from "../mocks/RestaurantList.mock.json" 
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=> Promise.resolve({
        json:()=>  Promise.resolve(MOCK_RESTAURANT_LIST)
    })
)

describe("Behaviour Test Cases",()=>{

    // beforeAll(async()=>{
    //     await act(async()=> render(
    //         <BrowserRouter><Body/></BrowserRouter>
    // ))
    // })

beforeEach(async()=>{
    await act(async()=> render(
        <BrowserRouter><Body/></BrowserRouter>
))
})
    it("Should search result for Pizza text input",()=>{
        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(20)
        const searchButton = screen.getByRole("button",{name:"Search"});
    
        const searchInputFields = screen.getByTestId("searchInput")
        fireEvent.change(searchInputFields,{target:{value:"Pizza"}}) 
        // expect(searchButton).toBeInTheDocument();
        fireEvent.click(searchButton);
        const cardsAfterSearch = screen.getAllByTestId("resCard");
        // console.log({cards})
        expect(cardsAfterSearch.length).toBe(2)
    })

    it("Should return Top Rated restaurants",()=>{
        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(20)
        const topRateBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});

        fireEvent.click(topRateBtn);
        const cardsAfterSearch = screen.getAllByTestId("resCard");
        // console.log({cards})
        expect(cardsAfterSearch.length).toBe(20)
    })
})

