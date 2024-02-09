const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-2">
    <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export default PageTitle;
