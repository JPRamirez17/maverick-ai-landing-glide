
import React from "react";
import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CalendarIcon } from "lucide-react";

const CalendarSection = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-display">
            Schedule a Consultation
          </h2>
          <p className="text-slate-600">
            Connect with our AI specialists to discuss how Maverick AI can transform your business operations. 
            Book a personalized demo and consultation session.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-900">Select a Date</CardTitle>
              <CardDescription>Choose a date from the calendar below</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(day) => day < new Date() || day.getDay() === 0 || day.getDay() === 6}
              />
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-900">Your Information</CardTitle>
              <CardDescription>Fill in your details to schedule an appointment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Selected Date</Label>
                <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-slate-50">
                  <CalendarIcon className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">
                    {date ? date.toLocaleDateString() : "No date selected"}
                  </span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4"
              >
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
