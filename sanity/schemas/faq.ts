import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      description: "Which page this FAQ appears on",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Services", value: "services" },
          { title: "AI Employees", value: "ai-employees" },
          { title: "Process", value: "process" },
        ],
      },
      initialValue: "home",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      hidden: true,
    }),
  ],
  orderings: [
    { title: "Display Order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "question", subtitle: "page" },
  },
});
