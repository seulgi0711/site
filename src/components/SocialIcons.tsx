import { theme } from './styled';

function Icon({ url, title, children }) {
  return (
    <a href={url} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="28"
        width="28"
        fill="currentColor"
      >
        <title>{title}</title>
        {children}
      </svg>
    </a>
  );
}

function Twitter() {
  return (
    <Icon url="https://twitter.com/seulgi0711" title="Twitter">
      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
    </Icon>
  );
}
function GitHub() {
  return (
    <Icon url="https://github.com/seulgi0711" title="GitHub">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </Icon>
  );
}
function Medium() {
  return (
    <Icon url="https://medium.com/@seulgi0711" title="Medium">
      <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z" />{' '}
    </Icon>
  );
}
function Patreon() {
  return (
    <Icon url="https://patreon.com/seulgi0711" title="Patreon">
      <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003" />
    </Icon>
  );
}

function Velog() {
  return (
    <a href="https://velog.io/@nakta" target="_blank">
      <svg width="28" height="28" viewBox="0 0 192 192" fill="none">
        <rect width="192" height="192" fill="currentColor" rx="24"></rect>
        <path
          d="M49 65.48V57.92C53.8 56.36 59.44 54.68 65.92 52.88C72.4 50.96 76.78 50 79.06 50C84.1 50 87.1 52.4 88.06 57.2L99.76 123.62C103.48 118.7 106.54 114.56 108.94 111.2C112.66 105.92 116.08 99.86 119.2 93.02C122.44 86.18 124.06 80.06 124.06 74.66C124.06 71.42 123.16 68.84 121.36 66.92C119.68 64.88 116.5 62.3 111.82 59.18C116.62 53.06 122.62 50 129.82 50C133.66 50 136.84 51.14 139.36 53.42C142 55.7 143.32 59.06 143.32 63.5C143.32 70.94 140.2 80.24 133.96 91.4C127.84 102.44 116.02 119.06 98.5 141.26L80.68 142.52L67 65.48H49Z"
          fill={theme.darkBackground}
        ></path>
      </svg>
    </a>
  );
}

function Email() {
  return (
    <a href="mailto:hjlsgj@gmail.com" target="_blank">
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" data-testid="email"><path fill="currentColor" d="M16 16.871L1.019 5H30.98L16 16.871zm0 3.146L1 8.131V27h30V8.131L16 20.017z"></path></svg>
      {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          fill="currentColor"
          d="M16 16.871L1.019 5H30.98L16 16.871zm0 3.146L1 8.131V27h30V8.131L16 20.017z"
          fill={theme.darkBackground}
        ></path>
      </svg> */}
    </a>
  );
}

export { Twitter, GitHub, Medium, Patreon, Velog, Email };
