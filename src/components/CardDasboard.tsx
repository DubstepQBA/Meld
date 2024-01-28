import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  value: number;
}
const CardDasboard = ({ title, value }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>#{value} </p>
      </CardContent>
    </Card>
  );
};

export default CardDasboard;
