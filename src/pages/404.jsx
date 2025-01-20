import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p className="my-5 text-xl font-medium">Sorry, an unexpected error has occurred.</p>
      <p className="font-medium">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;