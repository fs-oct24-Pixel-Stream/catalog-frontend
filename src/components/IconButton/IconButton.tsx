import './IconButton.scss';

type Props = {
  backgroundImage?: string;
  onClick?: () => void;
  className?: string;
  children?: string;
};

export const IconButton: React.FC<Props> = (props) => {
  const { backgroundImage, onClick, className = '', children } = props;

  return (
    <button
      className={`icon-button ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
      onClick={onClick}
    >
      {children && <span className="icon-button-text">{children}</span>}
    </button>
  );
};
