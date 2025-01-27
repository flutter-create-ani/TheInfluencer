import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white animate-fadeIn">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-300 animate-fadeIn delay-200">
            We would love to hear from you. Please fill out this form or contact
            us using the information below.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Send us a message
              </CardTitle>
              <CardDescription className="text-sm">
                Fill out the form below and we will get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name">First name</label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name">Last name</label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    className="min-h-[150px] border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300">
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp delay-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-500" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">hello@example.com</p>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp delay-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-500" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">+1 (555) 000-0000</p>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp delay-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">
                  123 Example Street
                  <br />
                  San Francisco, CA 94105
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
