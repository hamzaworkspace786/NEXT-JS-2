import { serverSideFunction } from "../utils/server-utils";
import ImageSlider from "../components/Slider";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <div>
      Server Route Page {result}
      <ImageSlider />
    </div>
  );
}
