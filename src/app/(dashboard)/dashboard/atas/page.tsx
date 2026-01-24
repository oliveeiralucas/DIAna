import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare } from "lucide-react";

export default function AtasPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atas Pendentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12 text-muted-foreground">
          <CheckSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
          <p>Nenhuma ata pendente de aprovação</p>
        </div>
      </CardContent>
    </Card>
  );
}
