import React from "react";
import ProductCard from "../../components/ui/cards/ProductCard";
import Button from "../../components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import iphone from "../../assets/image/iphone-11.png";

const Phone = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/phone/add-phone");
  };

  const dataPhone = [
    {
      id: 1,
      title: "Iphone 11",
      image: iphone,
      variant: "Black",
      internal: "64 GB",
      signal: "All Operator",
      serialNumber: "8757863746583",
      model: "HDJSGJJ/A",
    },
    {
      id: 2,
      title: "Iphone 12",
      image: iphone,
      image: "",
      variant: "Black",
      internal: "256 GB",
      signal: "All Operator",
      serialNumber: "8757863746583",
      model: "HDJSGJJ/A",
    },
    {
      id: 3,
      title: "Iphone 13",
      image: iphone,
      image: "",
      variant: "Black",
      internal: "128 GB",
      signal: "All Operator",
      serialNumber: "8757863746583",
      model: "HDJSGJJ/A",
    },
  ];
  return (
    <>
      <Button variant="primary" onClick={handleButton}>
        Tambah Data
      </Button>
      <div className="mt-6 flex justify-center gap-12">
        {dataPhone.map((phone) => (
          <ProductCard
            id={phone.id}
            internal={phone.internal}
            image={phone.image}
            model={phone.model}
            serialNumber={phone.serialNumber}
            signal={phone.signal}
            title={phone.title}
            variant={phone.variant}
          />
        ))}
      </div>
    </>
  );
};

export default Phone;
