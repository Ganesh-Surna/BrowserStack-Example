import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../UI/Modal";
import { useQuery } from "@tanstack/react-query";
import { fetchEventDetails } from "../../util/http";
import ErrorBlock from "../ErrorBlock";

export default function TestCaseDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { id: params.id }],
    queryFn: ({ signal }) => fetchEventDetails({ signal, id: params.id }),
  });

  const handleClose = () => {
    navigate("/dashboard/folder");
  };

  let content;

  if (isPending) {
    content = <p>Loading...</p>;
  }
  if (isError) {
    content = (
      <ErrorBlock
        message={error.info?.message || "Failed to fetch event details!!"}
      />
    );
  }

  if (data) {
    content = (
      <div className="event-details">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <img className="event-image" src={data.image} />
        <p>{data.date}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
