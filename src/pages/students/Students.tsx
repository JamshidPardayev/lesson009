import type { FC } from "react";
import { useStudents } from "../../hooks/useStudents";
interface Student {
  id: number;
  fname: string;
  lname: string;
  birthdate: string;
  phone_number: string;
  address: string;
}
interface Props {
  setEditing: any;
}

const Students: FC<Props> = ({ setEditing }) => {
  const { getStudents, deleteStudents } = useStudents();
  const { data } = getStudents();
  console.log(data);

  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-3">
        {data?.map((item: Student) => (
          <div key={item?.id} className="border border-gray-300 p-2 rounded">
            <h2>
              {item?.fname} {item?.lname}
            </h2>
            <p>{item?.birthdate?.split?.("T")?.[0]}</p>

            <p>{item?.phone_number}</p>
            <p>{item?.address}</p>
            <div className="flex gap-1">
              <button
                onClick={() => setEditing(item)}
                className="w-full h-[35px] border-[2px] text-green-500 hover:text-green-700 rounded cursor-pointer duration-300 "
              >
                Update
              </button>
              <button
                onClick={() => deleteStudents.mutate(item?.id)}
                className="w-full h-[35px] border-[2px] text-red-500 hover:text-red-700 rounded cursor-pointer duration-300 "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
