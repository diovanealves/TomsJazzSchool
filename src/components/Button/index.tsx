interface buttonProps {
  href: string;
  placeholder: string;
}

export function Button(props: buttonProps) {
  return (
    <a
      href={props.href}
      className="py-2 px-5 bg-highlight border-2 border-black shadow-shadow hover:opacity-90 transition-colors text-xl font-medium leading-relaxed"
    >
      {props.placeholder}
    </a>
  );
}
