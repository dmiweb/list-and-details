import { TUsers } from '../../models';
import { useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type ListProps = {
  onShowDetails: (id: number) => void
}

const List = (props: ListProps): JSX.Element => {
  const [indexItem, setIndexItem] = useState<number | null>(null);

  const { onShowDetails } = props;

  const [{ data: users, isLoading, isError }] = useFetchData(
    `${import.meta.env.VITE_DATA_URL}/users.json`,
    []
  );

  const usersData: TUsers[] = users as TUsers[];

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {
        !usersData.length ? null :
          <ul className="users-list">
            {usersData.map((user, index) =>
              <li
                className={index === indexItem ? 'user-item user-item-active' : 'user-item'}
                key={user.id}
                onClick={() => {onShowDetails(user.id); setIndexItem(index)}}>
                {user.name}
              </li>
            )}
          </ul>
      }
    </>

  )
}

export default List;