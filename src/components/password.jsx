import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Copy, Pencil, Trash2 } from "lucide-react";

function Password() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [entries, setEntries] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!username || !password) return;

    setEntries([
      ...entries,
      {
        id: uuidv4(),
        username,
        password: btoa(password), // base64 encode
        editable: false,
      },
    ]);
    setUsername("");
    setPassword("");
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Password copied!");
  };

  const toggleEdit = (id) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, editable: !entry.editable } : entry
      )
    );
  };

  const handleEditChange = (id, field, value) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this entry?");
    if (confirmed) {
      setEntries(entries.filter((entry) => entry.id !== id));
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center py-8 font-Lacquer-Regular">
        Write your password here!
      </h1>
<div className='container mx-auto my-5 h-[80vh] w-[80%] rounded-2xl p-5 border-1 overflow-auto'>
        <div className="flex justify-between gap-3">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border w-full border-[#435786] rounded-md text-white px-2 bg-transparent"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full border-[#435786] rounded-md text-white px-2 bg-transparent"
          />
           <button
            onClick={handleAdd}
            disabled={username.length <= 3 || password.length <= 3}
            className="text-white px-4 py-2 rounded-md hover:bg-[#334570] border border-[#435786]"
          >
            Add
          </button>
        </div>
        
     

      <div className="container mx-auto w-[80%] rounded-2xl p-5  overflow-auto">
        {entries.length === 0 ? (
          <p className="text-center text-gray-400">No entries yet.</p>
        ) : (
          <table className="w-full text-white border-collapse">
            <thead>
              <tr className="border-b border-[#435786] text-left">
                <th className="p-2">Username</th>
                <th className="p-2">Password</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr
                  key={entry.id}
                  className="border-b border-[#435786] hover:bg-[#1a1a1a]"
                >
                  <td className="p-2">
                    {entry.editable ? (
                      <input
                        type="text"
                        value={entry.username}
                        onChange={(e) =>
                          handleEditChange(entry.id, "username", e.target.value)
                        }
                        className="bg-transparent border border-[#435786] rounded px-2 text-white"
                      />
                    ) : (
                      entry.username
                    )}
                  </td>
                  <td className="p-2">
                    {entry.editable ? (
                      <input
                        type="text"
                        value={atob(entry.password)}
                        onChange={(e) =>
                          handleEditChange(entry.id, "password", btoa(e.target.value))
                        }
                        className="bg-transparent border border-[#435786] rounded px-2 text-white"
                      />
                    ) : (
                      "•".repeat(10)
                    )}
                  </td>
                  <td className="p-2 flex justify-center gap-4">
                    <button onClick={() => handleCopy(atob(entry.password))}>
                      <Copy className="w-5 h-5 text-rosePink hover:scale-110" />
                    </button>
                    <button onClick={() => toggleEdit(entry.id)}>
                      <Pencil className="w-5 h-5 text-blue-400 hover:scale-110" />
                    </button>
                    <button onClick={() => handleDelete(entry.id)}>
                      <Trash2 className="w-5 h-5 text-red-500 hover:scale-110" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </div>
    </>
  );
}

export default Password;
