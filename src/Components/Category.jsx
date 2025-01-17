import { useParams } from "react-router-dom"

const Category = () => {
const params = useParams();

  return (
    <div>
  
      {params.cate_name} Categories</div>
  )
}

export default Category