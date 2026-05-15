import { createContext } from "react";

export const BookContext = createContext();

const BookProvider = ({children}) => {
console.log(children , "book context children");
    const data ={
        test:"demo",
        understand:false
    }


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};


export default BookProvider;