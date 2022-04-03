import {useAppSelector} from '../../hooks';
import {Message} from './styled';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(({ERROR}) => ERROR.error);

  if (error) {
    return <Message>{error}</Message>;
  }

  return null;
}

export default ErrorMessage;
