import { Badge } from "@/components/ui/badge";

const LotTitle = ({ title, tags }: { title: string; tags: string[] }) => (
  <div>
    <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
    <div className="flex gap-1 pt-2">
      {tags.map((tag, index) => (
        <Badge key={index} variant="secondary">
          {tag}
        </Badge>
      ))}
    </div>
  </div>
);

export default LotTitle;
