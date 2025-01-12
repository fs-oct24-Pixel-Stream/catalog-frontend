import { useNavigate } from 'react-router';
import './BackButton.scss'

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className='back-button' onClick={() => {navigate(-1)}}>
      <div className='back-button__icon'></div>
      <span>Back</span>
    </button>
  );
}