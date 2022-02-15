function Facebook({ color = 'black', ...props }) {
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
        d="M48 24.15a24 24 0 1 0-27.75 23.7V31.08h-6.09v-6.93h6.09v-5.29c0-6 3.58-9.34 9.07-9.34a36.87 36.87 0 0 1 5.37.47v5.91h-3c-3 0-3.91 1.85-3.91 3.74v4.51h6.66l-1.07 6.93h-5.62v16.77A24 24 0 0 0 48 24.15"
      />
    </svg>
  )
}

export default Facebook
