type EditorialHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  meta?: string;
};

export function EditorialHeader({ id, eyebrow, title, body, meta }: EditorialHeaderProps) {
  return (
    <header className="editorial-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 id={id}>{title}</h1>
      {body ? <p className="editorial-copy">{body}</p> : null}
      {meta ? <p className="technical-caption">{meta}</p> : null}
    </header>
  );
}
