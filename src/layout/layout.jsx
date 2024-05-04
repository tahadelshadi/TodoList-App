import Header from "../components/navbar/navbar";

const Layout = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        </>
    )}
export default Layout;