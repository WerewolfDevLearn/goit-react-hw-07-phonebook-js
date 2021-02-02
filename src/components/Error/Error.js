import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getError } from '../../redux/contacts';

export default function Error() {
  const error = useSelector(getError);
  console.log(error);

  const notify = () => toast.error(`${error}`);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => notify(), [error]);
  return <div>{/* <button onClick={notify}>Notify !</button> */}</div>;
}
