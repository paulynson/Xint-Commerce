import { useState, useEffect } from "react";
import axios from "axios";
import "../products/products.css";
import { Link } from "react-router-dom";

function SideBar() {
  const [productLimits, setProductLimits] = useState(null);

  // products Limits
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios("https://fakestoreapi.com/products?limit=2");
      console.log("Limit Product ", res.data);
      setProductLimits(res.data);
      // console.log(data.user);
    };
    fetchProduct();
  }, []);
  return (
    <div className="lg:w-1/3 lg:gap-6 shadow-md items-center justify-center bg-white">
      <section className=" p-2 relative">
        <aside className="px-6 ">
          <h3 className="font-bold text-2xl my-6">Product Lists</h3>

          <div className="flex flex-col md:flex-row  lg:flex-col gap-y-8 md:w-full">
            {productLimits &&
              productLimits?.map((limit) => (
                <div
                  key={limit.id}
                  className="text-center justify-center py-4 px-3 box-h shadow-md relative border"
                >
                  <Link to={`/product/${limit.id}`}>
                    <img
                      src={limit.image}
                      alt={limit.title}
                      className="w-full img-box"
                    />
                    <div className="py-6">
                      <p className="my-2 text-xs">{limit.title.slice(0, 24)}</p>
                      <p className="text-purple-700 font-bold text-2xl">
                        ${limit.price}
                      </p>
                    </div>
                  </Link>
                  <Link
                    to={`/product/${limit.id}`}
                    className="w-full bg-green-400 hover:bg-green-600 px-4 py-2 text-white absolute bottom-0 left-0 shadow-lg"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
          </div>
        </aside>
      </section>
    </div>
  );
}

export default SideBar;
