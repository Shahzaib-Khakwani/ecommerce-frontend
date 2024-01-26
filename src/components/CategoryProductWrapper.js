import CategoryProduct from "./CategoryProduct";
import { useParams } from "react-router-dom";
function CategoryProductWrapper() {
  const { category_slug, category_id } = useParams();
  return (
    <CategoryProduct category_slug={category_slug} category_id={category_id} />
  );
}

export default CategoryProductWrapper;
