import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import iphone from "../../assets/image/iphone-11.png";
import { Undo2, Edit, Trash2 } from "lucide-react";

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
];

const DetailItem = ({ label, value }) => (
  <div>
    <span className="text-sm font-medium text-gray-500">{label}</span>
    <p className="text-lg font-semibold text-gray-800">{value}</p>
  </div>
);

const DetailPhone = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const phone = dataPhone.find((p) => p.id === Number(id));

  const handleEdit = () => {
    navigate(`/phone/edit/${id}`);
  };

  if (!phone) {
    return (
      <div className="mt-10 text-center text-gray-600">Phone not found.</div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      {}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
      >
        <Undo2 size={16} />
        Kembali
      </button>

      {}
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
          {}
          <div className="flex-1 rounded-lg p-8">
            <img
              src={phone.image}
              alt={phone.title}
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>

          {}
          <div className="flex-1">
            <h1 className="mb-6 text-4xl font-bold text-gray-900">
              {phone.title}
            </h1>

            {}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <DetailItem label="Variant" value={phone.variant} />
              <DetailItem label="Internal" value={phone.internal} />
              <DetailItem label="Signal" value={phone.signal} />
              <DetailItem label="Model" value={phone.model} />
              <DetailItem label="Serial Number" value={phone.serialNumber} />
            </div>

            {}
            <div className="mt-8 flex gap-4 border-t border-slate-300 pt-6">
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-white transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <Edit size={16} />
                Edit Phone
              </button>
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 rounded-lg bg-transparent px-5 py-2.5 text-red-600 transition-all hover:bg-red-50 focus:ring-2 focus:ring-red-300 focus:outline-none"
              >
                <Trash2 size={16} />
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPhone;
