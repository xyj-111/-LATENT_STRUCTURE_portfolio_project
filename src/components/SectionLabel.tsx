type SectionLabelProps = {
  label: string;
  index?: string;
  align?: 'start' | 'end';
};

export function SectionLabel({ label, index, align = 'start' }: SectionLabelProps) {
  return (
    <div className={`section-label section-label--${align}`}>
      {index ? <span>{index}</span> : null}
      <strong>{label}</strong>
    </div>
  );
}
