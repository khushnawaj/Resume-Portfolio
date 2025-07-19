const Loader = ({ size = 'md', variant = 'primary' }) => {
  const sizeClasses = {
    sm: 'loader-sm',
    md: 'loader-md',
    lg: 'loader-lg',
  };

  const variantClasses = {
    primary: 'loader-primary',
    secondary: 'loader-secondary',
    light: 'loader-light',
    dark: 'loader-dark',
  };

  return (
    <div className={`loader ${sizeClasses[size]} ${variantClasses[variant]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;