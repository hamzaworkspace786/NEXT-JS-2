import { Products } from "../components/Products";
import { Reviews } from "../components/Reviews";
import { Suspense } from "react";

export default function Productreviews() {
  return (
    <div>
      <h1>Product Reviews</h1>

      <Suspense fallback={<div>Loading Product Details</div>}>
        <Products />
      </Suspense>
      <Suspense fallback={<div>Loading Reviews</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
