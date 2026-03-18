import { groq } from "next-sanity";

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    features,
    featured
  }
`;

export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] {
    _id,
    title,
    "slug": slug.current,
    description,
    category,
    image,
    results,
    services,
    challenge,
    solution,
    outcome,
    featured
  }
`;

export const featuredCaseStudiesQuery = groq`
  *[_type == "caseStudy" && featured == true] {
    _id,
    title,
    "slug": slug.current,
    description,
    category,
    image,
    results,
    services,
    featured
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    category,
    image,
    results,
    services,
    challenge,
    solution,
    outcome,
    featured
  }
`;

export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    readTime,
    author,
    tags,
    featuredImage
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    category,
    publishedAt,
    readTime,
    author,
    tags,
    featuredImage
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    role,
    company,
    rating,
    avatar
  }
`;

export const faqsByPageQuery = groq`
  *[_type == "faq" && page == $page] | order(order asc) {
    _id,
    question,
    answer
  }
`;

export const processStepsQuery = groq`
  *[_type == "processStep"] | order(order asc) {
    _id,
    week,
    title,
    description,
    deliverables
  }
`;
