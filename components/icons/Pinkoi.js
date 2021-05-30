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
        d="M24.023 2.301c3.752 0 7.508-.02 11.261.008 2.244.017 4.415.399 6.305 1.722 2.438 1.707 3.722 4.088 3.999 7.025.077.806.11 1.618.111 2.428.007 7.235.013 14.473-.001 21.711-.006 2.263-.379 4.447-1.707 6.359-1.755 2.533-4.235 3.797-7.264 4.048-.872.073-1.753.095-2.633.097-7.101.007-14.204.015-21.306-.007-2.026-.006-4.012-.303-5.8-1.366-2.538-1.515-4.031-3.751-4.473-6.66a20.134 20.134 0 01-.209-2.976c-.016-7.304-.016-14.609-.003-21.914.003-2.085.322-4.115 1.446-5.927 1.535-2.476 3.77-3.927 6.645-4.331 1.101-.155 2.22-.2 3.333-.209 3.43-.024 6.864-.008 10.296-.008zm-3.885 23.317c0-1.691-.017-3.38.003-5.07.038-3.158 2.562-5.708 5.581-5.663 2.923.042 5.285 2.313 5.479 5.269.181 2.694-1.912 5.285-4.687 5.681-1.063.15-2.156.079-3.235.111-.547.013-.779.204-.786.703-.015.979-.009 1.961 0 2.94.003.43.25.669.668.666 1.149-.011 2.302.028 3.442-.081 5.128-.488 9.359-5.169 8.873-10.697-.575-6.551-7.666-10.819-13.658-8.063-3.879 1.784-5.866 4.938-5.978 9.193-.08 3.124.009 6.254-.024 9.38-.026 2.603-1.229 4.467-3.637 5.53-.185.08-.412.306-.421.475-.006.172.19.419.363.526.777.479 1.576.92 2.367 1.378.782.451 1.246.432 1.945-.143 2.368-1.946 3.636-4.444 3.697-7.521.031-1.536.006-3.076.008-4.614z"
      />
    </svg>
  )
}

export default Pinkoi