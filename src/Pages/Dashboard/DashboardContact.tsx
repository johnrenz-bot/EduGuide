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
  const [message, setMessage] = useState<string>("");
  const [subject, setSubject] = useState<string>("General Inquiry");
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("General Inquiry");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <DashboardHeader guest={guest ?? null} />
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold mb-2">Contact Us</h1>
            <p className="text-gray-700 mb-6">
              If you have questions, feedback, or need assistance, send us a message and our team will get back to you within 1–2 business days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
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
                  <option>Partnerships</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
                />
              </div>

              {error && <div className="text-sm text-red-600">{error}</div>}

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setSubject("General Inquiry");
                    setMessage("");
                    setError("");
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  Reset
                </button>
                <div className="ml-auto text-sm text-gray-500">Required fields: Name, Email, Message</div>
              </div>
            </form>

            {submitted && (
              <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                Thanks! Your message has been sent. We'll reply to the email you provided.
              </div>
            )}
          </div>

          <aside className="w-full md:w-72 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="text-sm text-gray-600 mt-2">Email: <a href="mailto:hello@eduguide.example" className="text-indigo-600 hover:underline">hello@eduguide.example</a></div>
              <div className="text-sm text-gray-600">Phone: <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+1 (234) 567-890</a></div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Office Hours</h3>
              <div className="text-sm text-gray-600 mt-2">Mon–Fri · 9:00 AM — 5:00 PM</div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="/dashboard/faq" className="text-indigo-600 hover:underline">Help & FAQ</a></li>
                <li><a href="/dashboard/services" className="text-indigo-600 hover:underline">Our Services</a></li>
                <li><a href="/dashboard/contribute" className="text-indigo-600 hover:underline">Contribute</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
