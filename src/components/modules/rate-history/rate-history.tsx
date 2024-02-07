const RateHistory = ({
  name,
  email,
  price,
}: {
  name: string;
  email: string;
  price: string;
}) => (
  <div className="flex items-center">
    <div className="space-y-1">
      <p className="text-sm font-medium leading-none">{name}</p>
      <p className="text-sm text-muted-foreground">{email}</p>
    </div>
    <div className="ml-auto font-medium">{price}</div>
  </div>
);

export default RateHistory;
