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
  // Replace GOOGLE_FORM_ID with your actual Google Form ID.
  const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfiOlic6cK8jsGHCrorOfg4v1yHkgoepJLelaKED0RWjFYvIQ/formResponse";

  return (
    <div className="py-10">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white animate-fadeIn">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-300 animate-fadeIn delay-200">
            We would love to hear from you. Please fill out this form or contact us using the information below.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Send us a message
              </CardTitle>
              <CardDescription className="text-sm">
                Fill out the form below and we will get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* The form posts data directly to your Google Form using the formResponse URL.
                  The target "hidden_iframe" prevents page navigation upon submission. */}
              <form
                action={googleFormURL}
                method="POST"
                target="hidden_iframe"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name">First name</label>
                    <Input
                      id="first-name"
                      name="entry.1217933275" // Update with your Google Form field name for first name.
                      placeholder="Enter your first name"
                      className="border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name">Last name</label>
                    <Input
                      id="last-name"
                      name="entry.1849751686" // Update with your Google Form field name for last name.
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    name="entry.419134198" // Update with your Google Form field name for email.
                    placeholder="Enter your email"
                    type="email"
                    className="border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    name="entry.757941659" // Update with your Google Form field name for message.
                    placeholder="Enter your message"
                    className="min-h-[150px] border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
                >
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
                <p className="text-foreground/60">theinfluencer1001@gmail.com</p>
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
                <p className="text-foreground/60">+91 8102856535</p>
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
                  KIET Group of institution
                  <br />
                  Ghaziabad, Uttar pradesh
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Hidden iframe to prevent redirect on form submission */}
      <iframe name="hidden_iframe" className="hidden" title="hidden_iframe" />
    </div>
  );
}
