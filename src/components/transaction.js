import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Transaction() {
  return (
    <>
      <tr>
        <th>Date</th>
        <th>
          Description <FontAwesomeIcon icon={faPen} />
        </th>
        {/* separation ici */}
        <th>Amount</th>
        <th>Balance</th>
      </tr>
    </>
  );
}
