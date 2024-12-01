"use client";

import { useEffect, useState } from "react";
import { generatePromptInput } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";
import { RadioGroup, RadioGroupItem } from "@/ui/radio-group";
import { Input } from "@/ui/input";
import Output from "@/app/blood-report/_output";
import Error from "@/app/blood-report/_error";

import { Checkbox } from "@/ui/checkbox";
import { toast } from "sonner";

const DEFAULT_FORM_VALUES = {
  sex: "",
  age: "",
  hemoglobin: "",
  rbcCount: "",
  totalWbc: "",
  privacyCheck: false,
};

export default function MedicalForm() {
  const [loaded, setisLoaded] = useState(false);
  const [isAIEnabled, setIsAIEnabled] = useState(true);
  const [aiSession, setAiSession] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, sex: value }));
  };

  const onCheckboxSelection = (value: boolean) => {
    setFormData((prev) => ({ ...prev, privacyCheck: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.privacyCheck === false) {
      toast.error(
        "You must agree to the Privacy Policy before submitting the form."
      );
      return false;
    }
    setIsSubmitted(true);

    const prompt = generatePromptInput(formData);
    const session: any = aiSession;

    const stream = await session.promptStreaming(prompt);
    let fullResponse = null;
    for await (const chunk of stream) {
      fullResponse = chunk.trim();
      setResponseText(fullResponse);
    }
    setisLoaded(true);
  };

  const createSession = async () => {
    // @ts-expect-error, this is to check if ai object is available
    if (typeof ai !== "undefined") {
      // @ts-expect-error, this is to check if ai object is available
      const session: any = await ai?.languageModel?.create();
      setAiSession(session);
    }
  };

  const reset = () => {
    setIsSubmitted(false);
    setResponseText("");
    setFormData(DEFAULT_FORM_VALUES);
  };

  useEffect(() => {
    // @ts-expect-error, this is to check if ai object is available
    if (typeof ai == "undefined") {
      setIsAIEnabled(false);
    } else {
      createSession();
    }
  }, []);

  if (!isAIEnabled) {
    return <Error />;
  }

  return (
    <>
      <Card className="w-full max-w-md 2x1:w-1/2 mx-auto clamp ">
        <CardHeader>
          <CardTitle data-testid="page-header">
            {isSubmitted === false && "Medical Information Form"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isSubmitted === false && responseText === "" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Sex</Label>
                <RadioGroup
                  onValueChange={handleRadioChange}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hemoglobin">Hemoglobin (g/dL)</Label>
                <Input
                  type="number"
                  id="hemoglobin"
                  name="hemoglobin"
                  placeholder="Enter hemoglobin level"
                  value={formData.hemoglobin}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rbcCount">RBC Count (millions/uL)</Label>
                <Input
                  type="number"
                  id="rbcCount"
                  name="rbcCount"
                  placeholder="Enter RBC count"
                  value={formData.rbcCount}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalWbc">Total WBC (thousands/uL)</Label>
                <Input
                  type="number"
                  id="totalWbc"
                  name="totalWbc"
                  placeholder="Enter total WBC"
                  value={formData.totalWbc}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  required
                />
              </div>
              <div className="space-y-2 flex flex-row">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyCheck}
                  className="mr-2 flex self-center"
                  onCheckedChange={onCheckboxSelection}
                />
                <Label htmlFor="privacy" className="flex self-center pb-1">
                  I agree to the
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    className="px-1 underline"
                  >
                    Privacy Policy
                  </a>
                  and consent to the collection and processing of my personal
                  and health data in accordance with GDPR.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer"
                variant="outline"
              >
                Submit & Generate Report Analysis
              </Button>
            </form>
          ) : (
            <Output responseText={responseText} loaded={loaded} reset={reset} />
          )}
        </CardContent>
      </Card>
    </>
  );
}
