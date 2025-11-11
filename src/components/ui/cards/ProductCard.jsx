import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  variant,
  internal,
  title,
  signal,
  serialNumber,
  model,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/phone/${id}`);
  };

  return (
    <div className="flex justify-center" onClick={handleClick}>
      <div className="w-72 rounded-2xl bg-white p-5 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="relative mb-4">
          <img
            src={image}
            alt="iPhone 11"
            className="h-60 w-full rounded-xl object-cover"
          />

          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-white shadow-md">
              {variant}
            </span>
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
              {internal}
            </span>
          </div>
        </div>

        {/* Detail produk */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Signal :</span> {signal}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Serial Number :</span>{" "}
            {serialNumber}
          </div>
          <p className="text-sm text-gray-600">
            {" "}
            <span className="font-semibold">Model Number :</span> {model}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
