const devices = {
  mobile: '767px',
  desktop: '768px',
};

const responsive = {
  mobile: `(max-width: ${devices.mobile})`,
  desktop: `(min-width: ${devices.desktop})`,
};

export default responsive;
