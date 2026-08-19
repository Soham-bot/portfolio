import type { Metadata } from "next";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume — Soham Ahirrao",
  description: "Resume of Soham Ahirrao — Software Developer · Cloud · DevOps · Full Stack · B.Tech CSE @ ITM Skills University",
};

export default function ResumePage() {
  return <ResumeClient />;
}
