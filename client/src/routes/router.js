import About from "../components/About";
import Blog from "../components/Blog";
import Home from "../components/Home";
import MainRoot from "../pages/MainRoot";



export const ROUTES=[
    {
        path:"",
        element:<MainRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/blog",
                element:<Blog/>
            }
        
        ]
    }
]