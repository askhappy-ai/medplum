export interface LogoProps {
  readonly size: number;
  readonly fill?: string;
}

export function Logo(props: LogoProps): JSX.Element {
  return (
    <svg width={props.size} height={(props.size * 37) / 35} viewBox="0 0 35 37" fill={props.fill ?? 'none'} xmlns="http://www.w3.org/2000/svg">
      <title>Happy Logo</title>
      <path id="Vector" d="M22.2477 0H11.8554C5.3145 0 0 5.29797 0 11.8186V22.1786C0 28.6991 5.3145 33.9971 11.8554 33.9971H25.0664L34.1031 37V11.8186C34.1031 5.29797 28.7887 0 22.2477 0ZM17.0408 25.5032C17.0408 25.5032 16.8257 25.5032 16.7181 25.5032C13.8564 25.4174 11.1239 24.2377 9.07983 22.2L10.7366 20.5484C12.3718 22.1786 14.5019 23.1009 16.7826 23.1652C19.1494 23.2296 21.3225 22.3716 22.9578 20.7414L24.6145 22.393C22.592 24.4093 19.924 25.5032 17.0408 25.5032Z" fill={props.fill ?? "#8F6AFD"}/>
    </svg>
  );
}
