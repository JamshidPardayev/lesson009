import { useEffect, useState, type FormEvent } from "react";
import { useStudents } from "../../hooks/useStudents";

interface Props {
  editing: null | {
    id: number;
    fname: string;
    lname: string;
    birthdate: string;
    address: string;
    phone_number: string;
  };
  setEditing: (val: null) => void;
}

const Home = ({ editing, setEditing }: Props) => {
  const { createStudents, updateStudents } = useStudents();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const clearForm = () => {
    setName("");
    setSurname("");
    setDate("");
    setAddress("");
    setPhone("");
  };

  useEffect(() => {
    if (editing) {
      setName(editing.fname || "");
      setSurname(editing.lname || "");
      setDate(editing.birthdate?.split("T")[0] || "");
      setAddress(editing.address || "");
      setPhone(editing.phone_number || "");
    }
  }, [editing]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      fname: name,
      lname: surname,
      birthdate: date,
      address,
      phone_number: phone,
    };

    if (editing) {
      updateStudents.mutate(
        { id: editing.id, body: payload },
        {
          onSuccess: () => {
            clearForm();
            setEditing(null);
          },
        }
      );
    } else {
      createStudents.mutate(payload, {
        onSuccess: () => {
          clearForm();
        },
      });
    }
  };

  return (
    <div className="max-w-[1200px] px-3 mx-auto my-3">
      <h2 className="text-center text-[24px] font-semibold">
        {editing ? "Update Student" : "Create Student"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-[500px] border border-gray-400 bg-gray-50 mx-auto flex flex-col gap-2 p-3 rounded mt-2"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="First Name"
          required
          className="border border-gray-400 bg-white h-[40px] rounded px-2 outline-none"
        />
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Last Name"
          required
          className="border border-gray-400 bg-white h-[40px] rounded px-2 outline-none"
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          required
          className="border border-gray-400 bg-white h-[40px] rounded px-2 outline-none"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Address"
          required
          className="border border-gray-400 bg-white h-[40px] rounded px-2 outline-none"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone Number"
          required
          className="border border-gray-400 bg-white h-[40px] rounded px-2 outline-none"
        />
        <button className="h-[40px] rounded bg-gray-900 hover:bg-gray-800 duration-300 cursor-pointer text-white">
          {editing ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Home;
