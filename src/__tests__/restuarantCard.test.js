import RestuarantCard from "../components/RestuarantCard";
import MOCK_DATA from "../utils/mockdata.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
test("should load restuarant card", ()=>{

    render(<RestuarantCard resData = {MOCK_DATA}/>)
    const name = screen.getByText("Samosa Party");
    expect(name).toBeInTheDocument();
})