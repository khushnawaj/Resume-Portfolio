const Alert = ({ children, type = 'info' }) => {
  const alertClasses = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    danger: 'alert-danger',
  };

  return (
    <div className={`alert ${alertClasses[type]}`}>
      {children}
    </div>
  );
};

export default Alert;