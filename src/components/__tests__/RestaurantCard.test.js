import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import RESCARD_MOCT_DATA from "../mocks/ResCard.mock.json"
import "@testing-library/jest-dom"

 test("Should render a Restaurant card with props data",()=>{
    render(
        <RestaurantCard resData={RESCARD_MOCT_DATA}/>
    )

    const pizzaCard = screen.getByText("Pizza Hut");
    expect(pizzaCard).toBeInTheDocument();
 })

 //Home work: write test for Restaurant card with promoted label