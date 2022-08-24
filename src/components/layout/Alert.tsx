import { AlertType } from "../../types/alert";

type Props = NonNullable<AlertType>;

export const Alert = ({ message }: Props) => {
  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4`}
    >
      <div className="alert alert-warning">
        <div>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <strong>{message}</strong>
        </div>
      </div>
    </div>
  );
};
