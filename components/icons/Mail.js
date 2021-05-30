function Mail({ color = 'black', ...props }) {
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
        d="M45.7 14.2c0-3.5-2-5.5-5.5-5.5H7.9c-3.6 0-5.6 1.9-5.6 5.5 0 6.6.1 13.2 0 19.8 0 3.6 2.6 5.6 5.5 5.5 5.4-.1 10.8 0 16.2 0s10.8-.1 16.2 0c3.1.1 5.6-2.1 5.6-5.6-.2-6.6-.1-13.2-.1-19.7zm-6.2 1.7L28 27.4c-1.1 1.1-2.5 1.7-4 1.7s-2.9-.6-4-1.7L8.5 15.9c-.5-.5-.5-1.3 0-1.8s1.3-.5 1.8 0l11.5 11.5c1.2 1.2 3.3 1.2 4.5 0l11.5-11.5c.5-.5 1.3-.5 1.8 0s.4 1.3-.1 1.8z"
      />
    </svg>
  )
}

export default Mail