import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
export default function Error({ error }) {
  const notify = () => toast.error(`${error.massage}`);
  console.log('from errro', error);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => notify(), [error]);
  return <div>{/* <button onClick={notify}>Notify !</button> */}</div>;
}
