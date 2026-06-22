// All icons inherit color via currentColor unless noted.

export function IconPanelOpen() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path
        d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V6Z"
        strokeLinejoin="round"
      />
      <path d="M17 9V15" strokeLinecap="round" />
    </svg>
  )
}

export function IconPanelClose() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16H15ZM17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8H17ZM17 16V8H15V16H17Z"
        fill="currentColor"
      />
      <path
        d="M19 5V19H21V5H19ZM19 19H5V21H19V19ZM5 19V5H3V19H5ZM5 5H19V3H5V5ZM5 5V5V3C3.89543 3 3 3.89543 3 5H5ZM5 19H3C3 20.1046 3.89543 21 5 21V19ZM19 19V21C20.1046 21 21 20.1046 21 19H19ZM21 5C21 3.89543 20.1046 3 19 3V5H21Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconGlobe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" />
      <path d="M4 9.5H20" />
      <path d="M4 14.5H20" />
    </svg>
  )
}

export function IconTheme() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4V20ZM22 12C22 17.5228 17.5228 22 12 22C11.6252 22 11.2549 21.9793 10.8901 21.939C5.88912 21.3862 2 17.148 2 12C2 6.85205 5.88912 2.61382 10.8901 2.06098C11.2549 2.02066 11.6252 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconCheck() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function IconCube() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 7.5l9 5 9-5" />
      <path d="M3 7.5 12 3l9 4.5v9L12 21 3 16.5z" />
    </svg>
  )
}

export function IconChevron() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
