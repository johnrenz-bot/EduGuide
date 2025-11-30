import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

type Guest = {
  role: string;
  username: string;
  isGuest?: boolean;
};
type LocationState = {
  user?: Guest | null;
};

export default function DashboardContact() {
  const location = useLocation();
  const guest = (location.state as LocationState)?.user ?? null;

  const [name, setName] = useState<string>(guest?.username ?? "");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("General Inquiry");
  const [message, setMessage] = useState<string>("");
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const maxChars = 1000;
  const remaining = Math.max(0, maxChars - message.length);

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("General Inquiry");
    setMessage("");
    setAnonymous(false);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!anonymous && (!name.trim() || !email.trim())) {
      setError("Please include your name and email, or toggle Anonymous.");
      return;
    }
    if (!message.trim()) {
      setError("Please enter a message.");
      return;
    }
    if (message.length > maxChars) {
      setError(`Message exceeds ${maxChars} characters.`);
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);
      resetForm();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <DashboardHeader guest={guest ?? null} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
          <ol className="flex gap-2 items-center">
            <li>
              <a href="/dashboard" className="hover:underline">
                Dashboard
              </a>
              <span className="mx-2">/</span>
            </li>
            <li aria-current="page" className="font-medium text-gray-800">
              Contact
            </li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
            <h1 className="text-3xl font-extrabold mb-2">Contact & Collab</h1>
            <p className="text-gray-700 mb-6 max-w-prose">
              Got feedback, found a bug, want to collaborate, or looking for mentorship?
              Reach out — I (a student & solo dev) build EduGuide and I try to respond in 1–3 business days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    disabled={anonymous}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    disabled={anonymous}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-60"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <option>General Inquiry</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Mentorship / Collab</option>
                  <option>Partnerships</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={8}
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
                />
                <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                  <div>
                    {subject === "Mentorship / Collab"
                      ? "If you're requesting mentorship, include your background and goals."
                      : "Tip: include URLs to screenshots, repos, or steps to reproduce."}
                  </div>
                  <div>{remaining} chars left</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={() => setAnonymous((s) => !s)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  Send anonymously
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  Reset
                </button>

                <div className="ml-auto text-sm text-gray-500">Required: Message {anonymous ? "(OK anonymous)" : "(Name & Email)"}</div>
              </div>

              {error && <div className="text-sm text-red-600">{error}</div>}
              {submitted && (
                <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                  Thanks! Your message has been sent. Typical response time: 1–3 business days.
                </div>
              )}
            </form>
          </div>

          <aside className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">For Students & Solo Developers</h3>

            <p className="text-sm text-gray-600 mb-4">
              I'm a student and solo dev — here are quick ways to get help, contribute, or collaborate.
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">Repository</div>
                <a
                  href="https://github.com/your-username/eduguide"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  github.com/your-username/eduguide
                </a>
              </div>

              <div>
                <div className="font-medium">Sample Projects</div>
                <a href="/dashboard/strands" className="text-indigo-600 hover:underline">Strand Explorer</a>
                <span className="mx-2">·</span>
                <a href="/dashboard/courses" className="text-indigo-600 hover:underline">Course Comparator</a>
              </div>

              <div>
                <div className="font-medium">Guides</div>
                <a href="/dashboard/resources/getting-started" className="text-indigo-600 hover:underline">Getting started as a solo dev</a>
              </div>

              <div>
                <div className="font-medium">Report a bug</div>
                <a
                  href="https://github.com/your-username/eduguide/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Open an issue on GitHub
                </a>
              </div>

              <div>
                <div className="font-medium">Mentorship & Collabs</div>
                <div className="text-gray-600">Limited slots. Mention your skills, availability, and goals when contacting.</div>
              </div>

              <div>
                <div className="font-medium">Response time</div>
                <div className="text-gray-600">Typical reply: 1–3 business days. Mentorship requests may take longer.</div>
              </div>

              <div>
                <div className="font-medium">Support</div>
                <a href="/dashboard/faq" className="text-indigo-600 hover:underline">Help & FAQ</a>
              </div>
            </div>

            <div className="mt-6 border-t pt-4 text-sm">
              <div className="font-medium">Prefer other channels?</div>
              <div className="text-gray-600 mt-2">
                Email: <a href="mailto:hello@eduguide.example" className="text-indigo-600 hover:underline">hello@eduguide.example</a>
              </div>
              <div className="text-gray-600">
                Twitter: <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">@yourhandle</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
