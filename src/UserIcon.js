import { FaUser, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const UserIcon = ({ status, iconSize, size }) => {
  return (
    <div
      className={`border ${status === "complete" && "border-green-300"} ${
        status === "pending" && "border-yellow-300"
      } rounded-full flex items-center justify-center bg-white relative`}
      style={{width: size, height: size}}
    >
      <FaUser className={`text-${iconSize}`} />
      {status && (
        <div className="flex items-center justify-center badge bg-white w-5 h-5 rounded-full absolute top-0 right-0 ">
          {status === "complete" && (
            <FaCheckCircle
              className="text-green-300"
              title="payment completed"
            />
          )}
          {status === "pending" && (
            <FaHourglassHalf
              className="text-yellow-300"
              title="payment pending"
            />
          )}
        </div>
      )}
    </div>
  );
};

UserIcon.defaultProps = {
  iconSize: "3xl",
  size:"64px"
};

export default UserIcon;
