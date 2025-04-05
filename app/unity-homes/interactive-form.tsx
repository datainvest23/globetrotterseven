"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CheckCircle } from "lucide-react";

export default function InteractiveForm() {
  const [formType, setFormType] = useState<"info" | "mortgage" | "event">("info");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    age: "",
    income: 50000,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, income: value[0] }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formType === "event") {
      window.open("https://unity-homes.com/events/spain-2025", "_blank");
      return;
    }
    
    // Set confirmation message based on form type
    if (formType === "info") {
      setConfirmationMessage("Thank you! Information about Unity Homes will be sent to your email shortly.");
    } else if (formType === "mortgage") {
      setConfirmationMessage("Great news! Based on your information, you may qualify for a mortgage. Our representative will contact you soon.");
    }
    
    // Show confirmation message
    setShowConfirmation(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      city: "",
      age: "",
      income: 50000,
    });
    
    // Hide confirmation after 5 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">How can we help you?</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <RadioGroup
          value={formType}
          onValueChange={(value) => setFormType(value as "info" | "mortgage" | "event")}
          className="flex flex-col space-y-4"
        >
          <div className={`relative p-4 border rounded-lg transition-all ${formType === "info" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
            <RadioGroupItem value="info" id="info" className="absolute top-4 left-4" />
            <Label htmlFor="info" className="block ml-8 font-medium mb-2">
              Receive Information via Email
            </Label>
          </div>
          
          <div className={`relative p-4 border rounded-lg transition-all ${formType === "mortgage" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
            <RadioGroupItem value="mortgage" id="mortgage" className="absolute top-4 left-4" />
            <Label htmlFor="mortgage" className="block ml-8 font-medium mb-2">
              See if You Qualify for a Mortgage (in ~2 mins)
            </Label>
          </div>
          
          <div className={`relative p-4 border rounded-lg transition-all ${formType === "event" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
            <RadioGroupItem value="event" id="event" className="absolute top-4 left-4" />
            <Label htmlFor="event" className="block ml-8 font-medium mb-2">
              Register for Our Upcoming Investors Event in Spain
            </Label>
          </div>
        </RadioGroup>
        
        {/* Conditional fields based on form type */}
        <div className="space-y-4">
          {(formType === "info" || formType === "mortgage") && (
            <>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </>
          )}
          
          {formType === "mortgage" && (
            <>
              <div>
                <Label htmlFor="city">City in Spain</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => handleSelectChange("city", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="madrid">Madrid</SelectItem>
                    <SelectItem value="barcelona">Barcelona</SelectItem>
                    <SelectItem value="valencia">Valencia</SelectItem>
                    <SelectItem value="seville">Seville</SelectItem>
                    <SelectItem value="malaga">Malaga</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="18"
                  max="100"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="30"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="income" className="mb-2 block">
                  Annual Income (€): {formData.income.toLocaleString()}
                </Label>
                <Slider
                  id="income"
                  min={10000}
                  max={250000}
                  step={5000}
                  value={[formData.income]}
                  onValueChange={handleSliderChange}
                  className="my-4"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>€10,000</span>
                  <span>€250,000+</span>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Submit button changes based on form type */}
        <Button
          type="submit"
          className="w-full"
        >
          {formType === "info" && "Request Information"}
          {formType === "mortgage" && "Check Qualification"}
          {formType === "event" && "Register for Event"}
        </Button>
      </form>
      
      {/* Confirmation message */}
      {showConfirmation && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <CheckCircle className="text-green-500 h-5 w-5 mr-2" />
          <p className="text-green-800">{confirmationMessage}</p>
        </div>
      )}
    </div>
  );
} 