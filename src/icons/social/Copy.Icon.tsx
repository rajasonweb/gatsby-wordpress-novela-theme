import React from "react";

const CopyIcon = ({ fill = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      enable-background="new 0 0 512 512"
      height="512"
      viewBox="0 0 512 512"
      width="512"
    >
      <g>
        <path
          d="m162.457 434.408c-23.427 23.444-61.433 23.444-84.861 0-23.075-23.059-23.443-60.249-1.088-83.757l126.465-126.465c-39.112-10.458-82.481-.832-113.748 28.904l-56.231 56.231c-44.711 47.015-43.975 121.395 2.176 167.514 46.855 46.887 122.867 46.887 169.722 0l51.846-51.846c31.425-31.404 41.785-75.905 31.086-115.947z"
          fill={fill}
        />
        <path
          d="m476.835 35.17c-46.119-46.151-120.499-46.887-167.514-2.176l-56.231 56.231c-29.735 31.268-39.361 74.637-28.904 113.748l126.465-126.465c23.508-22.355 60.697-21.987 83.757 1.088 23.444 23.428 23.443 61.433 0 84.861l-125.367 125.367c40.042 10.699 84.543.34 115.947-31.086l51.846-51.846c46.888-46.855 46.888-122.867.001-169.722z"
          fill={fill}
        />
        <path
          d="m164.774 347.228c11.714 11.722 30.717 11.722 42.43 0l140.023-140.023c11.722-11.714 11.722-30.717 0-42.43-11.53-11.538-30.125-11.722-41.878-.544l-141.12 141.12c-11.177 11.752-10.993 30.347.545 41.877z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default CopyIcon;
