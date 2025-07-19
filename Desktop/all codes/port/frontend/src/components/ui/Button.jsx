import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  as: Component = 'button',
  ...props
}) => {
  const baseClass = 'btn';
  const variantClass = variant ? `btn-${variant}` : '';
  const sizeClass = size ? `btn-${size}` : '';

  // Special handling for Link components
  if (Component === Link) {
    return (
      <Link
        className={`${baseClass} ${variantClass} ${sizeClass}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Component
      className={`${baseClass} ${variantClass} ${sizeClass}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;