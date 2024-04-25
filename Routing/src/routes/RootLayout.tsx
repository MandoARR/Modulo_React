import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RoolLayout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}