"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 37 },
  { name: "Apr", value: 20 },
  { name: "May", value: 33 },
  { name: "Jun", value: 42 },
];

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6 p-8">
      {/* Top 4 Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">28</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Clouds</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">23</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Wind</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">10.84</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Humidity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">10%</p>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Line Chart */}
      <section className="bg-card shadow-md rounded-2xl p-6 h-80">
        <h2 className="text-lg font-semibold mb-4">Monthly History</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </main>
  );
}
