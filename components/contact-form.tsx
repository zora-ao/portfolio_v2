"use client";

import { useTransition } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  ContactInput,
  ContactSchema,
} from "@/lib/schemas/contact-schema";

import { sendContactEmail } from "@/actions/contact-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isPending, startTransition] =
    useTransition();

  const form = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactInput) => {
    startTransition(async () => {
      const result = await sendContactEmail(data);

      if (result.success) {
        toast.success(
          "Message sent successfully!"
        );

        form.reset();
      } else {
        toast.error(
          result.error ??
            "Failed to send message"
        );
      }
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 md:w-2/3 w-full text-center border border-strong px-3 py-5 rounded-2xl"
    >
      <div className="space-y-1">
        <Input
          placeholder="Your Name"
          {...form.register("name")}
          className="border-strong bg-background text-foreground"
        />

        {form.formState.errors.name && (
          <p className="text-sm text-red-500">
            {form.formState.errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Input
          type="email"
          placeholder="Your Email"
          {...form.register("email")}
          className="border-strong bg-background text-foreground"
        />

        {form.formState.errors.email && (
          <p className="text-sm text-red-500">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Textarea
          rows={6}
          placeholder="Your Message..."
          {...form.register("message")}
          className="border-strong bg-background text-foreground"
        />

        {form.formState.errors.message && (
          <p className="text-sm text-red-500">
            {form.formState.errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="bg-brand text-brand-foreground hover:bg-brand-600 w-full active:scale-[0.98]"
      >
        <Send className="mr-2 h-4 w-4" />

        {isPending
          ? "Sending..."
          : "Send Message"}
      </Button>
    </form>
  );
}