import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  Shield, 
  CreditCard,
  Truck,
  Car,
  Users,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const supportCategories = [
  { value: "order", label: "Food Order Issues" },
  { value: "ride", label: "Ride Booking Problems" },
  { value: "payment", label: "Payment & Billing" },
  { value: "account", label: "Account Management" },
  { value: "technical", label: "Technical Support" },
  { value: "other", label: "Other Questions" }
];

const faqItems = [
  {
    category: "Food Orders",
    icon: Truck,
    questions: [
      {
        question: "How can I track my food order?",
        answer: "You can track your order in real-time through our app or website. You'll receive notifications at each stage: confirmed, preparing, out for delivery, and delivered."
      },
      {
        question: "What if my order is late or missing items?",
        answer: "Contact us immediately through the app or call our support line. We'll work with the restaurant to resolve the issue and provide appropriate compensation."
      },
      {
        question: "Can I modify my order after placing it?",
        answer: "You can modify your order within 2 minutes of placing it, provided the restaurant hasn't started preparation. Check the order status in your app."
      }
    ]
  },
  {
    category: "Ride Services",
    icon: Car,
    questions: [
      {
        question: "How do I cancel a ride booking?",
        answer: "You can cancel your ride through the app up to 5 minutes before the scheduled pickup time without any charges. After that, cancellation fees may apply."
      },
      {
        question: "What safety measures are in place?",
        answer: "All drivers undergo background checks, vehicles are regularly inspected, and we provide real-time tracking, emergency contacts, and 24/7 support."
      },
      {
        question: "How are ride fares calculated?",
        answer: "Fares are based on distance, time, demand, and ride type. We provide upfront pricing so you know the exact cost before booking."
      }
    ]
  },
  {
    category: "Payments",
    icon: CreditCard,
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, digital wallets (Apple Pay, Google Pay), and select mobile payment platforms."
      },
      {
        question: "When will I be charged?",
        answer: "Food orders are charged when placed. Ride bookings are charged after the trip is completed. You'll receive instant payment confirmations."
      },
      {
        question: "How do refunds work?",
        answer: "Refunds are processed within 3-5 business days to your original payment method. Promotional credits may be issued instantly to your account."
      }
    ]
  }
];

export default function Support() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.category || !contactForm.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setContactForm({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/85 via-purple-700/80 to-pink-700/85" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-16 w-16 h-16 bg-purple-300/25 rounded-full animate-bounce delay-300" />
        <div className="absolute top-32 right-20 w-12 h-12 bg-pink-400/30 rounded-full animate-pulse delay-800" />
        <div className="absolute bottom-24 left-12 w-20 h-20 bg-indigo-300/20 rounded-full animate-bounce delay-600" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              We're Here to <span className="text-purple-200">Help</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 animate-fade-in-delay">
              Get support for all your food delivery and ride booking needs
            </p>
            <div className="flex justify-center space-x-6 text-purple-100 animate-slide-up">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-200"></div>
                <span>Live Chat</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-400"></div>
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">Choose the best way to reach us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <Button className="bg-pink-600 text-white hover:bg-pink-700">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Support Hours */}
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-8 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium">24/7 Chat Support</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">Phone: 8AM - 10PM daily</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-pink-600" />
                  <span className="font-medium">Email: 24hr response</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find quick answers to common questions</p>
          </div>

          <div className="space-y-8">
            {faqItems.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <category.icon className="h-5 w-5 text-gray-600" />
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-l-4 border-indigo-200 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-gray-600">Can't find what you're looking for? Contact our support team directly</p>
          </div>

          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="py-3"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="py-3"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </Label>
                  <Select value={contactForm.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="py-3">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {supportCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Brief description of your issue"
                    value={contactForm.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="py-3"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your question or issue..."
                    value={contactForm.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}