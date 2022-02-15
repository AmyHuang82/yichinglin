function Pinkoi({ color = 'black', ...props }) {
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
        d="M24 1.26h11.81a11.19 11.19 0 0 1 6.6 1.8 9.7 9.7 0 0 1 4.2 7.36c.08.85.11 1.7.11 2.55v22.75A11.34 11.34 0 0 1 45 42.4a9.76 9.76 0 0 1-7.61 4.24c-.91.08-1.84.1-2.76.1H12.3a11.67 11.67 0 0 1-6.13-1.44 9.43 9.43 0 0 1-4.69-7 23.14 23.14 0 0 1-.22-3.12v-23A11.47 11.47 0 0 1 2.78 6a9.37 9.37 0 0 1 7-4.53 25.46 25.46 0 0 1 3.49-.22c3.56-.01 7.16.01 10.73.01ZM20 25.7v-5.32a5.91 5.91 0 0 1 5.85-5.93 5.77 5.77 0 0 1 .84 11.47 29.56 29.56 0 0 1-3.4.12c-.57 0-.81.21-.82.74v3.08a.64.64 0 0 0 .7.7c1.21 0 2.41 0 3.61-.09A10.43 10.43 0 0 0 36 19.26a10.32 10.32 0 0 0-20.58 1.18c-.09 3.28 0 6.56 0 9.83a6 6 0 0 1-3.81 5.8c-.19.09-.43.32-.44.5a.79.79 0 0 0 .38.55c.82.5 1.65 1 2.48 1.44a1.48 1.48 0 0 0 2-.15A10.06 10.06 0 0 0 20 30.53V25.7Z"
      />
    </svg>
  )
}

export default Pinkoi
