import { Link } from "react-router-dom";

export default function TestCaseItem({ event }) {
  return (
    <div className="tbody">
      <div className="tr">
        <p>
        <Link
            to={`/dashboard/folder/${event.id}`}
          >
            {event.id}
          </Link>
        </p>
        <p>
          <Link
            to={`/dashboard/folder/${event.id}`}
          >
            {event.title}
          </Link>
        </p>
      </div>
    </div>
  );
}
