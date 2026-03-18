import { client } from "./client";
import {
  servicesQuery,
  caseStudiesQuery,
  featuredCaseStudiesQuery,
  caseStudyBySlugQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
  testimonialsQuery,
  faqsByPageQuery,
  processStepsQuery,
} from "./queries";

export async function getServices() {
  return client.fetch(servicesQuery, {}, { next: { revalidate: 60 } });
}

export async function getCaseStudies() {
  return client.fetch(caseStudiesQuery, {}, { next: { revalidate: 60 } });
}

export async function getFeaturedCaseStudies() {
  return client.fetch(featuredCaseStudiesQuery, {}, { next: { revalidate: 60 } });
}

export async function getCaseStudyBySlug(slug: string) {
  return client.fetch(caseStudyBySlugQuery, { slug }, { next: { revalidate: 60 } });
}

export async function getBlogPosts() {
  return client.fetch(blogPostsQuery, {}, { next: { revalidate: 60 } });
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(blogPostBySlugQuery, { slug }, { next: { revalidate: 60 } });
}

export async function getTestimonials() {
  return client.fetch(testimonialsQuery, {}, { next: { revalidate: 60 } });
}

export async function getFaqsByPage(page: string) {
  return client.fetch(faqsByPageQuery, { page }, { next: { revalidate: 60 } });
}

export async function getProcessSteps() {
  return client.fetch(processStepsQuery, {}, { next: { revalidate: 60 } });
}
