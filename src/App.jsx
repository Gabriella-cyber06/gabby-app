import { NavLink, Outlet } from "react-router-dom";
import { categories } from "./constants";
import Nav from "./Components/Nav";

const App = () => {
 
  return (
    
    <>
    <Nav />
     <div className="flex gap-3">
      <div className="flex flex-col gap-3 border border-red-500 bg-slate-50 w-1/4 px-6 py-10 text-xl min-h-screen">
      {
        categories && categories.map((cate) => (
          <NavLink to={`/category/${cate.label}`} key={cate.id} className={({ isActive }) => { return isActive ? 
            'text-emerald-600 underline':''; }}>
          {cate.label}
          </NavLink>
        ))
      }
      </div>
      <Outlet />
    </div>
    </>
   
  )
}

export default App;