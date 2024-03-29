function Instagram({ color = 'black', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M47 24v10.15a13 13 0 0 1-11 12.68 13.63 13.63 0 0 1-2.11.16H14A13 13 0 0 1 1.17 36 13.66 13.66 0 0 1 1 33.9V14.12A13 13 0 0 1 11.18 1.34 12.56 12.56 0 0 1 14.05 1H34a13 13 0 0 1 12.91 11.2 14.66 14.66 0 0 1 .09 2.1v9.69ZM5.42 24v9.89a8.82 8.82 0 0 0 .14 1.63 8.61 8.61 0 0 0 8.55 7.06h20.62a8.59 8.59 0 0 0 7.84-8.47V13.99A8.6 8.6 0 0 0 34 5.43H14.05a8.69 8.69 0 0 0-2.1.26 8.59 8.59 0 0 0-6.51 8.36Z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 24a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm4.42 0A7.57 7.57 0 1 0 24 16.43 7.58 7.58 0 0 0 16.43 24ZM36.25 9.11a2.75 2.75 0 1 1-2.76 2.72 2.74 2.74 0 0 1 2.76-2.72Z"
      />
    </svg>
  )
}

export default Instagram
