import { TUserInfo } from '../../models';
import { useFetchData } from '../../hooks/useFetchData';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Details = (props: { id: number }): JSX.Element => {
  const [{ data: user, isLoading, isError }] = useFetchData(
    `${import.meta.env.VITE_DATA_URL}/${props.id}.json`,
    {} as TUserInfo
  );

  const userInfo: TUserInfo = user as TUserInfo;

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {
        userInfo.id === props.id &&
        <ul id={String(userInfo.id)} className="user-details-list">
          <li className="info-avatar">
            <img src={userInfo.avatar} className="info-avatar-img" alt="user-avatar" />
          </li>
          <li className="info-name">{userInfo.name}</li>
          <li className="info-city">City: {userInfo.details.city}</li>
          <li className="info-company">Company: {userInfo.details.company}</li>
          <li className="info-position">Position: {userInfo.details.position}</li>
        </ul>
      }
    </>
  )
};

export default Details;