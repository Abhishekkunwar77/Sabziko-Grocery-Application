import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { RiDeleteBinLine } from "react-icons/ri";

const EmailList = () => {
  const { axios } = useAppContext();
  const [subscribers, setSubscribers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const { data } = await axios.get("/api/newsletter/subscribers");
        if (data.success) {
          setSubscribers(data.data);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Failed to fetch subscribers");
      } finally {
        setLoading(false);
      }
    };
    fetchSubscribers();
  }, [axios]);

  const handleSingleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `/api/newsletter/subscribers/${selectedId}`
      );
      if (data.success) {
        setSubscribers(
          subscribers.filter((subscriber) => subscriber._id !== selectedId)
        );
        setSelectedId(null);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to delete subscriber");
    } finally {
      setShowConfirm(false);
    }
  };

  const handleRowClick = (id) => {
    if (selectedId === null || selectedId === id) {
      setSelectedId(selectedId === id ? null : id);
    }
  };

  const openConfirm = (id) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const closeConfirm = () => {
    setShowConfirm(false);
    // Keep selectedId unchanged to preserve row highlight
  };

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-center flex-1">
          Subscribed Emails
        </h1>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : subscribers.length === 0 ? (
        <p className="text-gray-500">No subscribers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Email
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Subscribed At
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber) => (
                <tr
                  key={subscriber._id}
                  className={`hover:bg-gray-200  ${
                    selectedId === subscriber._id ? "bg-primary/15" : ""
                  }`}
                  onClick={() => handleRowClick(subscriber._id)}
                >
                  <td className="py-2 px-4 border-b text-gray-700">
                    {subscriber.email}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-700">
                    {new Date(subscriber.subscribedAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-700">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click from toggling selection
                        openConfirm(subscriber._id);
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      <RiDeleteBinLine className="h-5 w-5 cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showConfirm && (
        <div className=" fixed inset-0  bg-opacity-5 flex items-center justify-center z-50">
          <div className=" bg-white p-6 rounded-md shadow-lg max-w-sm w-full border-2 border-primary-dull">
            <p className="text-gray-700 mb-4 text-center">
              Are you sure you want to delete this subscriber?
            </p>
            <div className=" flex justify-center gap-4">
              <button
                onClick={closeConfirm}
                className="cursor-pointer px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSingleDelete}
                className="cursor-pointer px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailList;
